import React, { useMemo, useState } from 'react';
import { View, Vibration, ScrollView } from 'react-native';
import { BookOpen, Calculator as CalcIcon, Radio, Languages, ChevronLeft, Play } from 'lucide-react-native';
import { Screen, Glass, H, T, Btn, Chip, Input, Row, C } from '../ui';
import { useT, pick } from '../ctx';
import { SUBJECTS, FORMULAS, TERMS } from '../data/reference';
import { MORSE, REV, LESSONS } from '../data/learn';

const Back = ({ onBack }) => {
  const { t } = useT();
  return <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onBack} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />;
};

function Reference({ onBack }) {
  const { t, lang } = useT();
  const [sub, setSub] = useState('math');
  const [q, setQ] = useState('');
  const isFormula = !!FORMULAS[sub];
  const items = isFormula ? FORMULAS[sub] : TERMS[sub];
  const shown = items.filter((x) => {
    const name = isFormula ? pick(x.n, lang) : pick(x.t, lang);
    return name.toLowerCase().includes(q.toLowerCase());
  });
  return (
    <Screen>
      <Back onBack={onBack} />
      <H>{t('reference')}</H>
      <T style={{ color: C.sub, marginBottom: 8 }}>{t('offline')}</T>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {SUBJECTS.map((s) => (
          <Chip key={s.id} label={pick(s, lang)} active={sub === s.id} onPress={() => setSub(s.id)} />
        ))}
      </ScrollView>
      <Input placeholder={t('search')} value={q} onChangeText={setQ} style={{ marginVertical: 8 }} />
      {shown.map((x, i) => (
        <Glass key={i}>
          {isFormula ? (
            <>
              <T style={{ color: C.sub, marginBottom: 4 }}>{pick(x.n, lang)}</T>
              <T style={{ fontSize: 17, fontWeight: '700' }} selectable>{x.f}</T>
            </>
          ) : (
            <>
              <T style={{ fontWeight: '800', marginBottom: 4 }}>{pick(x.t, lang)}</T>
              <T>{pick(x.d, lang)}</T>
            </>
          )}
        </Glass>
      ))}
    </Screen>
  );
}

function evaluate(expr) {
  const clean = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/,/g, '.');
  if (!/^[0-9+\-*/().%\s]+$/.test(clean)) return 'Error';
  try {
    // eslint-disable-next-line no-new-func
    const r = Function('"use strict"; return (' + clean + ')')();
    return Number.isFinite(r) ? String(Math.round(r * 1e10) / 1e10) : 'Error';
  } catch (e) {
    return 'Error';
  }
}

function Calc({ onBack }) {
  const { t } = useT();
  const [expr, setExpr] = useState('');
  const [res, setRes] = useState('');
  const keys = ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '(', '+', ')', '^', '%', '='];
  const press = (k) => {
    if (k === '=') setRes(evaluate(expr));
    else setExpr(expr + k);
  };
  return (
    <Screen>
      <Back onBack={onBack} />
      <H>{t('calculator')}</H>
      <Glass>
        <T style={{ fontSize: 22, minHeight: 30 }}>{expr || '0'}</T>
        <T style={{ fontSize: 30, fontWeight: '800', color: C.accent }}>{res}</T>
      </Glass>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {keys.map((k) => (
          <Btn key={k} label={k} kind={k === '=' ? 'primary' : 'glass'} onPress={() => press(k)} style={{ width: '22.5%' }} />
        ))}
      </View>
      <Row style={{ marginTop: 10 }}>
        <Btn kind="glass" label="DEL" onPress={() => setExpr(expr.slice(0, -1))} style={{ flex: 1 }} />
        <Btn kind="glass" label={t('clear')} onPress={() => { setExpr(''); setRes(''); }} style={{ flex: 1 }} />
      </Row>
    </Screen>
  );
}

