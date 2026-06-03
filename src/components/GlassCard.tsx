import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import { theme } from '../constants/theme';
import { scale, responsiveFontSize, responsiveBorderRadius, responsiveSpacing } from '../utils/responsive';

interface GlassCardProps {
  children: React.ReactNode;
  header?: string;
  style?: StyleProp<ViewStyle>;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, header, style }) => {
  return (
    <View style={[styles.card, style]}>
      {header && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      )}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.glass,
    borderRadius: responsiveBorderRadius(theme.borderRadius.lg),
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    overflow: 'hidden',
    ...theme.shadows.medium,
    marginVertical: responsiveSpacing.sm,
  },
  header: {
    paddingHorizontal: responsiveSpacing.md,
    paddingVertical: responsiveSpacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.glassBorder,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  headerText: {
    color: theme.colors.text.secondary,
    fontSize: responsiveFontSize(14),
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  content: {
    padding: responsiveSpacing.md,
  },
});

export default GlassCard;
