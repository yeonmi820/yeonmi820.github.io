import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
}

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="mb-6 overflow-hidden rounded">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={game.image}
            alt={game.title}
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--foreground)'
            }}
          >
            {game.title}
          </h3>
          <span
            className="text-muted-foreground shrink-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem'
            }}
          >
            {game.year}
          </span>
        </div>

        <p
          className="text-muted-foreground"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}
        >
          {game.description}
        </p>

        <div className="pt-2">
          <span
            className="text-foreground/60 block mb-1"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem'
            }}
          >
            {game.role}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {game.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-muted text-foreground/70 rounded-full"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