function Morse({ onBack }) {
  const { t } = useT();
  const [mode, setMode] = useState('trainer');
  const letters = Object.keys(MORSE);
  const [cur, setCur] = useState(letters[Math.floor(Math.random() * 26)]);
  const [input, setInput] = useState('');
  const [fb, setFb] = useState(null);
  const [text, setText] = useState('');
  const [code, setCode] = useState('');

  const next = () => { setCur(letters[Math.floor(Math.random() * 26)]); setInput(''); setFb(null); };
  const check = () => setFb(input === MORSE[cur]);
  const toMorse = (s) => s.toUpperCase().split('').map((c) => (c === ' ' ? '/' : MORSE[c] || '')).filter(Boolean).join(' ');
  const fromMorse = (s) => s.trim().split(/\s+/).map((c) => (c === '/' ? ' ' : REV[c] || '?')).join('');
  const play = (m) => {
    const p = [0];
    m.split('').forEach((c) => {
      if (c === '.') p.push(120, 120);
      else if (c === '-') p.push(360, 120);
      else p.push(0, 360);
    });
    Vibration.vibrate(p);
  };

  return (
    <Screen>
      <Back onBack={onBack} />
      <H>{t('morse')}</H>
      <Row style={{ marginBottom: 10 }}>
        <Chip label={t('trainer')} active={mode === 'trainer'} onPress={() => setMode('trainer')} />
        <Chip label={t('decoder')} active={mode === 'decoder'} onPress={() => setMode('decoder')} />
      </Row>
      {mode === 'trainer' ? (
        <Glass>
          <T style={{ fontSize: 56, fontWeight: '800', textAlign: 'center' }}>{cur}</T>
          <T style={{ fontSize: 28, textAlign: 'center', minHeight: 40, color: C.accent }}>{input}</T>
          <Row style={{ marginVertical: 8 }}>
            <Btn kind="glass" label="." onPress={() => setInput(input + '.')} style={{ flex: 1 }} />
            <Btn kind="glass" label="-" onPress={() => setInput(input + '-')} style={{ flex: 1 }} />
            <Btn kind="glass" label="DEL" onPress={() => setInput(input.slice(0, -1))} style={{ flex: 1 }} />
          </Row>
          <Row>
            <Btn label={t('check')} onPress={check} style={{ flex: 1 }} />
            <Btn kind="glass" label={t('next')} onPress={next} style={{ flex: 1 }} />
          </Row>
          {fb !== null && (
            <T style={{ marginTop: 10, fontWeight: '800', color: fb ? C.good : C.bad }}>
              {fb ? t('correct') : t('wrong') + ': ' + MORSE[cur]}
            </T>
          )}
        </Glass>
      ) : (
        <>
          <Glass>
            <T style={{ fontWeight: '700', marginBottom: 6 }}>{t('textLabel')}</T>
            <Input value={text} onChangeText={setText} />
            <T style={{ marginTop: 10, fontSize: 18, color: C.accent }}>{toMorse(text)}</T>
            <Btn kind="glass" label={t('play')} icon={<Play size={16} color={C.text} />} onPress={() => play(toMorse(text).replace(/\//g, ' '))} style={{ marginTop: 10 }} />
          </Glass>
          <Glass>
            <T style={{ fontWeight: '700', marginBottom: 6 }}>{t('morseLabel')} (. - /)</T>
            <Input value={code} onChangeText={setCode} autoCapitalize="none" />
            <T style={{ marginTop: 10, fontSize: 18, color: C.accent }}>{fromMorse(code)}</T>
          </Glass>
          <Glass>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {letters.map((l) => (
                <T key={l} style={{ width: '33%', marginBottom: 4 }}>{l}  {MORSE[l]}</T>
              ))}
            </View>
          </Glass>
        </>
      )}
    </Screen>
  );
}

function Lang({ onBack }) {
  const { t } = useT();
  const [cur, setCur] = useState(LESSONS[0]);
  return (
    <Screen>
      <Back onBack={onBack} />
      <H>{t('languagesLearn')}</H>
      <T style={{ marginBottom: 8, color: C.sub }}>{t('learnLang')}</T>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {LESSONS.map((l) => (
          <Chip key={l.id} label={l.name} active={cur.id === l.id} onPress={() => setCur(l)} />
        ))}
      </View>
      <T style={{ fontWeight: '800', marginVertical: 8 }}>{t('phrases')}</T>
      {cur.phrases.map(([p, tr], i) => (
        <Glass key={i}>
          <T style={{ fontSize: 17, fontWeight: '700' }}>{p}</T>
          <T style={{ color: C.sub }}>{tr}</T>
        </Glass>
      ))}
    </Screen>
  );
}

export default function Study() {
  const { t } = useT();
  const [page, setPage] = useState(null);
  const back = () => setPage(null);
  if (page === 'ref') return <Reference onBack={back} />;
  if (page === 'calc') return <Calc onBack={back} />;
  if (page === 'morse') return <Morse onBack={back} />;
  if (page === 'lang') return <Lang onBack={back} />;
  const items = [
    ['ref', t('reference'), BookOpen],
    ['calc', t('calculator'), CalcIcon],
    ['morse', t('morse'), Radio],
    ['lang', t('languagesLearn'), Languages],
  ];
  return (
    <Screen>
      <H>{t('study')}</H>
      {items.map(([k, label, Icon]) => (
        <Glass key={k} onPress={() => setPage(k)}>
          <Row>
            <Icon size={26} color={C.accent} />
            <T style={{ fontSize: 17, fontWeight: '800' }}>{label}</T>
          </Row>
        </Glass>
      ))}
    </Screen>
  );
}
