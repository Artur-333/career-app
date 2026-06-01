'use client'

import { FormData, SKILL_LABELS } from '@/lib/types'
import styles from './Steps.module.css'

interface Props {
  data: FormData
  onChange: (skills: Record<string, number>) => void
  onNext: () => void
  onBack: () => void
}

const EMOJI: Record<string, string> = {
  analytical: '🧠',
  creative: '🎨',
  communication: '💬',
  organizational: '📋',
  technical: '⚙️',
  leadership: '🦁',
  math: '📐',
}

const LEVEL_LABELS = ['', 'Թույլ', 'Բավարար', 'Միջին', 'Լավ', 'Գերազանց']

export default function Step3Skills({ data, onChange, onNext, onBack }: Props) {
  const handleChange = (skill: string, val: number) => {
    onChange({ ...data.skills, [skill]: val })
  }

  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={styles.stepIcon}>⭐</div>
        <div>
          <h2 className={styles.stepTitle}>Ձեր հմտությունները</h2>
          <p className={styles.stepSub}>Գնահատեք ձեր կարողությունները 1-ից 5</p>
        </div>
      </div>

      <div className={styles.sliderList}>
        {Object.entries(SKILL_LABELS).map(([key, label]) => {
          const val = data.skills[key] ?? 3
          return (
            <div key={key} className={styles.sliderRow}>
              <div className={styles.sliderMeta}>
                <span className={styles.sliderEmoji}>{EMOJI[key]}</span>
                <span className={styles.sliderLabel}>{label}</span>
                <span className={styles.sliderLevel} data-level={val}>
                  {LEVEL_LABELS[val]}
                </span>
              </div>
              <div className={styles.sliderTrack}>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={val}
                  onChange={e => handleChange(key, Number(e.target.value))}
                />
                <div className={styles.sliderDots}>
                  {[1,2,3,4,5].map(n => (
                    <div
                      key={n}
                      className={`${styles.sliderDot} ${val >= n ? styles.sliderDotFilled : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.btnRow}>
        <button className={styles.btn} onClick={onBack}>← Հետ</button>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={onNext}>
          Շարունակել <span>→</span>
        </button>
      </div>
    </div>
  )
}
