import { motion } from "motion/react";
import { GameCard } from "../components/game-card";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";
import { About } from "../components/about";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const gamesStaticData = [
  {
    id: 1,
    title: "No Comment",
    slug: "no-comment",
    image: "/image/Nocomment1.png",
    hoverImage: "/image/Nocomment2.png",
    year: "2026"
  },
  {
    id: 2,
    title: "Realms of Seasons",
    slug: "realms-of-seasons",
    image: "/image/seasons1.png",
    hoverImage: "/image/seasons2.JPG",
    year: "2025"
  },
  {
    id: 3,
    title: "AVEngine",
    slug: "avengine",
    image: "/image/avegine1.png",
    hoverImage: "/image/avegine2.jpg",
    year: "2026"
  },
  {
    id: 4,
    title: "MPC",
    slug: "mpc",
    image: "/image/MPC1.png",
    hoverImage: "/image/MPC3.png",
    year: "2026"
  },
  {
    id: 5,
    title: "PHOBOS",
    slug: "phobos",
    image: "/image/Phobos1.png",
    hoverImage: "/image/Phobos2.png",
    year: "2025"
  },
  {
    id: 6,
    title: "Case Study",
    slug: "case-study",
    image: "/image/ITT_Screen1.jpg",
    hoverImage: "/image/ITT_Screen2.jpg",
    year: "2025"
  }
];

export function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const games = gamesStaticData.map((gameStatic, index) => ({
    ...gameStatic,
    description: t.work.games[index].description,
    tags: t.work.games[index].tags,
    role: t.work.games[index].role
  }));

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <main>
        <Hero />

        {/* Games Showcase */}
        <section id="work" className="relative px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                }}
              >
                {t.work.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {games.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
          </div>
        </section>

        <About />
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
