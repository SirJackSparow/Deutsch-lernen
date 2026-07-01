import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../constants/theme';
import AnimatedBackground from '../components/AnimatedBackground';
import GlassCard from '../components/GlassCard';
import { responsiveFontSize, responsiveSpacing, responsiveBorderRadius, scale } from '../utils/responsive';
import {
  BookOpen,
  Coffee,
  Plane,
  Briefcase,
  ChevronRight,
  Volume2,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react-native';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { RootState } from '../store/store';
import { setVocabularyData, VocabularyWord } from '../store/slices/vocabularySlice';
import * as Speech from 'expo-speech';

const VOCAB_CATEGORIES = [
  { id: 'A1', title: 'A1 Vocabulary', desc: 'Beginner words and phrases', icon: BookOpen, color: '#10b981' },
  { id: 'A2', title: 'A2 Vocabulary', desc: 'Elementary vocabulary', icon: Coffee, color: '#f59e0b' },
  { id: 'B1', title: 'B1 Vocabulary', desc: 'Intermediate vocabulary', icon: Plane, color: '#3b82f6' },
  { id: 'B2', title: 'B2 Vocabulary', desc: 'Upper intermediate words', icon: Briefcase, color: '#8b5cf6' },
  { id: 'C1', title: 'C1 Vocabulary', desc: 'Advanced vocabulary', icon: Volume2, color: '#ec4899' },
  { id: 'C2', title: 'C2 Vocabulary', desc: 'Mastery and idioms', icon: ChevronRight, color: '#ef4444' },
];

const VocabularyScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { version: localVersion, words: localWords } = useSelector((state: RootState) => state.vocabulary);
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Sync Data on Mount
  useEffect(() => {
    syncVocabulary();
  }, []);

  const syncVocabulary = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      // 1. Check Version
      const metadataRef = doc(db, 'metadata', 'config');
      const metadataSnap = await getDoc(metadataRef);
      
      let remoteVersion = 0;
      if (metadataSnap.exists()) {
        remoteVersion = metadataSnap.data().vocabulary_version || 0;
      }

      // 2. If Remote is newer, download all vocab
      if (remoteVersion > localVersion) {
        console.log(`Updating Vocab: Local v${localVersion} -> Remote v${remoteVersion}`);
        const vocabRef = collection(db, 'vocabulary');
        const vocabSnap = await getDocs(vocabRef);
        
        const newWords: Record<string, VocabularyWord[]> = {};
        
        vocabSnap.forEach((docSnap) => {
          const data = docSnap.data() as VocabularyWord;
          const wordObj = { ...data, id: docSnap.id };
          
          if (!newWords[wordObj.level]) {
            newWords[wordObj.level] = [];
          }
          newWords[wordObj.level].push(wordObj);
        });

        dispatch(setVocabularyData({ version: remoteVersion, words: newWords }));
      }
    } catch (error) {
      console.log('Sync error (might be offline or config missing):', error);
      // We don't alert here so offline users aren't bothered. Local data is still available!
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCategoryClick = (levelId: string, levelTitle: string) => {
    const levelWords = localWords[levelId];
    if (!levelWords || levelWords.length === 0) {
      Alert.alert(
        "No Words Found",
        `There are currently no words downloaded for ${levelTitle}. Check your internet connection or update the database.`,
        [{ text: "OK" }]
      );
      return;
    }
    setSelectedLevel(levelId);
  };

  const speakWord = (word: string) => {
    Speech.speak(word, {
      language: 'de-DE',
      rate: 0.9, // Slightly slower for learning
      pitch: 1.0,
    });
  };

  // --- Render Functions ---

  const renderVocabularyList = () => {
    if (!selectedLevel) return null;
    const category = VOCAB_CATEGORIES.find(c => c.id === selectedLevel);
    const wordsList = localWords[selectedLevel] || [];

    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.listHeader}>
          <TouchableOpacity onPress={() => setSelectedLevel(null)} style={styles.backButton}>
            <ArrowLeft size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
          <Text style={styles.listTitle}>{category?.title}</Text>
          <View style={{ width: 24 }} />
        </View>

        <Text style={styles.wordCountText}>{wordsList.length} words available offline</Text>

        {wordsList.map((word) => (
          <GlassCard key={word.id} style={styles.wordCard}>
            <View style={styles.wordRow}>
              <View style={styles.wordInfo}>
                <Text style={styles.germanWord}>
                  {word.article ? <Text style={styles.article}>{word.article} </Text> : null}
                  {word.germanWord}
                </Text>
                <Text style={styles.translation}>{word.translation}</Text>
                {word.exampleSentence && (
                  <Text style={styles.exampleSentence}>"{word.exampleSentence}"</Text>
                )}
              </View>
              <TouchableOpacity 
                style={styles.speakButton}
                onPress={() => speakWord(word.germanWord)}
              >
                <Volume2 size={24} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    );
  };

  const renderCategories = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Vocabulary</Text>
          <Text style={styles.headerSubtitle}>
            Offline Cached • v{localVersion}
          </Text>
        </View>
        <TouchableOpacity onPress={syncVocabulary} style={styles.syncButton} disabled={isSyncing}>
          {isSyncing ? (
            <ActivityIndicator size="small" color={theme.colors.primary} />
          ) : (
            <RefreshCw size={22} color={theme.colors.primary} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>

      {/* Categories List */}
      {VOCAB_CATEGORIES.map((cat) => {
        const IconComponent = cat.icon;
        const wordCount = localWords[cat.id]?.length || 0;
        
        return (
          <TouchableOpacity 
            key={cat.id} 
            style={styles.categoryCard} 
            activeOpacity={0.7}
            onPress={() => handleCategoryClick(cat.id, cat.title)}
          >
            <View style={[styles.iconContainer, { backgroundColor: cat.color + '20' }]}>
              <IconComponent size={24} color={cat.color} />
            </View>
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryTitle}>{cat.title}</Text>
              <Text style={styles.categoryDesc}>{cat.desc}</Text>
            </View>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{wordCount}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.text.secondary} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  return (
    <AnimatedBackground gradientColor="#2563eb">
      <SafeAreaView style={styles.container}>
        {selectedLevel ? renderVocabularyList() : renderCategories()}
      </SafeAreaView>
    </AnimatedBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  scrollContent: { padding: responsiveSpacing.lg, paddingBottom: scale(80) },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: responsiveSpacing.lg },
  headerTitle: { color: theme.colors.text.primary, fontSize: responsiveFontSize(26), fontWeight: '800' },
  headerSubtitle: { color: theme.colors.text.secondary, fontSize: responsiveFontSize(14), marginTop: scale(2) },
  syncButton: { padding: scale(8), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12 },
  sectionTitle: { color: theme.colors.text.primary, fontSize: responsiveFontSize(18), fontWeight: '800', marginBottom: responsiveSpacing.md },
  categoryCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.glass, borderRadius: responsiveBorderRadius(theme.borderRadius.lg), borderWidth: 1, borderColor: theme.colors.glassBorder, padding: responsiveSpacing.md, marginBottom: responsiveSpacing.md },
  iconContainer: { width: scale(48), height: scale(48), borderRadius: responsiveBorderRadius(12), justifyContent: 'center', alignItems: 'center', marginRight: responsiveSpacing.md },
  categoryTextContainer: { flex: 1 },
  categoryTitle: { color: theme.colors.text.primary, fontSize: responsiveFontSize(15), fontWeight: '700' },
  categoryDesc: { color: theme.colors.text.secondary, fontSize: responsiveFontSize(12), marginTop: scale(3) },
  countBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: scale(8), paddingVertical: scale(4), borderRadius: scale(10), marginRight: scale(10) },
  countText: { color: theme.colors.text.secondary, fontSize: responsiveFontSize(12), fontWeight: 'bold' },
  
  // List Styles
  listHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: responsiveSpacing.md },
  backButton: { padding: scale(8), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: scale(12) },
  listTitle: { color: theme.colors.text.primary, fontSize: responsiveFontSize(20), fontWeight: '800' },
  wordCountText: { color: theme.colors.text.secondary, fontSize: responsiveFontSize(14), marginBottom: responsiveSpacing.lg, textAlign: 'center' },
  wordCard: { marginBottom: responsiveSpacing.md, padding: responsiveSpacing.lg },
  wordRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  wordInfo: { flex: 1, paddingRight: scale(16) },
  germanWord: { color: theme.colors.text.primary, fontSize: responsiveFontSize(18), fontWeight: 'bold' },
  article: { color: theme.colors.primary, fontWeight: '800' },
  translation: { color: theme.colors.text.secondary, fontSize: responsiveFontSize(14), marginTop: scale(4) },
  exampleSentence: { color: theme.colors.text.muted, fontSize: responsiveFontSize(12), fontStyle: 'italic', marginTop: scale(8) },
  speakButton: { width: scale(44), height: scale(44), borderRadius: scale(22), backgroundColor: 'rgba(20, 184, 166, 0.1)', justifyContent: 'center', alignItems: 'center' },
});

export default VocabularyScreen;
