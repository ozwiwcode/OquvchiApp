import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GraduationCap, BookOpen, CalendarDays, ClipboardCheck, User } from 'lucide-react-native';
import { Ctx } from './src/ctx';
import { tr } from './src/i18n';
import { C } from './src/ui';
import Splash from './src/screens/Splash';
import Catalog from './src/screens/Catalog';
import Study from './src/screens/Study';
import Organizer from './src/screens/Organizer';
import Tests from './src/screens/Tests';
import Profile from './src/screens/Profile';

const TABS = [
  { k: 'universities', Icon: GraduationCap, Comp: Catalog },
  { k: 'study', Icon: BookOpen, Comp: Study },
  { k: 'organizer', Icon: CalendarDays, Comp: Organizer },
  { k: 'tests', Icon: ClipboardCheck, Comp: Tests },
  { k: 'profile', Icon: User, Comp: Profile },
];

export default function App() {
  const [splash, setSplash] = useState(true);
  const [lang, setLangState] = useState('ru');
  const [tab, setTab] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('lang').then((v) => v && setLangState(v)).catch(() => {});
  }, []);
  const setLang = (l) => {
    setLangState(l);
    AsyncStorage.setItem('lang', l).catch(() => {});
  };

  if (splash) return <Splash onDone={() => setSplash(false)} />;

  const Cur = TABS[tab].Comp;
  return (
    <Ctx.Provider value={{ lang, setLang }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1 }}>
        <Cur key={lang + tab} />
        <View style={s.barWrap}>
          <BlurView intensity={60} tint="light" experimentalBlurMethod="dimezisBlurView" style={StyleSheet.absoluteFill} />
          <View style={s.barTint} />
          <View style={s.bar}>
            {TABS.map(({ k, Icon }, i) => (
              <Pressable key={k} onPress={() => setTab(i)} style={s.item}>
                <Icon size={22} color={i === tab ? C.accent : C.sub} />
                <Text numberOfLines={1} style={{ fontSize: 10, marginTop: 2, color: i === tab ? C.accent : C.sub, fontWeight: '700' }}>
                  {tr(lang, k)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </Ctx.Provider>
  );
}

const s = StyleSheet.create({
  barWrap: { position: 'absolute', left: 14, right: 14, bottom: 16, borderRadius: 28, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.8)', elevation: 8 },
  barTint: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.45)' },
  bar: { flexDirection: 'row', paddingVertical: 8 },
  item: { flex: 1, alignItems: 'center', paddingVertical: 4 },
});
