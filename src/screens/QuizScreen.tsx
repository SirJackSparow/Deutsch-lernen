import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme } from '../constants/theme';
import { RootState } from '../store/store';
import AnimatedBackground from '../components/AnimatedBackground';
import { submitQuizScore } from '../store/slices/germanSlice';
import { curriculum, getLocalized } from '../constants/curriculum';
import { translations } from '../utils/localization';
import GlassCard from '../components/GlassCard';
import CustomButton from '../components/CustomButton';
import LottieAnimation from '../components/LottieAnimation';
import { scale, responsiveFontSize, responsiveSpacing, responsiveBorderRadius } from '../utils/responsive';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  HelpCircle,
  Award,
  Sparkles,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const QuizScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const { language } = useSelector((state: RootState) => state.german);
  const t = translations[language];

  const { levelId, lessonId } = route.params || {};

  // Fetch curriculum details
  const targetLevel = curriculum.find((l) => l.id === levelId);
  const targetLesson = targetLevel?.lessons.find((les) => les.id === lessonId);
  const quizQuestions = targetLesson?.quiz || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Animated values
  const progressBarWidth = useRef(new Animated.Value(0)).current;
  const contentFade = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const popAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate progress bar on question change
    if (quizQuestions.length > 0) {
      const targetPercent = (currentIndex / quizQuestions.length) * 100;
      Animated.timing(progressBarWidth, {
        toValue: targetPercent,
        duration: 300,
        useNativeDriver: false, // width animation requires layout
      }).start();
    }
  }, [currentIndex, quizQuestions]);

  if (!targetLevel || !targetLesson || quizQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Quiz not found.</Text>
        <CustomButton
          title="Back"
          onPress={() => navigation.goBack()}
          type="primary"
        />
      </SafeAreaView>
    );
  }

  const currentQuestion = quizQuestions[currentIndex];
  const levelColor = targetLevel.color;

  const handleSelectOption = (option: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(option);
    
    // Tiny pop animation on selection
    popAnim.setValue(0.95);
    Animated.spring(popAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked) return;
    
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswerChecked(true);

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      // Trigger error shake animation
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 10, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true })
      ]).start();
    }
  };

  const handleNext = () => {
    // Fade out
    Animated.timing(contentFade, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswerChecked(false);
        // Fade in
        Animated.timing(contentFade, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        handleFinishQuiz();
      }
    });
  };

  const handleFinishQuiz = () => {
    const finalPercent = Math.round((correctCount / quizQuestions.length) * 100);
    dispatch(submitQuizScore({ lessonId: targetLesson.id, score: finalPercent }));
    
    // Animate progress to 100%
    Animated.timing(progressBarWidth, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setQuizFinished(true);
    });
  };

  if (quizFinished) {
    const finalPercent = Math.round((correctCount / quizQuestions.length) * 100);
    let message = t.lowScore;
    let badgeColor = theme.colors.danger;

    if (finalPercent === 100) {
      message = t.perfectScore;
      badgeColor = '#f59e0b'; // Gold
    } else if (finalPercent >= 70) {
      message = t.goodScore;
      badgeColor = theme.colors.success;
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultScrollContent}>
          <View style={styles.resultsContainer}>
            <View style={[styles.awardBadge, { backgroundColor: 'rgba(255, 255, 255, 0.02)', borderColor: levelColor }]}>
              {finalPercent >= 70 ? (
                <LottieAnimation type="trophy" size={120} autoPlay loop={false} />
              ) : (
                <Award size={64} color={badgeColor} />
              )}
            </View>

            <Text style={styles.resultsTitle}>{t.quizFinished}</Text>
            <Text style={styles.resultsSubtitle}>
              {getLocalized(targetLesson.title, language)}
            </Text>

            <GlassCard style={styles.scoreCard}>
              <Text style={styles.scoreLabel}>{t.score}</Text>
              <Text style={[styles.scorePercentText, { color: levelColor }]}>
                {finalPercent}%
              </Text>
              <Text style={styles.scoreFractionText}>
                {correctCount} / {quizQuestions.length} {t.correct}
              </Text>
            </GlassCard>

            <View style={styles.messageBox}>
              <Sparkles size={20} color={levelColor} />
              <Text style={styles.messageText}>{message}</Text>
            </View>

            <View style={styles.resultsActions}>
              <CustomButton
                title={t.backToDashboard}
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }],
                  })
                }
                type="primary"
                style={[styles.resultBtn, { backgroundColor: levelColor }]}
              />
              <CustomButton
                title={t.retakeQuiz}
                onPress={() => {
                  setCurrentIndex(0);
                  setSelectedOption(null);
                  setIsAnswerChecked(false);
                  setCorrectCount(0);
                  setQuizFinished(false);
                  progressBarWidth.setValue(0);
                  contentFade.setValue(1);
                }}
                type="glass"
                style={styles.resultBtn}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <AnimatedBackground gradientColor={levelColor}>
      <SafeAreaView style={styles.container}>
        {/* Header Navigation */}
        <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={22} color={theme.colors.text.primary} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {getLocalized(targetLesson.title, language)}
          </Text>
          <Text style={styles.questionIndexText}>
            {currentIndex + 1} of {quizQuestions.length}
          </Text>
        </View>
        <View style={styles.dummyHeaderRight} />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              backgroundColor: levelColor,
              width: progressBarWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View
          style={{
            opacity: contentFade,
            transform: [{ translateX: shakeAnim }, { scale: popAnim }],
            width: '100%',
          }}
        >
          {/* Question Display Card */}
          <GlassCard style={styles.questionCard}>
            <Text style={styles.questionHint}>FILL IN THE BLANK</Text>
            <Text style={styles.questionText}>
              {currentQuestion.question}
            </Text>
          </GlassCard>

          {/* Options Lists */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrectAnswer = option === currentQuestion.correctAnswer;

              let cardStyle: any = styles.optionCard;
              let textStyle: any = styles.optionText;
              let iconElement = null;

              if (isSelected) {
                cardStyle = [styles.optionCard, styles.optionCardSelected];
              }

              if (isAnswerChecked) {
                if (isCorrectAnswer) {
                  cardStyle = [
                    styles.optionCard,
                    styles.optionCardCorrect,
                    { borderColor: theme.colors.success },
                  ];
                  textStyle = [styles.optionText, styles.optionTextCorrect];
                  iconElement = <CheckCircle size={18} color="#ffffff" />;
                } else if (isSelected) {
                  cardStyle = [
                    styles.optionCard,
                    styles.optionCardIncorrect,
                    { borderColor: theme.colors.danger },
                  ];
                  textStyle = [styles.optionText, styles.optionTextIncorrect];
                  iconElement = <XCircle size={18} color="#ffffff" />;
                } else {
                  cardStyle = [styles.optionCard, styles.optionCardDisabled];
                }
              }

              return (
                <TouchableOpacity
                  key={idx}
                  style={cardStyle}
                  onPress={() => handleSelectOption(option)}
                  activeOpacity={isAnswerChecked ? 1 : 0.7}
                >
                  <Text style={textStyle}>{option}</Text>
                  {iconElement}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Explanation Overlay */}
          {isAnswerChecked && (
            <GlassCard
              header={t.explanation}
              style={[styles.explanationCard, { borderColor: levelColor }]}
            >
              <View style={styles.explanationRow}>
                <HelpCircle size={18} color={levelColor} style={styles.explanationIcon} />
                <Text style={styles.explanationText}>
                  {getLocalized(currentQuestion.explanation, language)}
                </Text>
              </View>
            </GlassCard>
          )}
        </Animated.View>
      </ScrollView>

      {/* Action Footer */}
      <View style={styles.footer}>
        {!isAnswerChecked ? (
          <CustomButton
            title="Check Answer"
            onPress={handleCheckAnswer}
            disabled={!selectedOption}
            type="primary"
            style={[
              styles.actionBtn,
              selectedOption
                ? { backgroundColor: levelColor }
                : { backgroundColor: theme.colors.secondary, opacity: 0.5 },
            ]}
          />
        ) : (
          <CustomButton
            title={currentIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
            onPress={handleNext}
            type="primary"
            style={[styles.actionBtn, { backgroundColor: levelColor }]}
          />
        )}
      </View>
      </SafeAreaView>
    </AnimatedBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(16),
  },
  errorText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveSpacing.lg,
    paddingVertical: responsiveSpacing.md,
  },
  backBtn: {
    width: scale(40),
    height: scale(40),
    borderRadius: responsiveBorderRadius(10),
    backgroundColor: theme.colors.glass,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  headerTitleContainer: {
    flex: 1,
    marginHorizontal: responsiveSpacing.md,
    alignItems: 'center',
  },
  headerTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '800',
  },
  questionIndexText: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(12),
    fontWeight: '600',
    marginTop: scale(2),
  },
  dummyHeaderRight: {
    width: scale(40),
  },
  progressBg: {
    height: scale(4),
    backgroundColor: theme.colors.border,
    width: '100%',
  },
  progressFill: {
    height: '100%',
  },
  scrollContent: {
    padding: responsiveSpacing.lg,
    paddingBottom: responsiveSpacing.xl * 3.5,
  },
  questionCard: {
    width: '100%',
    marginBottom: responsiveSpacing.lg,
    alignItems: 'center',
  },
  questionHint: {
    color: theme.colors.primaryLight,
    fontSize: responsiveFontSize(11),
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: responsiveSpacing.sm,
    textTransform: 'uppercase',
  },
  questionText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(22),
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: scale(30),
  },
  optionsContainer: {
    gap: scale(12),
    marginBottom: responsiveSpacing.lg,
  },
  optionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.glass,
    borderRadius: responsiveBorderRadius(theme.borderRadius.lg),
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    padding: responsiveSpacing.md,
    ...theme.shadows.small,
  },
  optionCardSelected: {
    borderColor: theme.colors.primaryLight,
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
  },
  optionCardCorrect: {
    backgroundColor: theme.colors.success,
    borderColor: theme.colors.success,
  },
  optionCardIncorrect: {
    backgroundColor: theme.colors.danger,
    borderColor: theme.colors.danger,
  },
  optionCardDisabled: {
    opacity: 0.4,
  },
  optionText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '700',
  },
  optionTextCorrect: {
    color: '#ffffff',
  },
  optionTextIncorrect: {
    color: '#ffffff',
  },
  explanationCard: {
    width: '100%',
    marginTop: responsiveSpacing.sm,
    borderWidth: 1,
  },
  explanationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(10),
  },
  explanationIcon: {
    marginTop: scale(2),
  },
  explanationText: {
    flex: 1,
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    lineHeight: scale(20),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    padding: responsiveSpacing.md,
    paddingBottom: responsiveSpacing.lg + scale(8),
  },
  actionBtn: {
    paddingVertical: scale(14),
    borderRadius: responsiveBorderRadius(12),
    alignItems: 'center',
  },
  resultScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: responsiveSpacing.lg,
  },
  resultsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  awardBadge: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveSpacing.lg,
  },
  resultsTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(26),
    fontWeight: '800',
    textAlign: 'center',
  },
  resultsSubtitle: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: responsiveSpacing.xs,
    marginBottom: responsiveSpacing.xl,
  },
  scoreCard: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: responsiveSpacing.xl,
    marginBottom: responsiveSpacing.lg,
  },
  scoreLabel: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(13),
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scorePercentText: {
    fontSize: responsiveFontSize(64),
    fontWeight: '900',
    marginVertical: responsiveSpacing.xs,
  },
  scoreFractionText: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    fontWeight: '700',
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    marginBottom: responsiveSpacing.xl,
  },
  messageText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
    textAlign: 'center',
  },
  resultsActions: {
    width: '100%',
    gap: scale(12),
  },
  resultBtn: {
    paddingVertical: scale(14),
    borderRadius: responsiveBorderRadius(12),
    alignItems: 'center',
    width: '100%',
  },
});

export default QuizScreen;
