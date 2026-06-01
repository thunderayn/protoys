import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LanguageIcon from '@mui/icons-material/Language'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useLanguage } from '../i18n/LanguageContext'
import { navbarText } from '../i18n/translations/navbar'

const navPaths = ['/', '/about', '/oem-odm', '/products', '/news', '/contact']

const pathAliases: Record<string, string[]> = {
  '/oem-odm': ['/custom'],
}

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = navbarText[lang]
  const { pathname } = useLocation()

  const isNavActive = (path: string, isActive: boolean) =>
    isActive || (pathAliases[path]?.includes(pathname) ?? false)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      }}
    >
      <style>{`@media (max-width: 767px) { .navbar-inner { padding: 0 20px !important; } }`}</style>
      <div
        className="navbar-inner"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <img src="/Logo_notext_transparent.png" alt="Pro Plush Toy" style={{ height: 44, width: 'auto', display: 'block' }} />
        </NavLink>

        {/* Desktop nav links */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 28 }}>
          {navPaths.map((path, i) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link${isNavActive(path, isActive) ? ' active' : ''}`}
              style={({ isActive }) => ({
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                color: isNavActive(path, isActive) ? '#c7ab54' : '#2e2b27',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              })}
            >
              {t.links[i]}
            </NavLink>
          ))}
        </div>

        {/* Language switcher + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

          {/* Desktop language button */}
          <button
            className="hidden lg:flex"
            onClick={(e) => setLangAnchor(e.currentTarget)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              color: '#555',
              padding: '4px 6px',
              borderRadius: 4,
            }}
          >
            <LanguageIcon sx={{ fontSize: 15 }} />
            <span>{t.langLabel}</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
          </button>

          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {t.langOptions.map((opt) => (
              <MenuItem
                key={opt.value}
                selected={lang === opt.value}
                onClick={() => { setLang(opt.value); setLangAnchor(null) }}
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  '&.Mui-selected': { color: '#c7ab54' },
                }}
              >
                {opt.label}
              </MenuItem>
            ))}
          </Menu>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 256, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <img src="/Logo_notext_transparent.png" alt="Pro Plush Toy" style={{ height: 40, width: 'auto', display: 'block' }} />
            <IconButton size="small" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {navPaths.map((path, i) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setDrawerOpen(false)}
                style={({ isActive }) => ({
                  padding: '13px 0',
                  borderBottom: '1px solid #f0f0f0',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: isNavActive(path, isActive) ? '#c7ab54' : '#2e2b27',
                })}
              >
                {t.links[i]}
              </NavLink>
            ))}
          </div>

          {/* Mobile language switcher */}
          <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
            {t.langOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setLang(opt.value)}
                style={{
                  flex: 1,
                  padding: '8px',
                  border: `1px solid ${lang === opt.value ? '#c7ab54' : '#ddd'}`,
                  borderRadius: 4,
                  background: lang === opt.value ? '#c7ab54' : 'transparent',
                  color: lang === opt.value ? '#fff' : '#555',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </Drawer>
    </nav>
  )
}
