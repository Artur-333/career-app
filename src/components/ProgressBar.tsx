'use client'

import styles from './ProgressBar.module.css'

interface Props {
  total: number
  current: number
}

const STEP_LABELS = ['Տվյալներ', 'Հետաքրքրություններ', 'Հմտություններ', 'Աշխատանք', 'Արդյունք']

export default function ProgressBar({ total, current }: Props) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={styles.stepWrap}>
          <div
            className={`${styles.dot} ${
              i < current ? styles.done : i === current ? styles.active : styles.idle
            }`}
          >
            {i < current ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <span>{i + 1}</span>
            )}
          </div>
          <span className={`${styles.label} ${i === current ? styles.labelActive : ''}`}>
            {STEP_LABELS[i]}
          </span>
          {i < total - 1 && (
            <div className={`${styles.line} ${i < current ? styles.lineDone : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}
