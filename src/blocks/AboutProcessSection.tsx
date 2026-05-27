import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const processImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265056/factory4_jrcxct.png',
  'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
]

const STEP_COLS = '1fr 32px 1fr 32px 1fr'

function StepCard({ step, imgSrc }: { step: { num: string; title: string; desc: string }; imgSrc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: '#C49A3C', lineHeight: 1, letterSpacing: '-0.01em' }}>
        {step.num}
      </div>
      <div style={{ overflow: 'hidden', borderRadius: 2, flexShrink: 0 }}>
        <img
          src={imgSrc}
          alt={step.title}
          style={{
            width: '100%',
            aspectRatio: '4/3',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
        />
      </div>
      <div style={{ fontSize: 11, fontWeight: 800, color: '#111', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {step.title}
      </div>
      <div style={{ fontSize: 11, color: '#888', lineHeight: 1.55 }}>
        {step.desc}
      </div>
    </div>
  )
}

export default function AboutProcessSection() {
  const { lang } = useLanguage()
  const t = aboutPageText[lang].process

  // Clockwise: top row 01→02→03, bottom row 06←05←04
  const top    = t.steps.slice(0, 3)
  const bottom = [t.steps[5], t.steps[4], t.steps[3]]
  const topImgs    = processImages.slice(0, 3)
  const bottomImgs = [processImages[5], processImages[4], processImages[3]]

  return (
    <section style={{ background: '#fff', padding: '80px 0 80px', borderTop: '1px solid #f2f2f2' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 32, height: 2, background: '#C49A3C', marginBottom: 14 }} />
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
            {t.eyebrow}
          </h2>
        </div>

        {/* ── Desktop: clockwise 2-row layout ── */}
        <div className="hidden md:block">

          {/* Row 1: 01 → 02 → 03 */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, alignItems: 'center' }}>
            <StepCard step={top[0]} imgSrc={topImgs[0]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#C49A3C' }}>
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={top[1]} imgSrc={topImgs[1]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#C49A3C' }}>
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={top[2]} imgSrc={topImgs[2]} />
          </div>

          {/* Corner ↓ arrow — aligned to last column (step 03 → step 04 corner) */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, margin: '16px 0' }}>
            <div /><div /><div /><div />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#C49A3C' }}>
              <ArrowDownwardIcon sx={{ fontSize: 16 }} />
            </div>
          </div>

          {/* Row 2: 06 ← 05 ← 04 */}
          <div style={{ display: 'grid', gridTemplateColumns: STEP_COLS, alignItems: 'center' }}>
            <StepCard step={bottom[0]} imgSrc={bottomImgs[0]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#C49A3C' }}>
              <ArrowBackIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={bottom[1]} imgSrc={bottomImgs[1]} />
            <div style={{ display: 'flex', justifyContent: 'center', color: '#C49A3C' }}>
              <ArrowBackIcon sx={{ fontSize: 16 }} />
            </div>
            <StepCard step={bottom[2]} imgSrc={bottomImgs[2]} />
          </div>
        </div>

        {/* ── Mobile: 2-col grid with image ── */}
        <div className="md:hidden grid grid-cols-2" style={{ gap: '28px 16px' }}>
          {t.steps.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#C49A3C', lineHeight: 1 }}>{step.num}</div>
              <div style={{ overflow: 'hidden', borderRadius: 2 }}>
                <img src={processImages[i]} alt={step.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#111', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{step.title}</div>
              <div style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
