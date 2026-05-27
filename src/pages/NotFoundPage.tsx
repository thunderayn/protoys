import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import ConstructionIcon from '@mui/icons-material/Construction'
import { useLanguage } from '../i18n/LanguageContext'
import { notFoundText } from '../i18n/translations/notfound'

export default function NotFoundPage() {
  const { lang } = useLanguage()
  const t = notFoundText[lang]

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f8f6',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <ConstructionIcon sx={{ fontSize: 72, color: '#c7ab54' }} />
      <div
        style={{
          fontSize: 96,
          fontWeight: 900,
          color: '#c7ab54',
          lineHeight: 1,
          margin: '8px 0 4px',
        }}
      >
        {t.code}
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
        {t.title}
      </h2>
      <p style={{ fontSize: 14, color: '#888', margin: '0 0 36px' }}>{t.body}</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          sx={{
            backgroundColor: '#c7ab54',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.06em',
            borderRadius: '3px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
          }}
        >
          {t.cta}
        </Button>
      </Link>
    </div>
  )
}
