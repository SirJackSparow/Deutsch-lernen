import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../constants/theme';
import CustomButton from '../components/CustomButton';
import CustomSwitch from '../components/CustomSwitch';
import GlassCard from '../components/GlassCard';
import { Play, Settings } from 'lucide-react-native';

const UIGalleryScreen: React.FC = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>UI Gallery</Text>
          <Text style={styles.headerSubtitle}>Premium Components</Text>
        </View>

        <GlassCard header="Buttons" style={styles.section}>
          <View style={styles.row}>
            <CustomButton 
              title="Primary" 
              onPress={() => {}} 
              icon={Play} 
              style={styles.flex1}
            />
          </View>
          <View style={styles.row}>
            <CustomButton 
              title="Secondary" 
              type="secondary" 
              onPress={() => {}} 
              style={styles.flex1}
            />
            <View style={{ width: 12 }} />
            <CustomButton 
              title="Danger" 
              type="danger" 
              onPress={() => {}} 
              style={styles.flex1}
            />
          </View>
          <CustomButton 
            title="Glass Action" 
            type="glass" 
            onPress={() => {}} 
            icon={Settings}
            fullWidth
          />
        </GlassCard>

        <GlassCard header="Switches" style={styles.section}>
          <View style={styles.switchRow}>
            <View>
              <Text style={styles.label}>Push Notifications</Text>
              <Text style={styles.subLabel}>Get alerts on your device</Text>
            </View>
            <CustomSwitch 
              value={isNotificationsEnabled} 
              onValueChange={setIsNotificationsEnabled} 
            />
          </View>
          
          <View style={[styles.switchRow, { borderTopWidth: 1, borderTopColor: theme.colors.glassBorder, paddingTop: 16 }]}>
            <View>
              <Text style={styles.label}>Slow Mode</Text>
              <Text style={styles.subLabel}>Reduce animation speeds</Text>
            </View>
            <CustomSwitch 
              value={isSlowMode} 
              onValueChange={setIsSlowMode} 
            />
          </View>
        </GlassCard>

        <GlassCard header="Information" style={styles.section}>
          <Text style={styles.infoText}>
            These components use a custom theme system designed for a premium dark experience. 
            The GlassCard uses semi-transparent backgrounds to create depth.
          </Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingBottom: theme.spacing.md,
  },
  headerTitle: {
    color: theme.colors.text.primary,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    color: theme.colors.text.secondary,
    fontSize: 16,
    marginTop: 4,
  },
  scrollContent: {
    padding: theme.spacing.lg,
    paddingBottom: 40,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  flex1: {
    flex: 1,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    color: theme.colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  subLabel: {
    color: theme.colors.text.muted,
    fontSize: 13,
    marginTop: 2,
  },
  infoText: {
    color: theme.colors.text.secondary,
    lineHeight: 20,
    fontSize: 14,
  },
});

export default UIGalleryScreen;
