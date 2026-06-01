import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const processImages = [
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory3_zquooi.png',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265058/factory8_wh609y.png',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory2_sgj2of.png',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265057/factory6_jhayok.png',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265056/factory4_jrcxct.png',
]
 
const STEP_COLS = '1fr 48px 1fr'

function StepCard({ step, imgSrc }: { step: { num: string; title: string; desc: string }; imgSrc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: '#c7ab54', lineHeight: 1, letterSpacing: '-0.01em' }}>
        {step.num}
      </div>
      <div style={{ overflow: 'hidden', borderRadius: 2, flexShrink: 0 }}>
        <img
          src={imgSrc}
          alt={step.title}
          style={{
            width: '100%',
            aspectRatio: '16/9',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
        />
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1714', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {step.title}
      </div>
      <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
        {step.desc}
      </div>
    </div>
  )
}

export default function AboutProcessSection() {
  const { lang } = useLanguage()
  const t = aboutPageText[lang].process

  // Snake: row1 01→02, row2 04←03, row3 05→06
  const row1 = [t.steps[0], t.steps[1]]
  const row2 = [t.steps[3], t.steps[2]]
  const row3 = [t.steps[4], t.steps[5]]
  const row1Imgs = [processImages[0], processImages[1]]
  const row2Imgs = [processImages[3], processImages[2]]
  const row3Imgs = [processImages[4], processImages[5]]

  return (
    <section style={{ background: '#fff', padding: '100px 0', borderTop: '1px solid #f2f2f2' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>

        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 32, height: 2, background: '#c7ab54', marginBottom: 14 }} />
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1a1714', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
            {t.eyebrow}
          </h2>
        </div>

        {/* ── Desktop: snake layout 2 per row ── */}
        <div className="hidden md:block">

          {/* Row 1: 01 → 02 */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, alignItems: 'center' }}>
            <StepCard step={row1[0]} imgSrc={row1Imgs[0]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#c7ab54' }}>
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={row1[1]} imgSrc={row1Imgs[1]} />
          </div>

          {/* Corner ↓ at right */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, margin: '28px 0' }}>
            <div /><div />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#c7ab54' }}>
              <ArrowDownwardIcon sx={{ fontSize: 16 }} />
            </div>
          </div>

          {/* Row 2: 04 ← 03 */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, alignItems: 'center' }}>
            <StepCard step={row2[0]} imgSrc={row2Imgs[0]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#c7ab54' }}>
              <ArrowBackIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={row2[1]} imgSrc={row2Imgs[1]} />
          </div>

          {/* Corner ↓ at left */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, margin: '28px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#c7ab54' }}>
              <ArrowDownwardIcon sx={{ fontSize: 16 }} />
            </div>
            <div /><div />
          </div>

          {/* Row 3: 05 → 06 */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, alignItems: 'center' }}>
            <StepCard step={row3[0]} imgSrc={row3Imgs[0]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#c7ab54' }}>
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={row3[1]} imgSrc={row3Imgs[1]} />
          </div>
        </div>

        {/* ── Mobile: single column with arrow between steps ── */}
        <div className="md:hidden flex flex-col">
          {t.steps.map((step, i) => (
            <div key={step.num}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#c7ab54', lineHeight: 1 }}>{step.num}</div>
                <div style={{ overflow: 'hidden', borderRadius: 2 }}>
                  <img src={processImages[i]} alt={step.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#1a1714', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{step.title}</div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.55 }}>{step.desc}</div>
              </div>
              {i < t.steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0', color: '#c7ab54' }}>
                  <ArrowDownwardIcon sx={{ fontSize: 20 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
