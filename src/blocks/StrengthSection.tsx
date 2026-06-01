import { useEffect, useRef, useState } from 'react'
import FactoryIcon from '@mui/icons-material/Factory'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import ArticleIcon from '@mui/icons-material/Article'
import LanguageIcon from '@mui/icons-material/Language'
import { useLanguage } from '../i18n/LanguageContext'
import { strengthText } from '../i18n/translations/strength'

const icons = [
  <FactoryIcon sx={{ fontSize: 44, color: '#c7ab54' }} />,
  <PeopleAltIcon sx={{ fontSize: 44, color: '#c7ab54' }} />,
  <PrecisionManufacturingIcon sx={{ fontSize: 44, color: '#c7ab54' }} />,
  <ArticleIcon sx={{ fontSize: 44, color: '#c7ab54' }} />,
  <LanguageIcon sx={{ fontSize: 44, color: '#c7ab54' }} />,
]

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])

  return <>{count}{suffix}</>
}

export default function StrengthSection() {
  const { lang } = useLanguage()
  const t = strengthText[lang]
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '80px 0',
        backgroundImage:
          'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,20,28,0.78)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ width: 32, height: 2, background: '#c7ab54', margin: '0 auto 16px' }} />
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {t.heading}
          </h2>
        </div>

        {/* Stats — centered column: icon → number → label */}
        <div
          className="grid grid-cols-2 md:grid-cols-5"
          style={{ gap: '48px 24px' }}
        >
          {t.stats.map(({ value, label }, i) => {
            const { num, suffix } = parseStatValue(value)
            return (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  textAlign: 'center',
                }}
              >
                <div style={{ lineHeight: 1 }}>{icons[i]}</div>
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <CountUp target={num} suffix={suffix} active={active} />
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.5,
                    maxWidth: 120,
                  }}
                >
                  {label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
