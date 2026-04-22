import { motion } from "motion/react";
import { Code2, Palette, Trophy, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      icon: Code2,
      title: t.about.skills.development.title,
      description: t.about.skills.development.description
    },
    {
      icon: Palette,
      title: t.about.skills.design.title,
      description: t.about.skills.design.description
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

  const stats = [
    { value: "8+", label: t.about.stats.years },
    { value: "15+", label: t.about.stats.games },
    { value: "5M+", label: t.about.stats.players },
    { value: "12", label: t.about.stats.awards }
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

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-foreground/80" style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.7' }}>
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                    lineHeight: '1'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-muted-foreground mt-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

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
