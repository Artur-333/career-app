'use client'

import { FormData, ENV_OPTIONS, TEAM_OPTIONS } from '@/lib/types'
import styles from './Steps.module.css'

interface Props {
  data: FormData
  onChange: (field: keyof FormData, val: string | string[]) => void
  onSubmit: () => void
  onBack: () => void
  loading: boolean
  error?: string
}

export default function Step4Work({ data, onChange, onSubmit, onBack, loading, error }: Props) {
  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={styles.stepIcon}>🏢</div>
        <div>
          <h2 className={styles.stepTitle}>Աշխատանքային նախապատվություններ</h2>
          <p className={styles.stepSub}>Ինչ տեսակի աշխատանքային միջավայր եք ուզում</p>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Աշխատանքային միջավայր</label>
        <div className={styles.chipGrid}>
          {ENV_OPTIONS.map(({ emoji, label }) => (
            <button
              key={label}
              className={`${styles.chip} ${data.env === label ? styles.chipSelected : ''}`}
              onClick={() => onChange('env', label)}
            >
              <span className={styles.chipEmoji}>{emoji}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Թիմային կառուցվածք</label>
        <div className={styles.chipGrid}>
          {TEAM_OPTIONS.map(({ emoji, label }) => (
            <button
              key={label}
              className={`${styles.chip} ${data.team === label ? styles.chipSelected : ''}`}
              onClick={() => onChange('team', label)}
            >
              <span className={styles.chipEmoji}>{emoji}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Ձեր երազանքային աշխատանքը <span className={styles.optional}>(ըստ ցանկության)</span></label>
        <textarea
          placeholder="Ուզում եմ աշխատել..."
          value={data.dream}
          onChange={e => onChange('dream', e.target.value)}
        />
      </div>

      {error && (
        <div style={{ background: '#ff4d4f22', border: '1px solid #ff4d4f', borderRadius: 8, padding: '12px 16px', color: '#ff4d4f', marginBottom: 12, fontSize: 14 }}>
          ⚠️ {error}
        </div>
      )}

      <div className={styles.btnRow}>
        <button className={styles.btn} onClick={onBack} disabled={loading}>← Հետ</button>
        <button
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnAnalyze}`}
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className={styles.spinner} />
              Վերլուծում...
            </>
          ) : (
            <>✨ Վերլուծել AI-ով</>
          )}
        </button>
      </div>
    </div>
  )
}
