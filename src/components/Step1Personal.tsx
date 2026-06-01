'use client'

import { FormData } from '@/lib/types'
import styles from './Steps.module.css'

interface Props {
  data: FormData
  onChange: (field: keyof FormData, val: string) => void
  onNext: () => void
}

export default function Step1Personal({ data, onChange, onNext }: Props) {
  const canNext = data.name.trim().length > 0

  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={styles.stepIcon}>👤</div>
        <div>
          <h2 className={styles.stepTitle}>Անձնական տվյալներ</h2>
          <p className={styles.stepSub}>Ձեր հիմնական տեղեկությունները</p>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Անուն <span className={styles.required}>*</span></label>
        <input
          type="text"
          placeholder="Ձեր անունը"
          value={data.name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Տարիք</label>
        <input
          type="number"
          placeholder="օր. 18"
          min="12"
          max="60"
          value={data.age}
          onChange={e => onChange('age', e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Կրթական մակարդակ</label>
        <select value={data.edu} onChange={e => onChange('edu', e.target.value)}>
          <option value="">Ընտրեք...</option>
          <option>Դպրոց (ուսանող)</option>
          <option>Ավարտված դպրոց</option>
          <option>Քոլեջ / Ուսումնարան</option>
          <option>Բուհ (ուսանող)</option>
          <option>Ավարտված բուհ</option>
          <option>Մագիստրատուրա / PhD</option>
        </select>
      </div>

      <div className={styles.btnRow}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={onNext}
          disabled={!canNext}
        >
          Շարունակել <span>→</span>
        </button>
      </div>
    </div>
  )
}
