import { useEffect, useRef, useState } from 'react'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const icons = [
  <EmojiEventsOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
  <ApartmentOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
  <GroupsOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
  <PublicOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
  <FactoryOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
  <HandymanOutlinedIcon sx={{ fontSize: 36, color: '#C49A3C' }} />,
]

type Stat = {
  num?: number
  suffix?: string
  display?: string
  label: string
  sub?: string
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1600
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

export default function AboutStatsBar() {
  const { lang } = useLanguage()
  const stats = aboutPageText[lang].stats as Stat[]
  const barRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={barRef}
      style={{
        background: '#fff',
        borderBottom: '1px solid #efefef',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}
        className="grid grid-cols-3 md:grid-cols-6"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '36px 16px',
              borderRight: i < stats.length - 1 ? '1px solid #f0f0f0' : 'none',
            }}
          >
            <div style={{ marginBottom: 10 }}>{icons[i]}</div>

            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#111',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: 4,
              }}
            >
              {stat.num !== undefined ? (
                <CountUp target={stat.num} suffix={stat.suffix ?? ''} active={active} />
              ) : (
                <>{stat.display}</>
              )}
            </div>

            {stat.sub ? (
              <>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 11, color: '#aaa' }}>{stat.sub}</div>
              </>
            ) : (
              <div style={{ fontSize: 12, color: '#888', marginTop: 2, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
