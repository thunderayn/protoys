import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'cn'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('protoys-lang') as Lang
    return saved === 'cn' ? 'cn' : 'en'
  })

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('protoys-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext)
}
