import React, { useMemo, useState } from 'react';
import { View, Image, Linking, ScrollView } from 'react-native';
import { Building2, MapPin, Award, Wallet, Briefcase, ExternalLink, ChevronLeft, Brain, Search } from 'lucide-react-native';
import { Screen, Glass, H, T, Btn, Chip, Input, Row, C } from '../ui';
import { useT, pick } from '../ctx';
import { UNIS, DIRS, CITIES } from '../data/universities';
import { CAREER_Q } from '../data/careerTest';

function Logo({ u, size = 48 }) {
  const [err, setErr] = useState(false);
  if (!u.logo || err) {
    return (
      <View style={{ width: size, height: size, borderRadius: 14, backgroundColor: 'rgba(61,90,254,0.15)', alignItems: 'center', justifyContent: 'center' }}>
        <Building2 size={size * 0.5} color={C.accent} />
      </View>
    );
  }
  return <Image source={{ uri: u.logo }} onError={() => setErr(true)} style={{ width: size, height: size, borderRadius: 14, backgroundColor: '#fff' }} />;
}

function Detail({ u, onBack }) {
  const { t, lang } = useT();
  return (
    <Screen>
      <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onBack} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />
      <Glass>
        <Row>
          <Logo u={u} size={64} />
          <View style={{ flex: 1 }}>
            <H style={{ fontSize: 18, marginBottom: 4 }}>{u.name}</H>
            <Row>
              <MapPin size={14} color={C.sub} />
              <T style={{ color: C.sub }}>{u.city}</T>
            </Row>
          </View>
        </Row>
      </Glass>
      <Glass>
        <Row style={{ marginBottom: 6 }}>
          <Award size={18} color={C.accent} />
          <T style={{ fontWeight: '700' }}>{t('grant')}: {u.grant ? u.grant + ' / 189' : '-'}</T>
        </Row>
        <Row style={{ marginBottom: 6 }}>
          <Award size={18} color={C.accent} />
          <T style={{ fontWeight: '700' }}>{t('contract')}: {u.contract + ' / 189'}</T>
        </Row>
        <Row>
          <Wallet size={18} color={C.accent} />
          <T style={{ fontWeight: '700' }}>{t('tuition')}: ~{u.tuition} ({t('perYear')})</T>
        </Row>
      </Glass>
      <Glass>
        <T style={{ fontWeight: '800', marginBottom: 6 }}>{t('directions')}</T>
        {u.dirs.map((d) => (
          <T key={d} style={{ marginBottom: 3 }}>- {pick(DIRS[d], lang)}</T>
        ))}
      </Glass>
      <Glass>
        <Row style={{ marginBottom: 6 }}>
          <Briefcase size={18} color={C.accent} />
          <T style={{ fontWeight: '800' }}>{t('careers')}</T>
        </Row>
        {u.dirs.map((d) => (
          <T key={d} style={{ marginBottom: 4 }}>- {pick(DIRS[d].careers, lang)}</T>
        ))}
      </Glass>
      <T style={{ color: C.sub, fontSize: 12, marginBottom: 10 }}>{t('approx')}</T>
      {u.site && <Btn label={t('website') + ': ' + u.domain} icon={<ExternalLink size={16} color="#fff" />} onPress={() => Linking.openURL(u.site)} />}
    </Screen>
  );
}

function CareerTest({ onBack }) {
  const { t, lang } = useT();
  const [i, setI] = useState(0);
  const [score, setScore] = useState({});
  const done = i >= CAREER_Q.length;
  const answer = (yes) => {
    if (yes) setScore((s) => ({ ...s, [CAREER_Q[i].d]: (s[CAREER_Q[i].d] || 0) + 1 }));
    setI(i + 1);
  };
  const top = Object.entries(score).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return (
    <Screen>
      <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onBack} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />
      <H>{t('careerTest')}</H>
      {!done ? (
        <Glass>
          <T style={{ color: C.sub, marginBottom: 8 }}>{i + 1} / {CAREER_Q.length}</T>
          <T style={{ fontSize: 18, fontWeight: '700', marginBottom: 16 }}>{CAREER_Q[i][lang] || CAREER_Q[i].uz}</T>
          <Row>
            <Btn label={t('yes')} onPress={() => answer(true)} style={{ flex: 1 }} />
            <Btn kind="glass" label={t('no')} onPress={() => answer(false)} style={{ flex: 1 }} />
          </Row>
        </Glass>
      ) : (
        <>
          <T style={{ fontWeight: '800', marginBottom: 8 }}>{t('recommended')}</T>
          {top.length === 0 && <T>-</T>}
          {top.map(([d, n]) => (
            <Glass key={d}>
              <T style={{ fontWeight: '800' }}>{pick(DIRS[d], lang)}</T>
              <T style={{ color: C.sub, marginTop: 4 }}>{pick(DIRS[d].careers, lang)}</T>
              <T style={{ color: C.accent, marginTop: 4 }}>{n} / {CAREER_Q.filter((q) => q.d === d).length}</T>
            </Glass>
          ))}
          <Btn label={t('restart')} onPress={() => { setI(0); setScore({}); }} />
        </>
      )}
    </Screen>
  );
}

export default function Catalog() {
  const { t, lang } = useT();
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [city, setCity] = useState('all');
  const [sel, setSel] = useState(null);
  const [test, setTest] = useState(false);

  const list = useMemo(
    () => UNIS.filter((u) => (type === 'all' || u.type === type) && (city === 'all' || u.city === city) && u.name.toLowerCase().includes(q.toLowerCase())),
    [q, type, city]
  );

  if (test) return <CareerTest onBack={() => setTest(false)} />;
  if (sel) return <Detail u={sel} onBack={() => setSel(null)} />;

  return (
    <Screen>
      <H>{t('universities')}</H>
      <Btn label={t('careerTest')} icon={<Brain size={18} color="#fff" />} onPress={() => setTest(true)} style={{ marginBottom: 12 }} />
      <Input placeholder={t('search')} value={q} onChangeText={setQ} style={{ marginBottom: 10 }} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Chip label={t('all')} active={type === 'all'} onPress={() => setType('all')} />
        <Chip label={t('university')} active={type === 'university'} onPress={() => setType('university')} />
        <Chip label={t('college')} active={type === 'college'} onPress={() => setType('college')} />
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Chip label={t('all')} active={city === 'all'} onPress={() => setCity('all')} />
        {CITIES.map((c) => (
          <Chip key={c} label={c} active={city === c} onPress={() => setCity(c)} />
        ))}
      </ScrollView>
      <View style={{ height: 6 }} />
      {list.map((u) => (
        <Glass key={u.id} onPress={() => setSel(u)}>
          <Row>
            <Logo u={u} />
            <View style={{ flex: 1 }}>
              <T style={{ fontWeight: '800' }}>{u.name}</T>
              <T style={{ color: C.sub, fontSize: 12 }}>{u.city} | {t('grant')}: {u.grant || '-'} | {t('contract')}: {u.contract}</T>
            </View>
          </Row>
        </Glass>
      ))}
    </Screen>
  );
}
