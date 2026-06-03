import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../constants/theme';
import { RootState } from '../store/store';
import AnimatedBackground from '../components/AnimatedBackground';
import { completeOnboarding, setLanguage } from '../store/slices/germanSlice';
import { translations, LanguageCode } from '../utils/localization';
import CustomButton from '../components/CustomButton';
import GlassCard from '../components/GlassCard';
import { BookOpen, Award, CheckCircle, Globe } from 'lucide-react-native';
import { responsiveFontSize, responsiveSpacing, responsiveBorderRadius, scale } from '../utils/responsive';

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const currentLanguage = useSelector((state: RootState) => state.german.language);
  const t = translations[currentLanguage];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Animated values for title, description, and cards
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slides = [
    {
      title: t.welcome,
      subtitle: t.onboardingSubtitle,
      icon: <Globe size={48} color={theme.colors.primary} />,
      content: (
        <View style={styles.langSelectorContainer}>
          <Text style={styles.langLabel}>{t.selectLanguage}</Text>
          <View style={styles.langRow}>
            {(['en', 'de', 'es', 'fr'] as LanguageCode[]).map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.langButton,
                  currentLanguage === lang && styles.langButtonActive,
                ]}
                onPress={() => dispatch(setLanguage(lang))}
              >
                <Text
                  style={[
                    styles.langButtonText,
                    currentLanguage === lang && styles.langButtonTextActive,
                  ]}
                >
                  {lang.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ),
    },
    {
      title: t.onboardingStep1Title,
      subtitle: t.onboardingStep1Desc,
      icon: <BookOpen size={48} color="#14b8a6" />,
      content: (
        <GlassCard header={t.level} style={styles.previewCard}>
          <View style={styles.previewItem}>
            <Text style={styles.previewLevelCode}>A1</Text>
            <View style={styles.previewTextCol}>
              <Text style={styles.previewTitle}>Personalpronomen</Text>
              <Text style={styles.previewSub}>ich, du, er, sie, es...</Text>
            </View>
          </View>
        </GlassCard>
      ),
    },
    {
      title: t.onboardingStep2Title,
      subtitle: t.onboardingStep2Desc,
      icon: <CheckCircle size={48} color="#10b981" />,
      content: (
        <GlassCard header="QUIZ PREVIEW" style={styles.previewCard}>
          <Text style={styles.quizQuestionPreview}>
            Ich sitze auf ___ Stuhl.
          </Text>
          <View style={styles.quizOptionsPreview}>
            <View style={[styles.quizOptionPreview, styles.quizOptionCorrect]}>
              <Text style={styles.quizOptionText}>dem (Dative)</Text>
            </View>
            <View style={styles.quizOptionPreview}>
              <Text style={styles.quizOptionText}>den (Accusative)</Text>
            </View>
          </View>
        </GlassCard>
      ),
    },
    {
      title: t.onboardingStep3Title,
      subtitle: t.onboardingStep3Desc,
      icon: <Award size={48} color="#f59e0b" />,
      content: (
        <View style={styles.levelsPreviewContainer}>
          <View style={styles.badgeRow}>
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((lvl) => (
              <View key={lvl} style={styles.levelBadge}>
                <Text style={styles.levelBadgeText}>{lvl}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.levelBadgeDesc}>
            Unlock advanced levels by passing quizzes!
          </Text>
        </View>
      ),
    },
  ];

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    dispatch(completeOnboarding());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  // Re-run animations on slide changes
  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(30);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [activeIndex]);

  return (
    <AnimatedBackground gradientColor="#2563eb">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.logoText}>DeutschLernen</Text>
        {activeIndex < slides.length - 1 && (
          <TouchableOpacity onPress={handleFinish}>
            <Text style={styles.skipText}>{t.skip}</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.slideContainer}>
        <Animated.View
          style={[
            styles.animatedContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.iconContainer}>{slides[activeIndex].icon}</View>
          <Text style={styles.title}>{slides[activeIndex].title}</Text>
          <Text style={styles.subtitle}>{slides[activeIndex].subtitle}</Text>
          <View style={styles.customContentContainer}>
            {slides[activeIndex].content}
          </View>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                activeIndex === i ? styles.dotActive : null,
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          {activeIndex > 0 ? (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setActiveIndex(activeIndex - 1)}
            >
              <Text style={styles.backButtonText}>{t.back}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {activeIndex === slides.length - 1 ? t.getStarted : t.next}
            </Text>
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveSpacing.lg,
    paddingVertical: responsiveSpacing.md,
  },
  logoText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(20),
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  skipText: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveSpacing.xl,
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    width: scale(90),
    height: scale(90),
    borderRadius: responsiveBorderRadius(24),
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveSpacing.xl,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(28),
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: responsiveSpacing.sm,
  },
  subtitle: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(15),
    textAlign: 'center',
    lineHeight: scale(22),
    marginBottom: responsiveSpacing.xl,
  },
  customContentContainer: {
    width: '100%',
    marginTop: responsiveSpacing.sm,
  },
  langSelectorContainer: {
    alignItems: 'center',
  },
  langLabel: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(13),
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: responsiveSpacing.md,
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(12),
  },
  langButton: {
    width: scale(60),
    height: scale(48),
    borderRadius: responsiveBorderRadius(12),
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    backgroundColor: theme.colors.glass,
    justifyContent: 'center',
    alignItems: 'center',
  },
  langButtonActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primaryLight,
  },
  langButtonText: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    fontWeight: '700',
  },
  langButtonTextActive: {
    color: '#ffffff',
  },
  previewCard: {
    width: '100%',
  },
  previewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewLevelCode: {
    fontSize: responsiveFontSize(24),
    fontWeight: '800',
    color: '#14b8a6',
    marginRight: responsiveSpacing.md,
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
    width: scale(48),
    height: scale(48),
    borderRadius: responsiveBorderRadius(12),
    textAlign: 'center',
    lineHeight: scale(48),
  },
  previewTextCol: {
    flex: 1,
  },
  previewTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '700',
  },
  previewSub: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(12),
    marginTop: scale(2),
  },
  quizQuestionPreview: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    marginBottom: responsiveSpacing.md,
    textAlign: 'center',
  },
  quizOptionsPreview: {
    gap: scale(8),
  },
  quizOptionPreview: {
    height: scale(40),
    borderRadius: responsiveBorderRadius(8),
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    justifyContent: 'center',
    paddingHorizontal: responsiveSpacing.md,
  },
  quizOptionCorrect: {
    borderColor: '#10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  quizOptionText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(13),
    fontWeight: '600',
  },
  levelsPreviewContainer: {
    alignItems: 'center',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: scale(8),
    marginBottom: responsiveSpacing.md,
  },
  levelBadge: {
    width: scale(38),
    height: scale(38),
    borderRadius: responsiveBorderRadius(10),
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelBadgeText: {
    color: '#f59e0b',
    fontSize: responsiveFontSize(12),
    fontWeight: '800',
  },
  levelBadgeDesc: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(13),
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: responsiveSpacing.xl,
    paddingBottom: responsiveSpacing.xl,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: responsiveSpacing.lg,
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: theme.colors.border,
    marginHorizontal: scale(4),
  },
  dotActive: {
    width: scale(24),
    backgroundColor: theme.colors.primary,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(20),
  },
  backButtonText: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(15),
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: responsiveBorderRadius(14),
    paddingVertical: scale(14),
    paddingHorizontal: scale(28),
    minWidth: scale(120),
    alignItems: 'center',
    ...theme.shadows.small,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
  },
  placeholder: {
    width: 80,
  },
});

export default OnboardingScreen;
