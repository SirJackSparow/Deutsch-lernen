export const theme = {
  colors: {
    background: '#0a0a0a',
    card: '#1a1a1a',
    primary: '#2563eb', // Blue 600
    primaryLight: '#3b82f6', // Blue 500
    secondary: '#4b5563', // Gray 600
    danger: '#dc2626', // Red 600
    success: '#16a34a', // Green 600
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa', // Zinc 400
      muted: '#71717a', // Zinc 500
    },
    border: '#27272a', // Zinc 800
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 6,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};

export type Theme = typeof theme;
