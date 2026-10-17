import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable } from 'react-native';
import { GraduationCap, Award, ChevronLeft, Clock } from 'lucide-react-native';
import { Screen, Glass, H, T, Btn, Chip, Row, C } from '../ui';
import { useT, pick } from '../ctx';
import { SAT_RW, SAT_MATH, MS, msLevel } from '../data/questions';

const pad = (n) => String(n).padStart(2, '0');

function analyze(items, answers) {
  const by = {};
  items.forEach((q, i) => {
    by[q.t] = by[q.t] || { ok: 0, n: 0 };
    by[q.t].n += 1;
    if (answers[i] === q.a) by[q.t].ok += 1;
  });
  return Object.entries(by).map(([topic, v]) => ({ topic, pct: Math.round((v.ok / v.n) * 100), ok: v.ok, n: v.n }));
}

function Analytics({ rows }) {
  const { t } = useT();
  const strong = rows.filter((r) => r.pct >= 70);
  const mid = rows.filter((r) => r.pct >= 40 && r.pct < 70);
  const weak = rows.filter((r) => r.pct < 40);
  const Block = ({ title, list, color }) =>
    list.length ? (
      <Glass>
        <T style={{ fontWeight: '800', color, marginBottom: 6 }}>{title}</T>
        {list.map((r) => (
          <View key={r.topic} style={{ marginBottom: 6 }}>
            <T>{r.topic}: {r.ok}/{r.n} ({r.pct}%)</T>
            <View style={{ height: 6, borderRadius: 3, backgroundColor: 'rgba(0,0,0,0.08)', marginTop: 3 }}>
              <View style={{ height: 6, borderRadius: 3, backgroundColor: color, width: r.pct + '%' }} />
            </View>
          </View>
        ))}
      </Glass>
    ) : null;
  return (
    <>
      <H style={{ fontSize: 18 }}>{t('analytics')}</H>
      <Block title={t('strong')} list={strong} color={C.good} />
      <Block title={t('medium')} list={mid} color={C.warn} />
      <Block title={t('weak')} list={weak} color={C.bad} />
    </>
  );
}

// Generic runner: items = [{t,q,o,a}], seconds = limit
function Runner({ items, seconds, onFinish, onExit }) {
  const { t } = useT();
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [left, setLeft] = useState(seconds);
  const ansRef = useRef(ans);
  ansRef.current = ans;
  const fin = useRef(false);

  const finish = () => {
    if (fin.current) return;
    fin.current = true;
    onFinish(ansRef.current);
  };
  useEffect(() => {
    const id = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (left <= 0) finish();
  }, [left]);

  const q = items[i];
  return (
    <Screen>
      <Row style={{ justifyContent: 'space-between', marginBottom: 10 }}>
        <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onExit} />
        <Row>
          <Clock size={18} color={C.accent} />
          <T style={{ fontWeight: '800' }}>{pad(Math.floor(left / 60))}:{pad(left % 60)}</T>
        </Row>
      </Row>
      <Glass>
        <T style={{ color: C.sub, marginBottom: 6 }}>{i + 1} / {items.length}  |  {q.t}</T>
        <T style={{ fontSize: 17, fontWeight: '700', marginBottom: 12 }}>{q.q}</T>
        {q.o.map((o, k) => (
          <Pressable key={k} onPress={() => setAns({ ...ans, [i]: k })} style={{ padding: 12, borderRadius: 14, marginBottom: 8, backgroundColor: ans[i] === k ? C.accent : 'rgba(255,255,255,0.6)' }}>
            <T style={{ color: ans[i] === k ? '#fff' : C.text, fontWeight: '600' }}>{String.fromCharCode(65 + k)}. {o}</T>
          </Pressable>
        ))}
      </Glass>
      <Row>
        <Btn kind="glass" label={t('back')} onPress={() => setI(Math.max(0, i - 1))} style={{ flex: 1 }} />
        {i < items.length - 1 ? (
          <Btn label={t('next')} onPress={() => setI(i + 1)} style={{ flex: 1 }} />
        ) : (
          <Btn label={t('finish')} onPress={finish} style={{ flex: 1 }} />
        )}
      </Row>
    </Screen>
  );
}

