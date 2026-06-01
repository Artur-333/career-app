# 🧭 CareerAI.am — Մասնագիտական Կողմնորոշման Համակարգ

AI-ով աշխատող մասնագիտական կողմնորոշման վեբ հավելված, կառուցված Next.js 14 + Claude AI-ի միջոցով։

---

## 🚀 Գործարկման հրահանգ (3 քայլ)

### 1. Node.js տեղադրեք
Եթե դեռ տեղադրված չէ → https://nodejs.org (LTS տարբերակ)

### 2. Կախվածությունները տեղադրեք
```bash
npm install
```

### 3. API Key-ը կարգաբերեք
Ստեղծեք `.env.local` ֆայլ (`.env.local.example`-ի հիման վրա).

```bash
cp .env.local.example .env.local
```

Բացեք `.env.local` ֆայլը և մուտքագրեք ձեր Anthropic API key-ը.
```
ANTHROPIC_API_KEY=sk-ant-ձեր-key-ը-այստեղ
```

API key ստանալ → https://console.anthropic.com

### 4. Գործարկեք
```bash
npm run dev
```

Բացեք բրաուզերում → http://localhost:3000

---

## 📁 Ֆայլային կառուցվածք

```
src/
├── app/
│   ├── api/analyze/route.ts   ← Claude API endpoint
│   ├── globals.css            ← Ընդհանուր ոճ
│   ├── layout.tsx             ← Root layout
│   ├── page.tsx               ← Գլխավոր էջ (բոլոր logic)
│   └── page.module.css        ← Էջի ոճ
├── components/
│   ├── ProgressBar.tsx        ← Առաջընթացի բար
│   ├── Step1Personal.tsx      ← Անձնական տվյալներ
│   ├── Step2Interests.tsx     ← Հետաքրքրություններ
│   ├── Step3Skills.tsx        ← Հմտություններ
│   ├── Step4Work.tsx          ← Աշխատանքային նախապ.
│   ├── Results.tsx            ← Արդյունքի էջ
│   ├── Loading.tsx            ← Բեռնման animation
│   └── Steps.module.css       ← Ընդհանուր CSS
└── lib/
    └── types.ts               ← TypeScript types + data
```

---

## ✨ Հատկանիշներ

- 🤖 Claude AI — անհատականացված վերլուծություն
- 🇦🇲 Ամբողջությամբ հայերեն
- 📊 4 քայլ ձև — հետաքրքրություններ, հմտություններ, աշխատանք
- 🎯 3 լավագույն մասնագիտություն %-ային համընկնումով
- 💰 Հայաստանի աշխատաշուկայի տվյալներ
- 📱 Mobile-friendly դիզայն
- ⚡ Fallback — աշխատում է նույնիսկ API key-ի բացակայությամբ

---

## 🛠️ Production Build

```bash
npm run build
npm run start
```

---

Կառուցված է Claude AI-ի միջոցով • Հայաստան 🇦🇲
