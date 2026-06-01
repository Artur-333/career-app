'use client'

import { useEffect, useState } from 'react'
import styles from './Loading.module.css'

const MESSAGES = [
  'AI-ը վերլուծում է ձեր հետաքրքրությունները...',
  'Համեմատում ենք հազարավոր մասնագիտությունների հետ...',
  'Ձեր ուժեղ կողմերը գնահատվում են...',
  'Հայաստանի աշխատաշուկան ուսումնասիրվում է...',
  'Ձեզ համար լավագույն տարբերակները ընտրվում են...',
]

export default function Loading() {
  const [msgIdx, setMsgIdx] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setMsgIdx(i => (i + 1) % MESSAGES.length)
    }, 2000)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.orb} />
      <div className={styles.rings}>
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.ring} />
      </div>
      <div className={styles.icon}>🤖</div>
      <h3 className={styles.title}>AI-ը աշխատում է...</h3>
      <p className={styles.message} key={msgIdx}>{MESSAGES[msgIdx]}</p>
      <div className={styles.dots}>
        <span /><span /><span />
      </div>
    </div>
  )
}
