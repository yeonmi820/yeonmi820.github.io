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
    image: "https://images.unsplash.com/photo-1767838533907-294330d1228b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjByYWNpbmclMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026"
  },
  {
    id: 2,
    title: "Realms of Seasons",
    slug: "realms-of-seasons",
    image: "https://images.unsplash.com/photo-1597647186026-dfb1baab30e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGxhbmRzY2FwZSUyMG1hZ2ljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025"
  },
  {
    id: 3,
    title: "AVEngine",
    slug: "avengine",
    image: "https://images.unsplash.com/photo-1700774606420-a47fe0273229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMHNob290ZXIlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NjEwODY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwY29kZXxlbnwxfHx8fDE3NzYxMDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026"
  },
  {
    id: 4,
    title: "MPC",
    slug: "mpc",
    image: "https://images.unsplash.com/photo-1653850405111-11329574789a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbHRoJTIwYWN0aW9uJTIwZHlzdG9waWFufGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkeXN0b3BpYW4lMjBmdXR1cmV8ZW58MXx8fHwxNzc2MTA4NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2026"
  },
  {
    id: 5,
    title: "PHOBOS",
    slug: "phobos",
    image: "https://images.unsplash.com/photo-1775549199902-d738320d9256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGV4cGxvcmF0aW9uJTIwbmVidWxhfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025"
  },
  {
    id: 6,
    title: "Case Study",
    slug: "case-study",
    image: "https://images.unsplash.com/photo-1773432661163-351c473345e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwZGFyayUyMGZhbnRhc3klMjBnYW1lfGVufDF8fHx8MTc3NjEwODY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZmFudGFzeXxlbnwxfHx8fDE3NzYxMDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
                  fontWeight: 500,
                  color: 'var(--foreground)'
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
