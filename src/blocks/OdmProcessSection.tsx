import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ForumIcon from '@mui/icons-material/Forum'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import FactoryIcon from '@mui/icons-material/Factory'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { useLanguage } from '../i18n/LanguageContext'
import { odmText } from '../i18n/translations/odm'

const stepIcons = [
  <ForumIcon sx={{ fontSize: 28 }} />,
  <DesignServicesIcon sx={{ fontSize: 28 }} />,
  <CheckBoxOutlinedIcon sx={{ fontSize: 28 }} />,
  <FactoryIcon sx={{ fontSize: 28 }} />,
  <VerifiedUserIcon sx={{ fontSize: 28 }} />,
  <LocalShippingIcon sx={{ fontSize: 28 }} />,
]

export default function OdmProcessSection() {
  const { lang } = useLanguage()
  const t = odmText[lang]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%' }}>
      <div>
        <div style={{ width: 32, height: 2, background: '#C49A3C', marginBottom: 12 }} />
        <h2
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: '#111',
            letterSpacing: '-0.01em',
            margin: '0 0 8px',
          }}
        >
          {t.heading}
        </h2>
        {/* invisible spacer to match ProductsSection subtitle height */}
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, visibility: 'hidden', userSelect: 'none' }}>&nbsp;</p>
      </div>

      {/* Step circles with arrows */}
      <div className="justify-center lg:justify-between" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 6px', alignItems: 'flex-start' }}>
        {t.steps.map(({ num, label }, i) => (
          <Fragment key={i}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 7,
                flex: '1 1 0',
                minWidth: 72,
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  border: '1.5px solid #e0e0e0',
                  background: '#fafafa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#777',
                }}
              >
                {stepIcons[i]}
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#555' }}>{num}</span>
              <span
                style={{
                  fontSize: 11,
                  color: '#888',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                  maxWidth: 72,
                  width: '100%',
                }}
              >
                {label}
              </span>
            </div>

            {i < t.steps.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 20, color: '#C49A3C' }}>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#C49A3C',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
            borderRadius: '3px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#A07828', boxShadow: 'none' },
          }}
        >
          {t.cta}
        </Button>
      </div>
    </div>
  )
}
