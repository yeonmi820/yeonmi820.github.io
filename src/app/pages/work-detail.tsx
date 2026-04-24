import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

// 将文本中的URL转换为可点击的链接
function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline hover:text-foreground/80 transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {part}
        </a>
      );
    }
    return part.split('\n').map((line, i, arr) => (
      <span key={`${index}-${i}`}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  });
}

// 静态数据（图片、年份等不需要翻译的部分）
const gamesStaticData = [
  {
    id: 1,
    title: "No Comment",
    slug: "no-comment",
    image: "https://images.unsplash.com/photo-1767838533907-294330d1228b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjByYWNpbmclMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1767838533907-294330d1228b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjByYWNpbmclMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1614854262318-831574f15f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 2,
    title: "Realms of Seasons",
    slug: "realms-of-seasons",
    image: "https://images.unsplash.com/photo-1597647186026-dfb1baab30e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGxhbmRzY2FwZSUyMG1hZ2ljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025",
    gallery: [
      "https://images.unsplash.com/photo-1597647186026-dfb1baab30e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGxhbmRzY2FwZSUyMG1hZ2ljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 3,
    title: "AVEngine",
    slug: "avengine",
    image: "https://images.unsplash.com/photo-1700774606420-a47fe0273229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMHNob290ZXIlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwY29kZXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1700774606420-a47fe0273229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMHNob290ZXIlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwY29kZXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 4,
    title: "MPC",
    slug: "mpc",
    image: "https://images.unsplash.com/photo-1653850405111-11329574789a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbHRoJTIwYWN0aW9uJTIwZHlzdG9waWFufGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkeXN0b3BpYW4lMjBmdXR1cmV8ZW58MXx8fHwxNzc2MTA4NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1653850405111-11329574789a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbHRoJTIwYWN0aW9uJTIwZHlzdG9waWFufGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkeXN0b3BpYW4lMjBmdXR1cmV8ZW58MXx8fHwxNzc2MTA4NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 5,
    title: "PHOBOS",
    slug: "phobos",
    image: "https://images.unsplash.com/photo-1775549199902-d738320d9256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGV4cGxvcmF0aW9uJTIwbmVidWxhfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025",
    gallery: [
      "https://images.unsplash.com/photo-1775549199902-d738320d9256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGV4cGxvcmF0aW9uJTIwbmVidWxhfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 6,
    title: "Case Study",
    slug: "case-study",
    image: "https://images.unsplash.com/photo-1773432661163-351c473345e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwZGFyayUyMGZhbnRhc3klMjBnYW1lfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZmFudGFzeXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025",
    gallery: [
      "https://images.unsplash.com/photo-1773432661163-351c473345e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwZGFyayUyMGZhbnRhc3klMjBnYW1lfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZmFudGFzeXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  }
];

export function WorkDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  const gameStatic = gamesStaticData.find(g => g.slug === slug);
  const gameIndex = gamesStaticData.findIndex(g => g.slug === slug);

  if (!gameStatic || gameIndex === -1) {
    return (
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <Navigation />
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}>
              {language === 'en' ? 'Work not found' : '作品未找到'}
            </h1>
            <Link to="/" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
              {language === 'en' ? 'Back to Home' : '返回首页'}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const gameTranslated = t.work.games[gameIndex];
  const game = {
    ...gameStatic,
    ...gameTranslated
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back to Work' : '返回作品'}
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src={game.image}
              alt={game.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6">
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                {game.title}
              </h1>
              <span
                className="text-muted-foreground"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}
              >
                {game.year}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-foreground/70 rounded-full"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="text-muted-foreground mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: '1.7'
              }}
            >
              {game.description}
            </p>

            <p
              className="text-foreground/60"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              <strong>{language === 'en' ? 'Role:' : '角色：'}</strong> {game.role}
            </p>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                {language === 'en' ? 'Overview' : '概述'}
              </h2>
              <div
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}
              >
                {renderTextWithLinks(game.overview)}
              </div>

              {/* Full Paper Button - Only for Case Study */}
              {gameStatic.slug === 'case-study' && (
                <Link
                  to="/case-study/full-paper"
                  className="inline-block mt-6 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500
                  }}
                >
                  {language === 'en' ? 'Read Full Paper →' : '完整文章 →'}
                </Link>
              )}
            </div>

            <div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                {language === 'en' ? 'Challenges' : '挑战'}
              </h2>
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}
              >
                {game.challenges}
              </p>
            </div>

            <div className="md:col-span-2">
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                {language === 'en' ? 'Solution' : '解决方案'}
              </h2>
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}
              >
                {game.solution}
              </p>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--foreground)'
              }}
            >
              {language === 'en' ? 'Gallery' : '画廊'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {game.gallery.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={img}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p
              className="text-muted-foreground"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
            >
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a
                href="https://yeonmi820.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                Itch.io
              </a>
              <a
                href="https://github.com/yeonmi820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yeonmi-lkin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://discord.com/users/cym1148"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
