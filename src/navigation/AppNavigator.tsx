import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { theme } from '../constants/theme';
import { RootState } from '../store/store';
import OnboardingScreen from '../screens/OnboardingScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LessonScreen from '../screens/LessonScreen';
import QuizScreen from '../screens/QuizScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  Dashboard: undefined;
  Lesson: { levelId: string; lessonId: string };
  Quiz: { levelId: string; lessonId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const onboardingCompleted = useSelector(
    (state: RootState) => state.german.onboardingCompleted
  );

  return (
    <Stack.Navigator
      initialRouteName={onboardingCompleted ? 'Dashboard' : 'Onboarding'}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      {!onboardingCompleted && (
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ gestureEnabled: false }}
        />
      )}
      <Stack.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
