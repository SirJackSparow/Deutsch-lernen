import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VocabularyWord {
  id: string;
  germanWord: string;
  translation: string;
  article: string | null;
  level: string;
  exampleSentence?: string;
}

interface VocabularyState {
  version: number;
  words: Record<string, VocabularyWord[]>; // Map of levelId -> words array
  lastSynced: number | null;
}

const initialState: VocabularyState = {
  version: 0, // Starts at 0, updates when Firestore version is higher
  words: {},
  lastSynced: null,
};

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    setVocabularyData: (
      state,
      action: PayloadAction<{ version: number; words: Record<string, VocabularyWord[]> }>
    ) => {
      state.version = action.payload.version;
      state.words = action.payload.words;
      state.lastSynced = Date.now();
    },
    clearVocabularyCache: (state) => {
      state.version = 0;
      state.words = {};
      state.lastSynced = null;
    }
  },
});

export const { setVocabularyData, clearVocabularyCache } = vocabularySlice.actions;
export default vocabularySlice.reducer;
