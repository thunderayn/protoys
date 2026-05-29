import { useState, useMemo } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SearchIcon from '@mui/icons-material/Search'
import { useLanguage } from '../i18n/LanguageContext'
import { newsPageText } from '../i18n/translations/news'
import { MOCK_ARTICLES, ARTICLES_PER_PAGE, type Article } from '../data/mockNews'

export default function NewsListSection() {
  const { lang } = useLanguage()
  const t = newsPageText[lang].list

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return MOCK_ARTICLES
    return MOCK_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.titleCn.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.excerptCn.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.categoryCn.toLowerCase().includes(q),
    )
  }, [search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * ARTICLES_PER_PAGE
  const pageArticles = filtered.slice(start, start + ARTICLES_PER_PAGE)

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  return (
    <section style={{ background: '#fff', padding: '64px 0 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div>
            <div style={{ width: 28, height: 2, background: '#c7ab54', marginBottom: 10 }} />
            <h2
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#1a1714',
                letterSpacing: '0.1em',
                margin: 0,
              }}
            >
              {t.heading}
            </h2>
          </div>

          <span style={{ fontSize: 14, color: '#999' }}>
            {filtered.length > 0
              ? t.showing(start + 1, Math.min(start + ARTICLES_PER_PAGE, filtered.length), filtered.length)
              : ''}
          </span>

          {/* Search */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              style={{
                width: 220,
                padding: '9px 36px 9px 14px',
                border: '1px solid #e0e0e0',
                borderRadius: 3,
                fontSize: 12,
                color: '#2e2b27',
                outline: 'none',
                background: '#fafafa',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#c7ab54' }}
              onBlur={(e) => { e.target.style.borderColor = '#e0e0e0' }}
            />
            <SearchIcon
              sx={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 16,
                color: '#bbb',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Article list */}
        {pageArticles.length === 0 ? (
          <div style={{ padding: '60px 0', textAlign: 'center', color: '#aaa', fontSize: 14 }}>
            {t.noResults}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pageArticles.map((article, i) => (
              <ArticleCard
                key={article._id}
                article={article}
                byLabel={t.by}
                readMoreLabel={t.readMore}
                isLast={i === pageArticles.length - 1}
                lang={lang}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            current={safePage}
            total={totalPages}
            onChange={setPage}
            prevLabel={t.prev}
            nextLabel={t.next}
          />
        )}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Article card
// ---------------------------------------------------------------------------
function ArticleCard({
  article,
  byLabel,
  readMoreLabel,
  isLast,
  lang,
}: {
  article: Article
  byLabel: string
  readMoreLabel: string
  isLast: boolean
  lang: 'en' | 'cn'
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        padding: '28px 0',
        borderBottom: isLast ? 'none' : '1px solid #f0f0f0',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 260,
          height: 190,
          flexShrink: 0,
          borderRadius: 3,
          overflow: 'hidden',
          background: '#f5f3f0',
        }}
        className="hidden sm:block"
      >
        <img
          src={article.mainImage}
          alt={article.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.35s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: '#c7ab54',
            letterSpacing: '0.12em',
            marginBottom: 8,
            display: 'block',
          }}
        >
          {lang === 'cn' ? article.categoryCn : article.category}
        </span>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: hovered ? '#c7ab54' : '#1a1714',
            lineHeight: 1.25,
            margin: '0 0 10px',
            transition: 'color 0.2s',
          }}
        >
          {lang === 'cn' ? article.titleCn : article.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: '#777',
            lineHeight: 1.65,
            margin: '0 0 16px',
          }}
        >
          {lang === 'cn' ? article.excerptCn : article.excerpt}
        </p>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: '#aaa' }}>
            {lang === 'cn' ? article.displayDateCn : article.displayDate}
            <span style={{ margin: '0 8px', color: '#ddd' }}>|</span>
            {byLabel} {article.author}
          </span>

          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontSize: 11,
              fontWeight: 700,
              color: '#c7ab54',
              letterSpacing: '0.07em',
            }}
          >
            {readMoreLabel}
            <ArrowForwardIcon sx={{ fontSize: 14 }} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------
function Pagination({
  current,
  total,
  onChange,
  prevLabel,
  nextLabel,
}: {
  current: number
  total: number
  onChange: (p: number) => void
  prevLabel: string
  nextLabel: string
}) {
  const pages = buildPageItems(current, total)

  const btnBase: React.CSSProperties = {
    minWidth: 36,
    height: 36,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: 3,
    background: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    color: '#444',
    padding: '0 10px',
    transition: 'all 0.15s ease',
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 48,
        flexWrap: 'wrap',
      }}
    >
      {/* Prev */}
      <button
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        style={{
          ...btnBase,
          color: current === 1 ? '#ccc' : '#444',
          cursor: current === 1 ? 'default' : 'pointer',
        }}
      >
        {prevLabel}
      </button>

      {pages.map((item, i) =>
        item === '...' ? (
          <span key={`ellipsis-${i}`} style={{ padding: '0 4px', color: '#aaa', fontSize: 14 }}>
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item as number)}
            style={{
              ...btnBase,
              background: item === current ? '#c7ab54' : '#fff',
              borderColor: item === current ? '#c7ab54' : '#e0e0e0',
              color: item === current ? '#fff' : '#444',
            }}
          >
            {item}
          </button>
        ),
      )}

      {/* Next */}
      <button
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        style={{
          ...btnBase,
          color: current === total ? '#ccc' : '#444',
          cursor: current === total ? 'default' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {nextLabel}
        <ArrowForwardIcon sx={{ fontSize: 14 }} />
      </button>
    </div>
  )
}

function buildPageItems(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | '...')[] = [1]
  if (current > 3) pages.push('...')
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p)
  }
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
}
