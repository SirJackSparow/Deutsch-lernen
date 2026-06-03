import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { theme } from '../constants/theme';
import { scale, getFlexibleHeight } from '../utils/responsive';

interface LottieAnimationProps {
  type?: 'success' | 'celebrate' | 'loading' | 'trophy';
  size?: number;
  autoPlay?: boolean;
  loop?: boolean;
  onAnimationFinish?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  type = 'success',
  size = 200,
  autoPlay = true,
  loop = false,
  onAnimationFinish,
}) => {
  const animationRef = useRef<LottieView>(null);
  const scaleAnim = useRef(new Animated.Value(0)).current;

  // Get appropriate animation source based on type
  const getAnimationSource = () => {
    // Fallback to simple JSON animations since we don't have external files
    // These are simple Lottie-compatible JSON structures
    return null; // Will use a fallback animated component
  };

  useEffect(() => {
    if (autoPlay) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, []);

  // Fallback animated component while Lottie file isn't available
  const FallbackAnimation = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const bounceAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (autoPlay) {
        // Rotation animation
        Animated.loop(
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          })
        ).start();

        // Bounce animation
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }, []);

    const rotation = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const translateY = bounceAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20],
    });

    if (type === 'success') {
      return (
        <Animated.View
          style={[
            styles.checkmark,
            {
              transform: [{ scale: scaleAnim }, { translateY }],
            },
          ]}
        >
          <View style={styles.checkmarkInner}>
            <View style={styles.checkLine1} />
            <View style={styles.checkLine2} />
          </View>
        </Animated.View>
      );
    }

    if (type === 'trophy') {
      return (
        <Animated.View
          style={[
            styles.trophy,
            {
              transform: [{ scale: scaleAnim }, { rotate: rotation }],
            },
          ]}
        >
          <View style={styles.trophyBase} />
          <View style={styles.trophyCup} />
          <View style={styles.trophyHandle} />
        </Animated.View>
      );
    }

    // Default celebrate animation
    return (
      <Animated.View
        style={[
          styles.celebrate,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.confetti1} />
        <View style={styles.confetti2} />
        <View style={styles.confetti3} />
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, { width: scale(size), height: scale(size) }]}>
      <FallbackAnimation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Checkmark styles
  checkmark: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkInner: {
    width: scale(80),
    height: scale(80),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkLine1: {
    position: 'absolute',
    width: scale(25),
    height: scale(4),
    backgroundColor: theme.colors.success,
    borderRadius: 2,
    transform: [{ rotate: '-45deg' }, { translateX: scale(-5) }, { translateY: scale(10) }],
  },
  checkLine2: {
    position: 'absolute',
    width: scale(50),
    height: scale(4),
    backgroundColor: theme.colors.success,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }, { translateX: scale(15) }, { translateY: scale(-5) }],
  },
  // Trophy styles
  trophy: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trophyBase: {
    width: scale(60),
    height: scale(15),
    backgroundColor: '#f59e0b',
    borderRadius: scale(8),
  },
  trophyCup: {
    width: scale(70),
    height: scale(60),
    backgroundColor: '#fbbf24',
    borderRadius: scale(35),
    marginBottom: scale(-10),
  },
  trophyHandle: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    borderWidth: scale(3),
    borderColor: '#fbbf24',
    borderRadius: scale(20),
    right: scale(-15),
    top: scale(10),
  },
  // Celebrate animation styles
  celebrate: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confetti1: {
    position: 'absolute',
    width: scale(8),
    height: scale(8),
    backgroundColor: '#2563eb',
    borderRadius: 4,
    top: scale(10),
    left: scale(30),
  },
  confetti2: {
    position: 'absolute',
    width: scale(8),
    height: scale(8),
    backgroundColor: '#14b8a6',
    borderRadius: 4,
    top: scale(20),
    right: scale(20),
  },
  confetti3: {
    position: 'absolute',
    width: scale(8),
    height: scale(8),
    backgroundColor: '#f59e0b',
    borderRadius: 4,
    bottom: scale(15),
    left: scale(40),
  },
});

export default LottieAnimation;
