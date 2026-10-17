import React, { useEffect, useRef } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

// Replace assets/logo-animation.mp4 with your own logo animation.
export default function Splash({ onDone }) {
  const done = useRef(false);
  const finish = () => {
    if (!done.current) {
      done.current = true;
      onDone();
    }
  };
  useEffect(() => {
    const id = setTimeout(finish, 9000); // safety fallback
    return () => clearTimeout(id);
  }, []);
  return (
    <View style={s.root}>
      <Video
        source={require('../../assets/logo-animation.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping={false}
        onError={finish}
        onPlaybackStatusUpdate={(st) => {
          if (st.didJustFinish) finish();
        }}
      />
      <Pressable onPress={finish} style={s.skip}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>Skip</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0b1020' },
  skip: { position: 'absolute', top: 48, right: 20, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.18)' },
});
