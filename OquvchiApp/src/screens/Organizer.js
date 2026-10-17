import React, { useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';
import { Plus, Trash2, Check, Timer } from 'lucide-react-native';
import { Screen, Glass, H, T, Btn, Chip, Input, Row, C } from '../ui';
import { useT, useStored } from '../ctx';

const toMin = (s) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(s || '');
  return m ? Number(m[1]) * 60 + Number(m[2]) : null;
};
const pad = (n) => String(n).padStart(2, '0');

export default function Organizer() {
  const { t } = useT();
  const days = t('dayNames').split(',');
  const [tab, setTab] = useState('schedule');
  const [lessons, setLessons] = useStored('lessons', []);
  const [hw, setHw] = useStored('homework', []);
  const [now, setNow] = useState(new Date());
  const [day, setDay] = useState((new Date().getDay() + 6) % 7);
  const [subj, setSubj] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [kind, setKind] = useState('lesson');
  const [task, setTask] = useState('');

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const today = (now.getDay() + 6) % 7;
  const secNow = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const current = lessons.find((l) => l.day === today && toMin(l.start) !== null && toMin(l.end) !== null && secNow >= toMin(l.start) * 60 && secNow < toMin(l.end) * 60);
  const left = current ? toMin(current.end) * 60 - secNow : 0;
  const total = current ? (toMin(current.end) - toMin(current.start)) * 60 : 1;

  const addLesson = () => {
    if (!subj.trim() || toMin(start) === null || toMin(end) === null) return;
    setLessons([...lessons, { id: Date.now(), day, subj: subj.trim(), start, end, kind }]);
    setSubj(''); setStart(''); setEnd('');
  };
  const addTask = () => {
    if (!task.trim()) return;
    setHw([...hw, { id: Date.now(), text: task.trim(), done: false }]);
    setTask('');
  };

  return (
    <Screen>
      <H>{t('organizer')}</H>
      <Glass>
        <Row>
          <Timer size={22} color={C.accent} />
          <View style={{ flex: 1 }}>
            {current ? (
              <>
                <T style={{ fontWeight: '800' }}>{t('timeLeft')}: {pad(Math.floor(left / 60))}:{pad(left % 60)}</T>
                <T style={{ color: C.sub }}>{current.subj}</T>
                <View style={{ height: 6, borderRadius: 3, backgroundColor: 'rgba(0,0,0,0.08)', marginTop: 6 }}>
                  <View style={{ height: 6, borderRadius: 3, backgroundColor: C.accent, width: ((total - left) / total) * 100 + '%' }} />
                </View>
              </>
            ) : (
              <T style={{ fontWeight: '700' }}>{t('noLesson')}</T>
            )}
          </View>
        </Row>
      </Glass>
      <Row style={{ marginBottom: 8 }}>
        <Chip label={t('schedule')} active={tab === 'schedule'} onPress={() => setTab('schedule')} />
        <Chip label={t('homework')} active={tab === 'hw'} onPress={() => setTab('hw')} />
      </Row>

      {tab === 'schedule' ? (
        <>
          <Glass>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {days.map((d, i) => (
                <Chip key={i} label={d} active={day === i} onPress={() => setDay(i)} />
              ))}
            </View>
            <Input placeholder={t('subject')} value={subj} onChangeText={setSubj} style={{ marginBottom: 8 }} />
            <Row style={{ marginBottom: 8 }}>
              <Input placeholder={t('from') + ' 09:00'} value={start} onChangeText={setStart} style={{ flex: 1 }} />
              <Input placeholder={t('to') + ' 09:45'} value={end} onChangeText={setEnd} style={{ flex: 1 }} />
            </Row>
            <Row style={{ marginBottom: 8 }}>
              <Chip label={t('lesson')} active={kind === 'lesson'} onPress={() => setKind('lesson')} />
              <Chip label={t('tutor')} active={kind === 'tutor'} onPress={() => setKind('tutor')} />
            </Row>
            <Btn label={t('add')} icon={<Plus size={18} color="#fff" />} onPress={addLesson} />
          </Glass>
          {days.map((d, i) => {
            const L = lessons.filter((l) => l.day === i).sort((a, b) => toMin(a.start) - toMin(b.start));
            if (!L.length) return null;
            return (
              <Glass key={i}>
                <T style={{ fontWeight: '800', marginBottom: 6 }}>{d}</T>
                {L.map((l) => (
                  <Row key={l.id} style={{ marginBottom: 6 }}>
                    <T style={{ flex: 1 }}>{l.start}-{l.end}  {l.subj}  ({t(l.kind)})</T>
                    <Pressable onPress={() => setLessons(lessons.filter((x) => x.id !== l.id))}>
                      <Trash2 size={18} color={C.bad} />
                    </Pressable>
                  </Row>
                ))}
              </Glass>
            );
          })}
        </>
      ) : (
        <>
          <Glass>
            <Row>
              <Input placeholder={t('homeworkHint')} value={task} onChangeText={setTask} style={{ flex: 1 }} />
              <Btn label="" icon={<Plus size={20} color="#fff" />} onPress={addTask} />
            </Row>
          </Glass>
          {hw.map((h) => (
            <Glass key={h.id}>
              <Row>
                <Pressable onPress={() => setHw(hw.map((x) => (x.id === h.id ? { ...x, done: !x.done } : x)))}>
                  <View style={{ width: 26, height: 26, borderRadius: 8, borderWidth: 2, borderColor: C.accent, backgroundColor: h.done ? C.accent : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    {h.done && <Check size={16} color="#fff" />}
                  </View>
                </Pressable>
                <T style={{ flex: 1, textDecorationLine: h.done ? 'line-through' : 'none', color: h.done ? C.sub : C.text }}>{h.text}</T>
                <Pressable onPress={() => setHw(hw.filter((x) => x.id !== h.id))}>
                  <Trash2 size={18} color={C.bad} />
                </Pressable>
              </Row>
            </Glass>
          ))}
        </>
      )}
    </Screen>
  );
}
