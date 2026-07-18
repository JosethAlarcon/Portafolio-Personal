import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircleMore } from 'lucide-react';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';

const contactItems = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joseth-alarcon/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JosethAlarcon',
    icon: Github,
  },
  {
    label: 'Correo',
    href: 'mailto:joseth.30.17@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/56934075897',
    icon: MessageCircleMore,
  },
];

const Contact = () => {
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Formulario preparado para integracion futura.');
  };

  return (
    <motion.section id="contacto" className="section-shell" {...getRevealProps(reduceMotion)}>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...getStaggerProps(reduceMotion, 0.05, 0.08)}>
          <span className="chip">Contacto</span>
          <motion.h2 variants={fadeItem} className="section-title mt-6">
            Conversemos sobre oportunidades, colaboracion o nuevas ideas.
          </motion.h2>
          <motion.p variants={fadeItem} className="section-copy">
            Estoy abierto a oportunidades laborales, practicas profesionales, colaboraciones y proyectos freelance. Si buscas a alguien comprometido, con ganas de aprender y capaz de construir soluciones reales, conversemos.
          </motion.p>

          <motion.div className="mt-10 grid gap-4 sm:grid-cols-2" {...getStaggerProps(reduceMotion, 0.08, 0.06)}>
            {contactItems.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                variants={fadeItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card flex items-center gap-4 p-5 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-sky/20 to-brand-orange/20 text-brand-white">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-base font-medium text-brand-white">{label}</p>
                  <p className="text-sm text-brand-slate">
                    {label === 'Correo' ? 'joseth.30.17@gmail.com' : 'Abrir enlace'}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          {...getRevealProps(reduceMotion, 0.12)}
          className="glass-card p-8 transition duration-300 hover:border-brand-orange/25 hover:shadow-orange"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brand-sky">Formulario de contacto</p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-brand-slate">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-white outline-none transition focus:border-brand-sky/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-brand-slate">
                Correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-white outline-none transition focus:border-brand-sky/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-brand-slate">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Cuentame sobre tu idea, proyecto u oportunidad."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-white outline-none transition focus:border-brand-sky/50"
              />
            </div>
<motion.button
  type="submit"
  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={
    reduceMotion
      ? undefined
      : {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }
  }
  whileHover={
    reduceMotion
      ? undefined
      : {
          y: -5,
          scale: 1.04,
          transition: { duration: 0.22 },
        }
  }
  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeStrong px-6 py-3 font-semibold text-white shadow-orange transition duration-300 hover:shadow-[0_0_35px_rgba(252,125,64,0.55)] sm:w-auto"
>
  <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
    <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
  </span>

  <span className="relative z-10">
    Enviar mensaje
  </span>
</motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
