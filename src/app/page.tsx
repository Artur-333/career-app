'use client'

import { useState } from 'react'
import { FormData, AnalysisResult, SKILL_LABELS } from '@/lib/types'
import ProgressBar from '@/components/ProgressBar'
import Step1Personal from '@/components/Step1Personal'
import Step2Interests from '@/components/Step2Interests'
import Step3Skills from '@/components/Step3Skills'
import Step4Work from '@/components/Step4Work'
import Results from '@/components/Results'
import Loading from '@/components/Loading'
import styles from './page.module.css'

const INITIAL_SKILLS = Object.fromEntries(
  Object.keys(SKILL_LABELS).map(k => [k, 3])
)

const INITIAL_FORM: FormData = {
  name: '',
  age: '',
  edu: '',
  interests: [],
  skills: INITIAL_SKILLS,
  env: '',
  team: '',
  dream: '',
}


export default function Home() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')

  const updateField = (field: keyof FormData, val: string | string[] | Record<string, number>) => {
    setForm(prev => ({ ...prev, [field]: val }))
  }

  const analyze = async () => {
    setLoading(true)
    setError('')

    const prompt = `Դուք մասնագիտական կողմնորոշման AI խորհրդատու եք։ Հայ լեզվով վերադարձրեք ՄԻԱՅՆ JSON, առանց markdown backticks-ի կամ բացատրությունների։

Օգտատիրոջ տվյալները.
- Անուն: ${form.name}
- Տարիք: ${form.age || 'չնշված'}
- Կրթություն: ${form.edu || 'չնշված'}
- Հետաքրքրություններ: ${form.interests.join(', ') || 'չնշված'}
- Աշխատանքային միջավայր: ${form.env || 'չնշված'}
- Թիմային նախապատվություն: ${form.team || 'չնշված'}
- Հմտություններ (1-5): Վերլուծական=${form.skills.analytical}, Ստեղծագործ=${form.skills.creative}, Հաղորդակցություն=${form.skills.communication}, Կազմակերպչական=${form.skills.organizational}, Տեխնիկական=${form.skills.technical}, Ղեկավարություն=${form.skills.leadership}, Մաթեմատիկա=${form.skills.math}
- Երազանք: ${form.dream || 'չնշված'}

Վերադարձրեք JSON հետևյալ ձևաչափով.
{
  "intro": "Անհատականացված 1-2 նախադասություն ${form.name}-ին ուղղված, բացատրեք ինչ է երևում ձեր տվյալներից",
  "careers": [
    {
      "name": "Մասնագիտության անունը հայերեն",
      "match": 95,
      "description": "2-3 նախադասություն թե ինչու է հարմար հենց այս անձի համար, կոնկրետ ու անհատականացված",
      "skills": ["հմտություն1", "հմտություն2", "հմտություն3"],
      "salary": "Հայաստանի աշխատաշուկայի տվյալներ",
      "path": "Կոնկրետ ուղի — ինչ բուհ, կուրս կամ ինչպես սկսել"
    }
  ]
}
Նշեք ճիշտ 3 մասնագիտություն, match արժեքները 60-98 range-ում, ամենաբարձրը առաջին։ Եղեք շատ կոնկրետ Հայաստանի կոնտեքստում։`

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 25000)

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: prompt }],
        }),
        signal: controller.signal,
      })
      clearTimeout(timeout)

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'API error')
      }

      const text = data.content
        .map((b: { type: string; text?: string }) => (b.type === 'text' ? b.text : ''))
        .join('')
      const match = text.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('AI-ը սխալ ձևաչափ վերադարձրեց։ Կրկին փորձեք։')
      const parsed: AnalysisResult = JSON.parse(match[0])
      setResult(parsed)
      setStep(4)
    } catch (e) {
      console.error(e)
      const msg = e instanceof Error && e.name === 'AbortError'
        ? 'Հարցումը չափից շատ տևեց։ Կրկին փորձեք։'
        : e instanceof Error ? e.message : 'Սխալ տեղի ունեցավ։ Կրկին փորձեք։'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  const restart = () => {
    setForm(INITIAL_FORM)
    setResult(null)
    setError('')
    setStep(0)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🧭</span>
            <span className={styles.logoText}>CareerAI.am</span>
          </div>
          <h1 className={styles.title}>Մասնագիտական Կողմնորոշում</h1>
          <p className={styles.subtitle}>
            Լրացրեք ձեր տվյալները — AI-ը կգտնի ձեզ ամենահամապատասխան մասնագիտությունը
          </p>
        </div>

        {/* Progress (hide on loading/results) */}
        {!loading && step < 4 && (
          <ProgressBar total={4} current={step} />
        )}

        {/* Steps */}
        <div className={styles.card}>
          {loading && <Loading />}

          {!loading && step === 0 && (
            <Step1Personal
              data={form}
              onChange={(f, v) => updateField(f, v as string)}
              onNext={() => setStep(1)}
            />
          )}

          {!loading && step === 1 && (
            <Step2Interests
              data={form}
              onChange={(f, v) => updateField(f, v)}
              onNext={() => setStep(2)}
              onBack={() => setStep(0)}
            />
          )}

          {!loading && step === 2 && (
            <Step3Skills
              data={form}
              onChange={(skills) => updateField('skills', skills)}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {!loading && step === 3 && (
            <Step4Work
              data={form}
              onChange={(f, v) => updateField(f, v as string)}
              onSubmit={analyze}
              onBack={() => setStep(2)}
              loading={loading}
              error={error}
            />
          )}

          {!loading && step === 4 && result && (
            <Results result={result} name={form.name} onRestart={restart} />
          )}
        </div>


        <p className={styles.footer}>
          Կառուցված է Claude AI-ի միջոցով • Հայաստան 🇦🇲
        </p>
      </div>
    </main>
  )
}
