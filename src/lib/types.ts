export interface FormData {
  name: string
  age: string
  edu: string
  interests: string[]
  skills: Record<string, number>
  env: string
  team: string
  dream: string
}

export interface Career {
  name: string
  match: number
  description: string
  skills: string[]
  salary: string
  path: string
  color: 'accent' | 'green' | 'amber'
}

export interface AnalysisResult {
  intro: string
  careers: Career[]
}

export const INTERESTS = [
  { emoji: '💻', label: 'Ծրագրավորում' },
  { emoji: '🎨', label: 'Դիզայն / Արվեստ' },
  { emoji: '📊', label: 'Բիզնես / Ֆինանսներ' },
  { emoji: '🔬', label: 'Գիտություն / Հետազոտություն' },
  { emoji: '🏥', label: 'Բժշկություն / Առողջություն' },
  { emoji: '📚', label: 'Կրթություն / Դասավանդում' },
  { emoji: '⚖️', label: 'Իրավաբանություն' },
  { emoji: '🏗️', label: 'Ճարտարագիտություն' },
  { emoji: '🌿', label: 'Բնություն / Բնապահպանություն' },
  { emoji: '🎭', label: 'Ստեղծագործություն / Կինո' },
  { emoji: '✈️', label: 'Ճանապարհորդություն / Տուրիզմ' },
  { emoji: '🍳', label: 'Խոհարարություն' },
  { emoji: '🏋️', label: 'Սպորտ / Ֆիթնես' },
  { emoji: '📱', label: 'Տեխնոլոգիաներ' },
  { emoji: '🎵', label: 'Երաժշտություն' },
  { emoji: '🌐', label: 'Հասարակական գործ' },
]

export const SKILL_LABELS: Record<string, string> = {
  analytical: 'Վերլուծական մտածողություն',
  creative: 'Ստեղծագործականություն',
  communication: 'Հաղորդակցություն',
  organizational: 'Կազմակերպչական',
  technical: 'Տեխնիկական',
  leadership: 'Ղեկավարություն',
  math: 'Մաթեմատիկա',
}

export const ENV_OPTIONS = [
  { emoji: '🏢', label: 'Գրասենյակ' },
  { emoji: '🏠', label: 'Հեռավար (տնից)' },
  { emoji: '🌍', label: 'Ճամփորդություններ' },
  { emoji: '🏥', label: 'Հիվանդանոց / Կլինիկա' },
  { emoji: '🏫', label: 'Ուսումնական հաստատություն' },
  { emoji: '🔬', label: 'Լաբորատորիա' },
  { emoji: '🌿', label: 'Բաց օդ' },
]

export const TEAM_OPTIONS = [
  { emoji: '👤', label: 'Ինքնուրույն' },
  { emoji: '👥', label: 'Փոքր թիմ (2-5)' },
  { emoji: '🏢', label: 'Մեծ կազմակերպություն' },
  { emoji: '🚀', label: 'Ստարտափ' },
]
