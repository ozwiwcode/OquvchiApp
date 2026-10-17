import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tr } from './i18n';

export const Ctx = createContext({ lang: 'ru', setLang: () => {} });

export const useT = () => {
  const { lang } = useContext(Ctx);
  return { lang, t: (k) => tr(lang, k) };
};

// pick localized value from { uz, ru, qq? }
export const pick = (o, lang) => (o ? o[lang] || o.uz || o.ru || '' : '');

export function useStored(key, initial) {
  const [val, setVal] = useState(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((v) => {
        if (v) setVal(JSON.parse(v));
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, [key]);
  const set = (next) => {
    setVal(next);
    AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => {});
  };
  return [val, set, ready];
}
