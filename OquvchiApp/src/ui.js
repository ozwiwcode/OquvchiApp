import React from 'react';
import { View, Text, ScrollView, Pressable, TextInput, StyleSheet, Platform, StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

export const C = {
  text: '#14213d',
  sub: '#4a5675',
  accent: '#3d5afe',
  good: '#1b9e5a',
  bad: '#d64545',
  warn: '#e08a00',
};

export function Screen({ children, scroll = true }) {
  const top = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 44;
  return (
    <LinearGradient colors={['#bcd0ff', '#e8e6f5', '#ffd3e6']} style={{ flex: 1 }}>
      <View style={[s.blob, { top: 60, left: -60, backgroundColor: '#7aa2ff' }]} />
      <View style={[s.blob, { bottom: 140, right: -80, backgroundColor: '#ff9ccb' }]} />
      <View style={{ flex: 1, paddingTop: top }}>
        {scroll ? (
          <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 130 }} keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        ) : (
          <View style={{ flex: 1, padding: 16 }}>{children}</View>
        )}
      </View>
    </LinearGradient>
  );
}

export function Glass({ children, style, intensity = 45, onPress, pad = 14 }) {
  const body = (
    <View style={[s.glass, style]}>
      <BlurView intensity={intensity} tint="light" experimentalBlurMethod="dimezisBlurView" style={StyleSheet.absoluteFill} />
      <View style={s.tint} />
      <View style={{ padding: pad }}>{children}</View>
    </View>
  );
  return onPress ? <Pressable onPress={onPress}>{body}</Pressable> : body;
}

export const H = ({ children, style }) => <Text style={[s.h, style]}>{children}</Text>;
export const T = ({ children, style, ...p }) => (
  <Text style={[s.t, style]} {...p}>
    {children}
  </Text>
);

export function Btn({ label, onPress, icon, kind = 'primary', style }) {
  const bg = kind === 'primary' ? C.accent : 'rgba(255,255,255,0.55)';
  const col = kind === 'primary' ? '#fff' : C.text;
  return (
    <Pressable onPress={onPress} style={[s.btn, { backgroundColor: bg }, style]}>
      {icon}
      <Text style={{ color: col, fontWeight: '700', fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}

export function Chip({ label, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[s.chip, active && { backgroundColor: C.accent }]}>
      <Text style={{ color: active ? '#fff' : C.text, fontWeight: '600', fontSize: 13 }}>{label}</Text>
    </Pressable>
  );
}

export const Input = (p) => <TextInput placeholderTextColor="#7b86a3" {...p} style={[s.input, p.style]} />;

export const Row = ({ children, style }) => <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 10 }, style]}>{children}</View>;

const s = StyleSheet.create({
  blob: { position: 'absolute', width: 240, height: 240, borderRadius: 120, opacity: 0.55 },
  glass: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    shadowColor: '#2a3a8c',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  tint: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.38)' },
  h: { fontSize: 24, fontWeight: '800', color: C.text, marginBottom: 12 },
  t: { fontSize: 14, color: C.text, lineHeight: 20 },
  btn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 12, paddingHorizontal: 18, borderRadius: 16 },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.55)', marginRight: 8, marginBottom: 8 },
  input: { backgroundColor: 'rgba(255,255,255,0.65)', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, fontSize: 15, color: C.text, borderWidth: 1, borderColor: 'rgba(255,255,255,0.8)' },
});
