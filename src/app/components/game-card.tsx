import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";

interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  hoverImage: string;
  tags: string[];
  year: string;
  role: string;
}

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/work/${game.slug}`} className="block">
        <div className="mb-6 overflow-hidden rounded relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <ImageWithFallback
              src={isHovered ? game.hoverImage : game.image}
              alt={game.title}
              className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
            />
          </motion.div>
        </div>
      </Link>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <Link to={`/work/${game.slug}`}>
            <h3
              className="hover:text-foreground/70 transition-colors cursor-pointer"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--foreground)'
              }}
            >
              {game.title}
            </h3>
          </Link>
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
