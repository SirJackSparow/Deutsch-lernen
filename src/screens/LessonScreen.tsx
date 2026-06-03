import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme } from '../constants/theme';
import { RootState } from '../store/store';
import AnimatedBackground from '../components/AnimatedBackground';
import { curriculum, getLocalized } from '../constants/curriculum';
import { translations } from '../utils/localization';
import GlassCard from '../components/GlassCard';
import CustomButton from '../components/CustomButton';
import { ArrowLeft, BookOpen, Volume2, Sparkles } from 'lucide-react-native';
import { responsiveFontSize, responsiveSpacing, responsiveBorderRadius, scale } from '../utils/responsive';

const LessonScreen: React.FC = () => { 
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { language } = useSelector((state: RootState) => state.german);
  const t = translations[language];

  const { levelId, lessonId } = route.params || {};

  // Fetch target level & lesson
  const targetLevel = curriculum.find((l) => l.id === levelId);
  const targetLesson = targetLevel?.lessons.find((les) => les.id === lessonId);

  if (!targetLevel || !targetLesson) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Lesson not found.</Text>
        <CustomButton
          title="Back"
          onPress={() => navigation.goBack()}
          type="primary"
          style={styles.errorButton}
        />
      </SafeAreaView>
    );
  }

  const levelColor = targetLevel.color;
  const levelAccent = targetLevel.accentColor;

  // Play example sentence using Expo Speech (expo-speech) when available
  const handlePlay = useCallback(
    (text: string) => {
      let Speech: any = null;
      try {
        // dynamic require so this component still loads if the package isn't installed
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        Speech = require('expo-speech');
      } catch (err) {
        Speech = null;
      }

      if (!Speech) {
        Alert.alert(
          'Audio not available',
          'Text-to-speech library not installed. Run: npm install expo-speech and restart the app (Expo managed).' 
        );
        return;
      }

      try {
        // prefer german locale when speaking
        if (typeof Speech.speak === 'function') {
          Speech.speak(text, { language: 'de-DE' });
        }
      } catch (e) {
        Alert.alert('Playback error', 'Unable to play audio on this device.');
      }
    },
    []
  );

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
        </View>
        <View
          style={[
            styles.levelBadge,
            { backgroundColor: levelAccent, borderColor: levelColor },
          ]}
        >
          <Text style={[styles.levelBadgeText, { color: levelColor }]}>
            {targetLevel.id}
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Intro Section */}
        <View style={styles.introContainer}>
          <View style={styles.sectionHeader}>
            <Sparkles size={20} color={levelColor} style={styles.sectionIcon} />
            <Text style={[styles.sectionTitle, { color: levelColor }]}>
              {t.howToUse}
            </Text>
          </View>
          <Text style={styles.introText}>
            {getLocalized(targetLesson.introduction, language)}
          </Text>
        </View>

        {/* Rules Cards */}
        {targetLesson.rules.map((rule, idx) => (
          <GlassCard
            key={idx}
            header={`${t.explanation} ${idx + 1}`}
            style={styles.ruleCard}
          >
            <Text style={styles.ruleTitle}>
              {getLocalized(rule.title, language)}
            </Text>
            <Text style={styles.ruleExplanation}>
              {getLocalized(rule.explanation, language)}
            </Text>

            {/* Example Section */}
            <View style={[styles.exampleBox, { borderColor: levelColor }]}>
              <View style={styles.exampleHeader}>
                <Text style={[styles.exampleLabel, { color: levelColor }]}> 
                  {t.exampleLabel}
                </Text>
                <TouchableOpacity
                  style={styles.audioBtn}
                  onPress={() => handlePlay(rule.exampleGerman)}
                >
                  <Volume2 size={16} color={levelColor} />
                </TouchableOpacity>
              </View>
              <Text style={styles.exampleGerman}>{rule.exampleGerman}</Text>
              <Text style={styles.exampleTranslation}>
                {getLocalized(rule.exampleTranslation, language)}
              </Text>
            </View>
          </GlassCard>
        ))}

        {/* Summary Card */}
        <GlassCard header={t.summary} style={styles.summaryCard}>
          <View style={styles.summaryContent}>
            <BookOpen size={20} color={levelColor} style={styles.summaryIcon} />
            <Text style={styles.summaryText}>
              {getLocalized(targetLesson.summary, language)}
            </Text>
          </View>
        </GlassCard>
      </ScrollView>

      {/* Floating Quiz Action */}
      <View style={styles.footer}>
        <CustomButton
          title={t.startQuiz}
          onPress={() =>
            navigation.navigate('Quiz', {
              levelId: targetLevel.id,
              lessonId: targetLesson.id,
            })
          }
          type="primary"
          style={[styles.quizBtn, { backgroundColor: levelColor }]}
        />
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
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
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
    fontSize: responsiveFontSize(18),
    fontWeight: '800',
  },
  levelBadge: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    borderRadius: responsiveBorderRadius(8),
    borderWidth: 1,
  },
  levelBadgeText: {
    fontSize: responsiveFontSize(13),
    fontWeight: '800',
  },
  scrollContent: {
    padding: responsiveSpacing.lg,
    paddingBottom: responsiveSpacing.xl * 3,
  },
  introContainer: {
    marginBottom: responsiveSpacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveSpacing.sm,
  },
  sectionIcon: {
    marginRight: scale(8),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(13),
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  introText: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(15),
    lineHeight: scale(22),
  },
  ruleCard: {
    marginBottom: responsiveSpacing.lg,
  },
  ruleTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '700',
    marginBottom: responsiveSpacing.sm,
  },
  ruleExplanation: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    lineHeight: scale(20),
    marginBottom: responsiveSpacing.md,
  },
  exampleBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderLeftWidth: scale(3),
    borderRadius: responsiveBorderRadius(theme.borderRadius.md),
    padding: responsiveSpacing.md,
    marginTop: responsiveSpacing.xs,
  },
  exampleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(6),
  },
  exampleLabel: {
    fontSize: responsiveFontSize(11),
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  audioBtn: {
    width: scale(24),
    height: scale(24),
    borderRadius: responsiveBorderRadius(6),
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exampleGerman: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(16),
    fontWeight: '700',
  },
  exampleTranslation: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(13),
    marginTop: scale(4),
  },
  summaryCard: {
    marginBottom: responsiveSpacing.xl,
  },
  summaryContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  summaryIcon: {
    marginTop: scale(2),
    marginRight: scale(12),
  },
  summaryText: {
    flex: 1,
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    lineHeight: scale(20),
    fontStyle: 'italic',
  },
  errorButton: {
    marginTop: scale(16),
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
  quizBtn: {
    paddingVertical: scale(14),
    borderRadius: responsiveBorderRadius(12),
    alignItems: 'center',
  },
});

export default LessonScreen;
