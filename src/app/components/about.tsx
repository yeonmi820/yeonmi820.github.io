import { motion } from "motion/react";
import { Code2, Palette, Trophy, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      icon: Palette,
      title: t.about.skills.design.title,
      description: t.about.skills.design.description
    },
    {
      icon: Code2,
      title: t.about.skills.development.title,
      description: t.about.skills.development.description
    },
    {
      icon: Trophy,
      title: t.about.skills.leadership.title,
      description: t.about.skills.leadership.description
    },
    {
      icon: Users,
      title: t.about.skills.collaboration.title,
      description: t.about.skills.collaboration.description
    }
  ];

  return (
    <section id="about" className="relative px-6 py-24">
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
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <div className="space-y-6 text-foreground/80" style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.7' }}>
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <skill.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                {skill.title}
              </h3>

              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: '1.6'
                }}
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
