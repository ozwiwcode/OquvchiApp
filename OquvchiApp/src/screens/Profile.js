import React, { useContext } from 'react';
import { Linking, Pressable } from 'react-native';
import { Globe, Send, Code } from 'lucide-react-native';
import { Screen, Glass, H, T, Chip, Row, C } from '../ui';
import { Ctx, useT } from '../ctx';
import { LANGS } from '../i18n';

export default function Profile() {
  const { t } = useT();
  const { lang, setLang } = useContext(Ctx);
  return (
    <Screen>
      <H>{t('profile')}</H>
      <Glass>
        <Row style={{ marginBottom: 10 }}>
          <Globe size={20} color={C.accent} />
          <T style={{ fontWeight: '800' }}>{t('settings')} / {t('language')}</T>
        </Row>
        {LANGS.map((l) => (
          <Chip key={l.code} label={l.label} active={lang === l.code} onPress={() => setLang(l.code)} />
        ))}
      </Glass>
      <Glass>
        <T style={{ fontWeight: '800', marginBottom: 4 }}>OquvchiApp</T>
        <T style={{ color: C.sub }}>{t('about')}: v1.0.0</T>
      </Glass>
      <Glass style={{ marginTop: 30 }}>
        <Row style={{ marginBottom: 8 }}>
          <Code size={18} color={C.accent} />
          <T style={{ fontWeight: '700' }}>{lang === 'ru' ? 'Разработчик' : t('developer')}: ozwiw</T>
        </Row>
        <Row>
          <Send size={18} color={C.accent} />
          <T style={{ flex: 1 }}>
            {lang === 'ru' ? 'Официальный телеграм канал' : t('channel')}: @OquvchiApp /{' '}
            <T style={{ color: C.accent, textDecorationLine: 'underline' }} onPress={() => Linking.openURL('https://t.me/OquvchiApp')}>
              https://t.me/OquvchiApp
            </T>
          </T>
        </Row>
      </Glass>
    </Screen>
  );
}
