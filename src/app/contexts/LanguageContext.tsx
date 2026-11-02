import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

export function localizedPath(path: string, language: Language) {
  const englishPath = path.replace(/^\/cn(?=\/|$)/, '') || '/';
  return language === 'zh'
    ? `/cn${englishPath === '/' ? '' : englishPath}`
    : englishPath;
}

function languageFromPath(pathname: string): Language {
  return pathname === '/cn' || pathname.startsWith('/cn/')
    ? 'zh'
    : 'en';
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  syncLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    languageFromPath(window.location.pathname)
  );

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, syncLanguage: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
