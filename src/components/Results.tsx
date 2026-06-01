'use client'

import { AnalysisResult } from '@/lib/types'
import styles from './Results.module.css'

interface Props {
  result: AnalysisResult
  name: string
  onRestart: () => void
}

const MEDALS = ['🥇', '🥈', '🥉']
const COLORS = ['accent', 'green', 'amber']

export default function Results({ result, name, onRestart }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.trophy}>🎯</div>
        <h2 className={styles.title}>Ձեր մասնագիտական կողմնորոշումը</h2>
        <p className={styles.intro}>{result.intro}</p>
      </div>

      <div className={styles.cards}>
        {result.careers.map((career, i) => (
          <div key={i} className={`${styles.card} ${styles[`card-${COLORS[i]}`]}`}>
            <div className={styles.cardTop}>
              <span className={styles.medal}>{MEDALS[i]}</span>
              <div className={styles.cardTitle}>
                <h3>{career.name}</h3>
                <span className={styles.rank}>#{i + 1} Առաջարկություն</span>
              </div>
              <div className={`${styles.matchBadge} ${styles[`badge-${COLORS[i]}`]}`}>
                {career.match}%
              </div>
            </div>

            <div className={styles.matchBar}>
              <div
                className={`${styles.matchFill} ${styles[`fill-${COLORS[i]}`]}`}
                style={{ width: `${career.match}%` }}
              />
            </div>

            <p className={styles.description}>{career.description}</p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>💰</span>
                <div>
                  <div className={styles.infoLabel}>Աշխատավարձ</div>
                  <div className={styles.infoVal}>{career.salary}</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🛤️</span>
                <div>
                  <div className={styles.infoLabel}>Ուղի</div>
                  <div className={styles.infoVal}>{career.path}</div>
                </div>
              </div>
            </div>

            <div className={styles.skillTags}>
              {career.skills.map(s => (
                <span key={s} className={`${styles.tag} ${styles[`tag-${COLORS[i]}`]}`}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.restartBtn} onClick={onRestart}>
          ↺ Նորից փորձել
        </button>
        <p className={styles.tip}>
          💡 Ուզո՞ւմ եք ավելի շատ իմանալ — հարցրեք AI-ին հաջորդ քայլերի մասին
        </p>
      </div>
    </div>
  )
}
