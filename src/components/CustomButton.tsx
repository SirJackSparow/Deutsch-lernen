import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, View } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { theme } from '../constants/theme';
import { responsiveFontSize, responsiveBorderRadius, responsiveSpacing, scale } from '../utils/responsive';

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'danger' | 'glass';
  icon?: LucideIcon;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconSize?: number;
  iconColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  icon: Icon,
  style,
  textStyle,
  iconSize = 20,
  iconColor,
  fullWidth = false,
  disabled = false,
}) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'secondary':
        return styles.secondaryButton;
      case 'danger':
        return styles.dangerButton;
      case 'glass':
        return styles.glassButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextColor = () => {
    if (type === 'glass') return theme.colors.text.primary;
    return '#ffffff';
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        getButtonStyle(), 
        fullWidth && styles.fullWidth,
        disabled && { opacity: 0.5 },
        style
      ]} 
      onPress={disabled ? () => {} : onPress}
      activeOpacity={disabled ? 1 : 0.8}
      disabled={disabled}
    >
      <View style={styles.content}>
        {Icon && (
          <Icon 
            size={iconSize} 
            color={iconColor || getTextColor()} 
            style={title ? styles.iconMargin : undefined}
          />
        )}
        {title && (
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: responsiveBorderRadius(theme.borderRadius.md),
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(14),
    paddingHorizontal: scale(24),
    minHeight: scale(52),
  },
  fullWidth: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  dangerButton: {
    backgroundColor: theme.colors.danger,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  glassButton: {
    backgroundColor: theme.colors.glass,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  text: {
    fontSize: responsiveFontSize(16),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  iconMargin: {
    marginRight: scale(10),
  },
});

export default CustomButton;