function SAT({ onExit }) {
  const { t } = useT();
  const items = [...SAT_RW, ...SAT_MATH];
  const [res, setRes] = useState(null);
  if (!res)
    return (
      <Runner
        items={items}
        seconds={20 * 60}
        onExit={onExit}
        onFinish={(a) => {
          const part = (s) => items.map((q, i) => ({ q, i })).filter((x) => x.q.s === s);
          const sec = (s) => {
            const p = part(s);
            const ok = p.filter((x) => a[x.i] === x.q.a).length;
            return Math.round((200 + (ok / p.length) * 600) / 10) * 10;
          };
          const rw = sec('rw');
          const m = sec('math');
          setRes({ rw, m, total: rw + m, rows: analyze(items, a) });
        }}
      />
    );
  return (
    <Screen>
      <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onExit} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />
      <H>{t('satTitle')}</H>
      <Glass>
        <T style={{ fontSize: 40, fontWeight: '800', color: C.accent }}>{res.total}</T>
        <T style={{ color: C.sub }}>400 - 1600</T>
        <T style={{ marginTop: 8 }}>Reading and Writing: {res.rw} / 800</T>
        <T>Math: {res.m} / 800</T>
      </Glass>
      <Analytics rows={res.rows} />
    </Screen>
  );
}

function Milliy({ onExit }) {
  const { t, lang } = useT();
  const [subj, setSubj] = useState(null);
  const [res, setRes] = useState(null);
  if (!subj)
    return (
      <Screen>
        <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={onExit} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />
        <H>{t('msTitle')}</H>
        <T style={{ marginBottom: 8 }}>{t('chooseSubject')}</T>
        {Object.entries(MS).map(([k, v]) => (
          <Glass key={k} onPress={() => setSubj(k)}>
            <T style={{ fontSize: 17, fontWeight: '800' }}>{pick(v, lang)}</T>
          </Glass>
        ))}
      </Screen>
    );
  const items = MS[subj].qs;
  if (!res)
    return (
      <Runner
        items={items}
        seconds={10 * 60}
        onExit={() => setSubj(null)}
        onFinish={(a) => {
          const ok = items.filter((q, i) => a[i] === q.a).length;
          const score = Math.round((ok / items.length) * 75 * 10) / 10;
          setRes({ ok, score, level: msLevel(score), rows: analyze(items, a) });
        }}
      />
    );
  return (
    <Screen>
      <Btn kind="glass" label={t('back')} icon={<ChevronLeft size={18} color={C.text} />} onPress={() => { setRes(null); setSubj(null); }} style={{ alignSelf: 'flex-start', marginBottom: 12 }} />
      <H>{pick(MS[subj], lang)}</H>
      <Glass>
        <T style={{ fontSize: 40, fontWeight: '800', color: C.accent }}>{res.score} / 75</T>
        <T style={{ fontSize: 20, fontWeight: '800' }}>{t('level')}: {res.level || t('belowLevel')}</T>
        <T style={{ color: C.sub }}>{t('correctAnswers')}: {res.ok} / {items.length}</T>
      </Glass>
      <Analytics rows={res.rows} />
    </Screen>
  );
}

export default function Tests() {
  const { t } = useT();
  const [page, setPage] = useState(null);
  if (page === 'sat') return <SAT onExit={() => setPage(null)} />;
  if (page === 'ms') return <Milliy onExit={() => setPage(null)} />;
  return (
    <Screen>
      <H>{t('tests')}</H>
      <Glass onPress={() => setPage('sat')}>
        <Row>
          <GraduationCap size={28} color={C.accent} />
          <View style={{ flex: 1 }}>
            <T style={{ fontSize: 17, fontWeight: '800' }}>{t('satTitle')}</T>
            <T style={{ color: C.sub }}>{t('satSub')}</T>
          </View>
        </Row>
      </Glass>
      <Glass onPress={() => setPage('ms')}>
        <Row>
          <Award size={28} color={C.accent} />
          <View style={{ flex: 1 }}>
            <T style={{ fontSize: 17, fontWeight: '800' }}>{t('msTitle')}</T>
            <T style={{ color: C.sub }}>{t('msSub')}</T>
          </View>
        </Row>
      </Glass>
    </Screen>
  );
}
