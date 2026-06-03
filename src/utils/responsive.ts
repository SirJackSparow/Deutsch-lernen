import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Screen size categories
export const isSmallScreen = width < 380;
export const isMediumScreen = width >= 380 && width < 768;
export const isLargeScreen = width >= 768;
export const isTablet = width > 600;
export const isLandscape = width > height;

// Base width for scaling calculations
const baseWidth = 375;

/**
 * Responsive scaling function
 * Scales values proportionally based on device width
 * @param size - the base size (design reference)
 * @returns scaled size for current device
 */
export const scale = (size: number): number => {
  return Math.round((width / baseWidth) * size);
};

/**
 * Vertical scaling function
 * Scales values proportionally based on device height
 */
export const verticalScale = (size: number): number => {
  const baseHeight = 812;
  return Math.round((height / baseHeight) * size);
};

/**
 * Modular scale function
 * Scales with a ratio (e.g., 0.5 = 50% scaling)
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

/**
 * Responsive font size
 * Scales font sizes smoothly across devices
 */
export const responsiveFontSize = (size: number): number => {
  return moderateScale(size, 0.5);
};

/**
 * Responsive padding
 * Returns padding values scaled to device
 */
export const responsivePadding = (paddingValue: number): number => {
  if (isSmallScreen) return paddingValue * 0.8;
  if (isLargeScreen || isTablet) return paddingValue * 1.2;
  return paddingValue;
};

/**
 * Responsive margin
 */
export const responsiveMargin = (marginValue: number): number => {
  if (isSmallScreen) return marginValue * 0.8;
  if (isLargeScreen || isTablet) return marginValue * 1.2;
  return marginValue;
};

/**
 * Responsive border radius
 */
export const responsiveBorderRadius = (radius: number): number => {
  if (isSmallScreen) return radius * 0.9;
  if (isLargeScreen || isTablet) return radius * 1.1;
  return radius;
};

/**
 * Flexible width based on device type
 */
export const getFlexibleWidth = (percentage: number): number => {
  return (width * percentage) / 100;
};

/**
 * Flexible height based on device type
 */
export const getFlexibleHeight = (percentage: number): number => {
  return (height * percentage) / 100;
};

/**
 * Responsive spacing object (like theme.spacing but responsive)
 */
export const responsiveSpacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
};

/**
 * Responsive font sizes
 */
export const responsiveFontSizes = {
  xs: responsiveFontSize(10),
  sm: responsiveFontSize(12),
  md: responsiveFontSize(14),
  lg: responsiveFontSize(16),
  xl: responsiveFontSize(18),
  xxl: responsiveFontSize(24),
  xxxl: responsiveFontSize(32),
};

/**
 * Responsive border radii
 */
export const responsiveBorderRadii = {
  sm: responsiveBorderRadius(6),
  md: responsiveBorderRadius(12),
  lg: responsiveBorderRadius(16),
  xl: responsiveBorderRadius(24),
  full: 9999,
};

/**
 * Get component height based on screen size
 * Useful for buttons, cards, etc.
 */
export const getResponsiveComponentHeight = (baseHeight: number): number => {
  if (isSmallScreen) return baseHeight * 0.9;
  if (isLargeScreen || isTablet) return baseHeight * 1.1;
  return baseHeight;
};

/**
 * Get number of columns for grid layouts
 */
export const getGridColumns = (): number => {
  if (isSmallScreen) return 1;
  if (isMediumScreen) return 2;
  if (isTablet) return 3;
  return 4;
};

export default {
  scale,
  verticalScale,
  moderateScale,
  responsiveFontSize,
  responsivePadding,
  responsiveMargin,
  responsiveBorderRadius,
  getFlexibleWidth,
  getFlexibleHeight,
  responsiveSpacing,
  responsiveFontSizes,
  responsiveBorderRadii,
  getResponsiveComponentHeight,
  getGridColumns,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
  isTablet,
  isLandscape,
  screenWidth: width,
  screenHeight: height,
};
