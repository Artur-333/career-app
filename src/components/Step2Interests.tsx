'use client'

import { FormData, INTERESTS } from '@/lib/types'
import styles from './Steps.module.css'

interface Props {
  data: FormData
  onChange: (field: keyof FormData, val: string[]) => void
  onNext: () => void
  onBack: () => void
}

export default function Step2Interests({ data, onChange, onNext, onBack }: Props) {
  const toggle = (label: string) => {
    const full = label
    const selected = data.interests.includes(full)
      ? data.interests.filter(i => i !== full)
      : [...data.interests, full]
    onChange('interests', selected)
  }

  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={styles.stepIcon}>❤️</div>
        <div>
          <h2 className={styles.stepTitle}>Հետաքրքրություններ</h2>
          <p className={styles.stepSub}>Ընտրեք բոլոր ոլորտները, որոնք ձեզ հետաքրքիր են</p>
        </div>
      </div>

      <div className={styles.chipGrid}>
        {INTERESTS.map(({ emoji, label }) => {
          const selected = data.interests.includes(label)
          return (
            <button
              key={label}
              className={`${styles.chip} ${selected ? styles.chipSelected : ''}`}
              onClick={() => toggle(label)}
            >
              <span className={styles.chipEmoji}>{emoji}</span>
              {label}
            </button>
          )
        })}
      </div>

      {data.interests.length > 0 && (
        <p className={styles.selectedCount}>
          Ընտրված՝ {data.interests.length} հետաքրքրություն
        </p>
      )}

      <div className={styles.btnRow}>
        <button className={styles.btn} onClick={onBack}>← Հետ</button>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={onNext}
          disabled={data.interests.length === 0}
        >
          Շարունակել <span>→</span>
        </button>
      </div>
    </div>
  )
}
