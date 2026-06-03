import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import { RootState } from '../store/store';
import AnimatedBackground from '../components/AnimatedBackground';
import {
  setLanguage,
  resetProgress,
  resetOnboarding,
} from '../store/slices/germanSlice';
import { curriculum, getLocalized, Level, Lesson } from '../constants/curriculum';
import { translations, LanguageCode } from '../utils/localization';
import GlassCard from '../components/GlassCard';
import CustomButton from '../components/CustomButton';
import { responsiveFontSize, responsiveSpacing, responsiveBorderRadius, scale } from '../utils/responsive';
import {
  Settings,
  Lock,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Award,
  ChevronRight,
  ChevronDown,
  Globe,
  RotateCcw,
} from 'lucide-react-native';

type NavigationProp = NativeStackNavigationProp<any>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const { language, completedLessons, quizScores } = useSelector(
    (state: RootState) => state.german
  );
  const t = translations[language];

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [expandedLevel, setExpandedLevel] = useState<string | null>('A1');

  // Logic to calculate progress
  const totalLessons = curriculum.reduce((acc, lvl) => acc + lvl.lessons.length, 0);
  const completedCount = Object.keys(completedLessons).filter(
    (k) => completedLessons[k]
  ).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const quizScoresArray = Object.values(quizScores);
  const averageAccuracy =
    quizScoresArray.length > 0
      ? Math.round(quizScoresArray.reduce((sum, score) => sum + score, 0) / quizScoresArray.length)
      : 0;

  // Unlocking mechanism: a level is unlocked if the previous level's lessons are all completed
  const isLevelUnlocked = (lvlId: string) => {
    const idx = curriculum.findIndex((l) => l.id === lvlId);
    if (idx === 0) return true;
    const prevLvl = curriculum[idx - 1];
    return prevLvl.lessons.every((lesson) => completedLessons[lesson.id]);
  };

  const handleResetProgress = () => {
    Alert.alert(t.resetAlertTitle, t.resetAlertDesc, [
      { text: t.cancel, style: 'cancel' },
      {
        text: t.reset,
        style: 'destructive',
        onPress: () => {
          dispatch(resetProgress());
          setSettingsVisible(false);
        },
      },
    ]);
  };

  const handleRestartTutorial = () => {
    dispatch(resetOnboarding());
    setSettingsVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Onboarding' }],
    });
  };

  const handleToggleLevel = (lvlId: string, unlocked: boolean) => {
    if (!unlocked) {
      Alert.alert(t.level, t.currentLevelLocked);
      return;
    }
    setExpandedLevel(expandedLevel === lvlId ? null : lvlId);
  };

  return (
    <AnimatedBackground gradientColor="#2563eb">
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>DeutschLernen</Text>
            <Text style={styles.headerSubtitle}>
              {t.dashboard}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => setSettingsVisible(true)}
          >
            <Settings size={22} color={theme.colors.text.primary} />
          </TouchableOpacity>
        </View>

        {/* Overall Stats Block */}
        <GlassCard header={t.overallProgress} style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statVal}>{progressPercent}%</Text>
              <Text style={styles.statLabel}>{t.lessonsCompleted}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statVal}>
                {completedCount}/{totalLessons}
              </Text>
              <Text style={styles.statLabel}>{t.dashboard}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statVal}>{averageAccuracy}%</Text>
              <Text style={styles.statLabel}>{t.accuracy}</Text>
            </View>
          </View>
          <View style={styles.progressBarBg}>
            <View
              style={[styles.progressBarFill, { width: `${progressPercent}%` }]}
            />
          </View>
        </GlassCard>

        {/* Levels List */}
        <Text style={styles.sectionTitle}>{t.level}</Text>

        {curriculum.map((lvl) => {
          const unlocked = isLevelUnlocked(lvl.id);
          const isExpanded = expandedLevel === lvl.id;
          const levelCompletedCount = lvl.lessons.filter((l) => completedLessons[l.id]).length;
          const levelTotalCount = lvl.lessons.length;
          const isLevelFinished = levelCompletedCount === levelTotalCount;

          return (
            <View key={lvl.id} style={styles.levelCardWrapper}>
              <TouchableOpacity
                style={[
                  styles.levelHeader,
                  { borderColor: unlocked ? lvl.color : theme.colors.glassBorder },
                  !unlocked && styles.levelHeaderLocked,
                ]}
                onPress={() => handleToggleLevel(lvl.id, unlocked)}
                activeOpacity={unlocked ? 0.7 : 1}
              >
                <View
                  style={[
                    styles.levelIconContainer,
                    { backgroundColor: unlocked ? lvl.accentColor : 'rgba(255, 255, 255, 0.02)' },
                  ]}
                >
                  {unlocked ? (
                    isLevelFinished ? (
                      <CheckCircle size={22} color={lvl.color} />
                    ) : (
                      <BookOpen size={22} color={lvl.color} />
                    )
                  ) : (
                    <Lock size={22} color={theme.colors.text.muted} />
                  )}
                </View>

                <View style={styles.levelTextContainer}>
                  <View style={styles.levelTitleRow}>
                    <Text
                      style={[
                        styles.levelCode,
                        { color: unlocked ? lvl.color : theme.colors.text.muted },
                      ]}
                    >
                      {lvl.id}
                    </Text>
                    <Text style={styles.levelTitle}>{lvl.title}</Text>
                  </View>
                  <Text style={styles.levelDesc}>
                    {getLocalized(lvl.description, language)}
                  </Text>
                </View>

                {unlocked && (
                  <View style={styles.chevronContainer}>
                    {isExpanded ? (
                      <ChevronDown size={20} color={theme.colors.text.secondary} />
                    ) : (
                      <ChevronRight size={20} color={theme.colors.text.secondary} />
                    )}
                  </View>
                )}
              </TouchableOpacity>

              {/* Expanded Lessons */}
              {unlocked && isExpanded && (
                <View style={styles.expandedLessonsContainer}>
                  {lvl.lessons.map((lesson) => {
                    const isCompleted = completedLessons[lesson.id];
                    const score = quizScores[lesson.id];

                    return (
                      <View key={lesson.id} style={styles.lessonItem}>
                        <View style={styles.lessonInfo}>
                          <View style={styles.lessonTitleRow}>
                            {isCompleted ? (
                              <CheckCircle size={16} color={theme.colors.success} style={styles.lessonStatusIcon} />
                            ) : (
                              <View style={styles.lessonBullet} />
                            )}
                            <Text style={styles.lessonTitleText}>
                              {getLocalized(lesson.title, language)}
                            </Text>
                          </View>
                          <Text style={styles.lessonDescText}>
                            {getLocalized(lesson.description, language)}
                          </Text>
                          {score !== undefined && (
                            <View style={styles.scoreBadge}>
                              <Award size={12} color="#f59e0b" />
                              <Text style={styles.scoreText}>
                                {t.quizScore}: {score}%
                              </Text>
                            </View>
                          )}
                        </View>

                        <CustomButton
                          title={isCompleted ? t.retakeQuiz : t.startLesson}
                          onPress={() =>
                            navigation.navigate('Lesson', {
                              levelId: lvl.id,
                              lessonId: lesson.id,
                            })
                          }
                          type={isCompleted ? 'glass' : 'primary'}
                          style={styles.lessonBtn}
                        />
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Settings Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={settingsVisible}
        onRequestClose={() => setSettingsVisible(false)}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t.settings}</Text>
              <TouchableOpacity onPress={() => setSettingsVisible(false)}>
                <Text style={styles.closeModalText}>{t.close}</Text>
              </TouchableOpacity>
            </View>

            {/* Language Selector */}
            <View style={styles.settingsSection}>
              <View style={styles.settingsLabelRow}>
                <Globe size={18} color={theme.colors.primary} />
                <Text style={styles.settingsSectionTitle}>
                  {t.selectLanguage}
                </Text>
              </View>
              <View style={styles.langRow}>
                {(['en', 'de', 'es', 'fr'] as LanguageCode[]).map((lang) => (
                  <TouchableOpacity
                    key={lang}
                    style={[
                      styles.langButton,
                      language === lang && styles.langButtonActive,
                    ]}
                    onPress={() => dispatch(setLanguage(lang))}
                  >
                    <Text
                      style={[
                        styles.langButtonText,
                        language === lang && styles.langButtonTextActive,
                      ]}
                    >
                      {lang.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Tutorial */}
            <TouchableOpacity
              style={styles.actionRow}
              onPress={handleRestartTutorial}
            >
              <HelpCircle size={18} color="#14b8a6" />
              <Text style={styles.actionRowText}>{t.howToUse}</Text>
            </TouchableOpacity>

            {/* Reset Stats */}
            <TouchableOpacity
              style={[styles.actionRow, styles.actionRowBorder]}
              onPress={handleResetProgress}
            >
              <RotateCcw size={18} color={theme.colors.danger} />
              <Text style={[styles.actionRowText, { color: theme.colors.danger }]}>
                {t.resetProgress}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
    </AnimatedBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    padding: responsiveSpacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveSpacing.lg,
  },
  headerTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(26),
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    marginTop: scale(2),
  },
  settingsButton: {
    width: scale(44),
    height: scale(44),
    borderRadius: responsiveBorderRadius(12),
    backgroundColor: theme.colors.glass,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsCard: {
    marginBottom: responsiveSpacing.xl,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(4),
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statVal: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(20),
    fontWeight: '800',
  },
  statLabel: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(11),
    fontWeight: '600',
    marginTop: scale(4),
    textTransform: 'uppercase',
  },
  statDivider: {
    width: 1,
    height: scale(24),
    backgroundColor: theme.colors.glassBorder,
  },
  progressBarBg: {
    height: scale(6),
    backgroundColor: theme.colors.border,
    borderRadius: scale(3),
    marginTop: responsiveSpacing.lg,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: scale(3),
  },
  sectionTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(18),
    fontWeight: '800',
    marginBottom: responsiveSpacing.md,
    letterSpacing: 0.5,
  },
  levelCardWrapper: {
    marginBottom: responsiveSpacing.md,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.glass,
    borderRadius: responsiveBorderRadius(theme.borderRadius.lg),
    borderWidth: 1,
    padding: responsiveSpacing.md,
    ...theme.shadows.medium,
  },
  levelHeaderLocked: {
    opacity: 0.5,
    backgroundColor: 'transparent',
  },
  levelIconContainer: {
    width: scale(46),
    height: scale(46),
    borderRadius: responsiveBorderRadius(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveSpacing.md,
  },
  levelTextContainer: {
    flex: 1,
  },
  levelTitleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  levelCode: {
    fontSize: responsiveFontSize(18),
    fontWeight: '800',
    marginRight: scale(6),
  },
  levelTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
  },
  levelDesc: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(12),
    marginTop: scale(3),
    lineHeight: scale(16),
  },
  chevronContainer: {
    paddingLeft: responsiveSpacing.sm,
  },
  expandedLessonsContainer: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderBottomLeftRadius: responsiveBorderRadius(theme.borderRadius.lg),
    borderBottomRightRadius: responsiveBorderRadius(theme.borderRadius.lg),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.glassBorder,
    paddingHorizontal: responsiveSpacing.md,
    paddingBottom: responsiveSpacing.md,
    marginTop: scale(-8),
    paddingTop: scale(16),
  },
  lessonItem: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: responsiveBorderRadius(theme.borderRadius.md),
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    padding: responsiveSpacing.md,
    marginBottom: responsiveSpacing.md,
  },
  lessonInfo: {
    width: '100%',
  },
  lessonTitleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: scale(4),
  },
  lessonTitleText: {
    flexShrink: 1,
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(14),
    fontWeight: '700',
  },
  lessonStatusIcon: {
    marginRight: scale(6),
  },
  lessonBullet: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: theme.colors.primary,
    marginRight: scale(10),
  },
  lessonDescText: {
    color: theme.colors.text.muted,
    fontSize: responsiveFontSize(12),
    lineHeight: scale(16),
  },
  lessonActionBtn: {
    marginTop: responsiveSpacing.md,
    alignSelf: 'flex-start',
  },
  lessonBtn: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    borderRadius: responsiveBorderRadius(8),
    alignSelf: 'flex-start',
  },
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    marginTop: scale(6),
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderRadius: responsiveBorderRadius(6),
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    alignSelf: 'flex-start',
  },
  scoreText: {
    color: '#f59e0b',
    fontSize: responsiveFontSize(10),
    fontWeight: '700',
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#121212',
    borderTopLeftRadius: responsiveBorderRadius(theme.borderRadius.xl),
    borderTopRightRadius: responsiveBorderRadius(theme.borderRadius.xl),
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    padding: responsiveSpacing.lg,
    paddingBottom: responsiveSpacing.xl + scale(20),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: responsiveSpacing.md,
    marginBottom: responsiveSpacing.lg,
  },
  modalTitle: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(18),
    fontWeight: '800',
  },
  closeModalText: {
    color: theme.colors.primaryLight,
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
  },
  settingsSection: {
    marginBottom: responsiveSpacing.lg,
  },
  settingsLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    marginBottom: responsiveSpacing.md,
  },
  settingsSectionTitle: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(13),
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(8),
  },
  langButton: {
    flex: 1,
    height: scale(46),
    borderRadius: responsiveBorderRadius(10),
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
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
    paddingVertical: responsiveSpacing.md,
  },
  actionRowBorder: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    marginTop: responsiveSpacing.xs,
  },
  actionRowText: {
    color: theme.colors.text.primary,
    fontSize: responsiveFontSize(15),
    fontWeight: '600',
  },
});

export default DashboardScreen;
