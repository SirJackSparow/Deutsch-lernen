import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDeviceLanguage, LanguageCode } from '../../utils/localization';

export interface GermanState {
  language: LanguageCode;
  onboardingCompleted: boolean;
  completedLessons: Record<string, boolean>; // key: lessonId, value: true/false
  quizScores: Record<string, number>;        // key: lessonId, value: score percentage
}

const initialState: GermanState = {
  language: getDeviceLanguage(),
  onboardingCompleted: false,
  completedLessons: {},
  quizScores: {},
};

export const germanSlice = createSlice({
  name: 'german',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.language = action.payload;
    },
    completeOnboarding: (state) => {
      state.onboardingCompleted = true;
    },
    completeLesson: (state, action: PayloadAction<string>) => {
      state.completedLessons[action.payload] = true;
    },
    submitQuizScore: (
      state,
      action: PayloadAction<{ lessonId: string; score: number }>
    ) => {
      const { lessonId, score } = action.payload;
      // Store the highest score obtained
      const currentHighest = state.quizScores[lessonId] || 0;
      if (score > currentHighest) {
        state.quizScores[lessonId] = score;
      }
      // Also automatically mark the lesson as completed when they take the quiz
      state.completedLessons[lessonId] = true;
    },
    resetProgress: (state) => {
      state.completedLessons = {};
      state.quizScores = {};
    },
    resetOnboarding: (state) => {
      state.onboardingCompleted = false;
    },
  },
});

export const {
  setLanguage,
  completeOnboarding,
  completeLesson,
  submitQuizScore,
  resetProgress,
  resetOnboarding,
} = germanSlice.actions;

export default germanSlice.reducer;
