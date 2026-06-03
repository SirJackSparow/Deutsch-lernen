import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants/theme';
import { scale, verticalScale } from '../utils/responsive';

const { width, height } = Dimensions.get('window');

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  gradientColor?: string; // Primary gradient color (defaults to blue)
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  gradientColor = '#2563eb',
}) => {
  // Animated values for floating blobs
  const float1 = useRef(new Animated.Value(0)).current;
  const float2 = useRef(new Animated.Value(0)).current;
  const float3 = useRef(new Animated.Value(0)).current;
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Continuous floating animation for blob 1
    Animated.loop(
      Animated.timing(float1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();

    // Continuous floating animation for blob 2
    Animated.loop(
      Animated.timing(float2, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      })
    ).start();

    // Continuous floating animation for blob 3
    Animated.loop(
      Animated.timing(float3, {
        toValue: 1,
        duration: 12000,
        useNativeDriver: false,
      })
    ).start();

    // Continuous rotation for blob 1
    Animated.loop(
      Animated.timing(rotate1, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: false,
      })
    ).start();

    // Continuous rotation for blob 2
    Animated.loop(
      Animated.timing(rotate2, {
        toValue: 1,
        duration: 18000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  // Interpolations for smooth animations
  const translateY1 = float1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -40],
  });

  const translateY2 = float2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const translateY3 = float3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  const rotation1 = rotate1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotation2 = rotate2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const opacity1 = float1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.6, 0.3],
  });

  const opacity2 = float2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.2, 0.5, 0.2],
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Base gradient backdrop */}
      <View
        style={[
          styles.gradientBase,
          {
            backgroundColor: gradientColor,
            opacity: 0.08,
          },
        ]}
      />

      {/* Floating blob 1 - Primary color */}
      <Animated.View
        style={[
          styles.blob,
          styles.blob1,
          {
            transform: [
              { translateY: translateY1 },
              { rotate: rotation1 },
            ],
            opacity: opacity1,
          },
        ]}
      />

      {/* Floating blob 2 - Accent color */}
      <Animated.View
        style={[
          styles.blob,
          styles.blob2,
          {
            transform: [
              { translateY: translateY2 },
              { rotate: rotation2 },
            ],
            opacity: opacity2,
          },
        ]}
      />

      {/* Floating blob 3 - Subtle accent */}
      <Animated.View
        style={[
          styles.blob,
          styles.blob3,
          {
            transform: [{ translateY: translateY3 }],
          },
        ]}
      />

      {/* Radial gradient overlay (top) */}
      <View style={styles.radialTopLeft} />
      <View style={styles.radialBottomRight} />

      {/* Content container */}
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientBase: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  blob: {
    position: 'absolute',
    borderRadius: 9999,
    filter: 'blur(60px)',
  },
  blob1: {
    width: scale(300),
    height: scale(300),
    backgroundColor: '#2563eb',
    top: scale(-150),
    right: scale(-100),
    opacity: 0.15,
  },
  blob2: {
    width: scale(250),
    height: scale(250),
    backgroundColor: '#14b8a6',
    bottom: scale(-80),
    left: scale(-50),
    opacity: 0.1,
  },
  blob3: {
    width: scale(200),
    height: scale(200),
    backgroundColor: '#f59e0b',
    top: '50%',
    right: '10%',
    opacity: 0.05,
  },
  radialTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.6,
    height: height * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
    zIndex: 1,
  },
  radialBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.5,
    height: height * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: 'rgba(20, 184, 166, 0.03)',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 2,
  },
});

export default AnimatedBackground;
