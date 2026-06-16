import { Github, Linkedin, Code2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Footer = () => {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/JosethAlarcon',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joseth-alarcon/',
      icon: Linkedin,
    },
  ];

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className="relative overflow-hidden border-t border-white/10 py-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/60 to-transparent" />
      <div className="pointer-events-none absolute left-10 top-4 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-0 h-40 w-40 rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="glass-card group relative overflow-hidden px-5 py-5 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-md transition-all duration-1000 group-hover:left-[120%]" />
        </div>

        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 0.5,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="flex items-center gap-4"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      boxShadow: [
                        '0 0 18px rgba(252,125,64,0.28)',
                        '0 0 28px rgba(56,189,248,0.35)',
                        '0 0 18px rgba(252,125,64,0.28)',
                      ],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-sky text-brand-dark"
            >
              <Code2 size={22} />
            </motion.div>

            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-white">
                Desarrollado por Joseth Alarcón
                <Sparkles className="h-4 w-4 text-brand-orange" />
              </p>

              <p className="mt-1 text-sm text-brand-slate">
                React + Vite · Diseño, código y despliegue
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 0.5,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ label, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.95 }}
                whileInView={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 0.4,
                        delay: 0.24 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.06,
                        transition: { duration: 0.22 },
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="group/social relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-brand-slate shadow-sm backdrop-blur transition duration-300 hover:border-brand-sky/50 hover:bg-brand-sky/10 hover:text-brand-white hover:shadow-glow"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/social:opacity-100">
                  <span className="absolute -left-8 top-0 h-full w-8 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover/social:left-[120%]" />
                </span>

                <Icon
                  size={18}
                  className="relative z-10 transition duration-300 group-hover/social:scale-110"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;