import { motion } from "motion/react";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 500,
              color: 'var(--foreground)'
            }}
          >
            Contact
          </h2>
          <p
            className="text-muted-foreground max-w-xl"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              lineHeight: '1.7'
            }}
          >
            Feel free to reach out through any of these channels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl"
        >
          {[
            {
              icon: Mail,
              title: "Email",
              value: "your.email@example.com",
              link: "mailto:your.email@example.com"
            },
            {
              icon: ExternalLink,
              title: "LinkedIn",
              value: "linkedin.com/in/yourprofile",
              link: "https://linkedin.com/in/yourprofile"
            },
            {
              icon: ExternalLink,
              title: "GitHub",
              value: "github.com/yourusername",
              link: "https://github.com/yourusername"
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="flex flex-col gap-3 p-6 bg-card border border-border rounded hover:border-foreground/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <contact.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
              </div>
              <div>
                <div
                  className="text-foreground/60 mb-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem'
                  }}
                >
                  {contact.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--foreground)'
                  }}
                >
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}