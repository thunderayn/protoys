import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { productsText } from '../i18n/translations/products'

const productImages = [
  {
    src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon3_l74cyj.jpg',
    alt: 'Plush Toy 1',
  },
  {
    src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon2_qn55fi.jpg',
    alt: 'Plush Toy 2',
  },
  {
    src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/panda1_cat0ay.jpg',
    alt: 'Plush Toy 3',
  },
]

export default function ProductsSection() {
  const { lang } = useLanguage()
  const t = productsText[lang]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%' }}>
      <div>
        <div style={{ width: 32, height: 2, background: '#c7ab54', marginBottom: 12 }} />
        <h2
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: '#1a1714',
            letterSpacing: '-0.01em',
            margin: '0 0 8px',
          }}
        >
          {t.heading}
        </h2>
        <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}>
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
          href="/products"
          sx={{
            borderColor: '#c7ab54',
            color: '#c7ab54',
            px: 3,
            py: 1,
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
            borderRadius: '3px',
            '&:hover': { borderColor: '#a08c3c', color: '#a08c3c', backgroundColor: 'transparent' },
          }}
        >
          {t.cta}
        </Button>
      </div>
    </div>
  )
}
