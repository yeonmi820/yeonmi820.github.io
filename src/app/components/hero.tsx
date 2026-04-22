import { motion } from "motion/react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1
            style={{
              fontFamily: language === 'en' ? 'var(--font-display)' : "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: language === 'en' ? 500 : 600,
              lineHeight: '1.1',
              letterSpacing: language === 'en' ? '-0.02em' : '0',
              color: 'var(--foreground)'
            }}
          >
            {t.hero.greeting}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-2"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            fontWeight: 500
          }}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            lineHeight: '1.7'
          }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <button
            onClick={scrollToWork}
            className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors inline-block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {t.hero.viewWork}
          </button>

          <Link
            to="/resume"
            className="px-8 py-3 border border-border text-foreground rounded hover:bg-muted transition-colors inline-block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {t.hero.resume}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}