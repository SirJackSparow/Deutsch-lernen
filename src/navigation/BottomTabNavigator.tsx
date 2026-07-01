import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VocabularyScreen from '../screens/VocabularyScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Grammar') {
            iconName = 'school'; // school icon for grammar (Dashboard)
          } else if (route.name === 'Vocabulary') {
            iconName = 'menu-book'; // book icon for vocab
          }
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#14b8a6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1e1e1e', // Dark mode to match dashboard
          borderTopWidth: 1,
          borderTopColor: '#333',
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Grammar" component={DashboardScreen} />
      <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
