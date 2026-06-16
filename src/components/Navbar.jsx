import { Github, Linkedin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JosethAlarcon', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseth-alarcon/', icon: Linkedin },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
      }
      className="sticky top-4 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="glass-card group relative flex items-center justify-between overflow-hidden px-5 py-4 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-md transition-all duration-1000 group-hover:left-[120%]" />
        </div>

        <div className="pointer-events-none absolute left-4 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-brand-sky/10 blur-2xl" />

        <motion.a
          href="#inicio"
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="relative z-10 flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-sky font-bold text-brand-dark shadow-orange">
            <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="relative z-10">JA</span>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-white">
              Joseth Alarcón
            </p>
            <p className="text-xs text-brand-slate">
              Full Stack en formación
            </p>
          </div>
        </motion.a>

        <div className="relative z-10 hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 0.45,
                      delay: 0.12 + index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="group/link relative rounded-full px-3 py-2 text-sm font-medium text-brand-slate transition duration-300 hover:text-brand-white"
            >
              <span className="relative z-10">{item.label}</span>

              <span className="absolute inset-x-2 bottom-1 h-px scale-x-0 rounded-full bg-gradient-to-r from-brand-orange to-brand-sky transition duration-300 group-hover/link:scale-x-100" />

              <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition duration-300 group-hover/link:opacity-100" />
            </motion.a>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          {socialLinks.map(({ label, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.95 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 0.45,
                      delay: 0.32 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, scale: 1.06 }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              className="group/social relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-brand-slate shadow-sm backdrop-blur transition duration-300 hover:border-brand-sky/50 hover:bg-brand-sky/10 hover:text-brand-white hover:shadow-glow"
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/social:opacity-100">
                <span className="absolute -left-8 top-0 h-full w-8 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover/social:left-[120%]" />
              </span>

              <Icon size={18} className="relative z-10 transition duration-300 group-hover/social:scale-110" />
            </motion.a>
          ))}
        </div>

        <motion.button
          type="button"
          whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:shadow-orange lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Alternar menú"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'menu'}
              initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
            }
            className="glass-card relative mt-3 overflow-hidden px-5 py-5 lg:hidden"
          >
            <div className="pointer-events-none absolute right-4 top-4 h-32 w-32 rounded-full bg-brand-sky/10 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 left-4 h-32 w-32 rounded-full bg-brand-orange/10 blur-2xl" />

            <div className="relative z-10 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 0.28,
                          delay: index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  className="group/mobile relative block overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-brand-slate transition duration-300 hover:border-brand-sky/20 hover:bg-brand-sky/10 hover:text-brand-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-brand-orange opacity-0 transition duration-300 group-hover/mobile:opacity-100" />
                </motion.a>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex gap-3 border-t border-white/10 pt-5">
              {socialLinks.map(({ label, href, icon: Icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.95 }}
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 0.28,
                          delay: 0.18 + index * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, scale: 1.06 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-slate transition duration-300 hover:border-brand-sky/50 hover:bg-brand-sky/10 hover:text-brand-white hover:shadow-glow"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;