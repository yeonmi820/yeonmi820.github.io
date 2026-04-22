import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Languages } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--foreground)'
            }}
          >
            {t.nav.portfolio}
          </Link>

          <div className="flex gap-8 items-center">
            {isHomePage ? (
              <>
                {[
                  { name: t.nav.work, id: 'work' },
                  { name: t.nav.about, id: 'about' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 400
                    }}
                  >
                    {item.name}
                  </button>
                ))}
                <Link
                  to="/resume"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 400
                  }}
                >
                  {t.nav.resume}
                </Link>
              </>
            ) : (
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 400
                }}
              >
                {t.nav.home}
              </Link>
            )}

            <button
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 ml-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 400
              }}
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'CN' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}