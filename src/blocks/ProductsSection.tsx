import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { productsText } from '../i18n/translations/products'

const productImages = [
  {
    src: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80',
    alt: 'Plush Toy 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=400&q=80',
    alt: 'Plush Toy 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=400&q=80',
    alt: 'Plush Toy 3',
  },
]

export default function ProductsSection() {
  const { lang } = useLanguage()
  const t = productsText[lang]

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
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>
          {t.sub}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {productImages.map(({ src, alt }) => (
          <div
            key={alt}
            style={{
              borderRadius: 4,
              overflow: 'hidden',
              aspectRatio: '1 / 1',
              background: '#f3f3f3',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderColor: '#C49A3C',
            color: '#C49A3C',
            px: 3,
            py: 1,
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
            borderRadius: '3px',
            '&:hover': { borderColor: '#A07828', color: '#A07828', backgroundColor: 'transparent' },
          }}
        >
          {t.cta}
        </Button>
      </div>
    </div>
  )
}
