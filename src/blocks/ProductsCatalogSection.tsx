import { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useLanguage } from '../i18n/LanguageContext'
import { productsPageText } from '../i18n/translations/products'
import { allProducts as productsData } from '../data'

const PAGE_SIZE = 6

export default function ProductsCatalogSection() {
  const { lang } = useLanguage()
  const t = productsPageText[lang].catalog
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = productsData
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .map((p) => ({
      id: p.id,
      name: lang === 'cn' ? p.nameCn : p.name,
      desc: lang === 'cn' ? p.descCn : p.desc,
      image: p.image,
    }))

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key)
    setCurrentPage(1)
  }

  return (
    <section style={{ background: '#fff', padding: '60px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Top row: description + contact button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 36,
          }}
        >
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
            {t.description}
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="/contact"
            sx={{
              backgroundColor: '#c7ab54',
              color: '#fff',
              px: 3,
              py: 1.1,
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              borderRadius: '3px',
              boxShadow: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
            }}
          >
            {t.contactUs}
          </Button>
        </div>

        {/* Main layout: sidebar + grid */}
        <div className="hidden md:flex" style={{ gap: 36, alignItems: 'flex-start' }}>

          {/* Sidebar */}
          <div style={{ width: 210, flexShrink: 0 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ width: 28, height: 2, background: '#c7ab54', marginBottom: 10 }} />
              <h2
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#1a1714',
                  letterSpacing: '0.1em',
                  margin: 0,
                }}
              >
                {t.categoryHeading}
              </h2>
            </div>

            <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {t.categories.map(({ key, label }) => {
                const isActive = activeCategory === key
                return (
                  <li key={key}>
                    <button
                      onClick={() => handleCategoryChange(key)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 12px',
                        background: isActive ? '#f5efe3' : 'transparent',
                        border: isActive ? '1px solid #e8d9bc' : '1px solid transparent',
                        borderRadius: 3,
                        cursor: 'pointer',
                        fontSize: 14,
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? '#c7ab54' : '#444',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = '#c7ab54'
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = '#444'
                      }}
                    >
                      {label}
                      {isActive && <ChevronRightIcon sx={{ fontSize: 16, color: '#c7ab54' }} />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Product grid + pagination */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
            >
              {paginated.length > 0 ? (
                paginated.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    desc={product.desc}
                    image={product.image}
                  />
                ))
              ) : (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    padding: '60px 0',
                    textAlign: 'center',
                    color: '#aaa',
                    fontSize: 14,
                  }}
                >
                  No products in this category yet.
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={setCurrentPage}
              />
            )}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          {/* Category pills */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              overflowX: 'auto',
              paddingBottom: 4,
              marginBottom: 24,
              scrollbarWidth: 'none',
            }}
          >
            {t.categories.map(({ key, label }) => {
              const isActive = activeCategory === key
              return (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 20,
                    border: `1px solid ${isActive ? '#c7ab54' : '#ddd'}`,
                    background: isActive ? '#c7ab54' : '#fff',
                    color: isActive ? '#fff' : '#555',
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 400,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Mobile product grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {paginated.length > 0 ? (
              paginated.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  desc={product.desc}
                  image={product.image}
                />
              ))
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  padding: '40px 0',
                  textAlign: 'center',
                  color: '#aaa',
                  fontSize: 14,
                }}
              >
                No products in this category yet.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function Pagination({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        marginTop: 40,
      }}
    >
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: 3,
          background: '#fff',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          color: currentPage === 1 ? '#ccc' : '#444',
          transition: 'all 0.15s ease',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 18 }} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          style={{
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: page === currentPage ? '1px solid #c7ab54' : '1px solid #e0e0e0',
            borderRadius: 3,
            background: page === currentPage ? '#c7ab54' : '#fff',
            color: page === currentPage ? '#fff' : '#444',
            fontSize: 13,
            fontWeight: page === currentPage ? 700 : 400,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: 3,
          background: '#fff',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          color: currentPage === totalPages ? '#ccc' : '#444',
          transition: 'all 0.15s ease',
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 18 }} />
      </button>
    </div>
  )
}

function ProductCard({
  name,
  desc,
  image,
}: {
  name: string
  desc: string
  image: string
}) {
  return (
    <div
      style={{
        border: '1px solid #efefef',
        borderRadius: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', background: '#f8f6f3' }}>
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
            transition: 'transform 0.35s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLImageElement).style.transform = 'scale(1.06)'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLImageElement).style.transform = 'scale(1)'
          }}
        />
      </div>

      <div style={{ padding: '18px 16px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#1a1714',
            letterSpacing: '0.08em',
            margin: '0 0 6px',
          }}
        >
          {name}
        </h3>
        <div style={{ width: 24, height: 2, background: '#c7ab54', marginBottom: 10 }} />
        <p
          style={{
            fontSize: 14,
            color: '#888',
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
