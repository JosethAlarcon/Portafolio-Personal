import { motion, useReducedMotion } from 'framer-motion';
import { Cog, Database, Globe2, Layers2, Rocket, Wrench } from 'lucide-react';
import { services } from '../data/services';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';

const icons = [Globe2, Layers2, Cog, Database, Rocket, Wrench];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="servicios" className="section-shell" {...getRevealProps(reduceMotion)}>
      <div className="glass-card overflow-hidden p-8 transition duration-300 hover:border-brand-sky/25 hover:shadow-glow sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...getStaggerProps(reduceMotion, 0.05, 0.08)}>
            <span className="chip">Servicios</span>
            <motion.h2 variants={fadeItem} className="section-title mt-6">
              Tambien puedo ayudarte a crear soluciones digitales.
            </motion.h2>
            <motion.p variants={fadeItem} className="section-copy">
              Si tienes una idea, un proceso que quieres digitalizar o un proyecto que necesita mejorar, puedo apoyarte con una solucion moderna, bien estructurada y lista para crecer.
            </motion.p>
            <motion.div variants={fadeItem} className="mt-8 rounded-3xl border border-brand-orange/20 bg-brand-orange/10 p-6">
              <p className="text-lg font-medium text-brand-white">
                Tienes una idea o necesitas un sistema para tu negocio?
              </p>
<motion.a
  href="#contacto"
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
  className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeStrong px-6 py-3 font-semibold text-white shadow-orange transition duration-300 hover:shadow-[0_0_35px_rgba(252,125,64,0.55)]"
>
  <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
    <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
  </span>

  <span className="relative z-10">
    Hablemos de tu proyecto
  </span>
</motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-5 md:grid-cols-2" {...getStaggerProps(reduceMotion, 0.1, 0.07)}>
            {services.map((service, index) => {
              const Icon = icons[index];

              return (
                <motion.article
                  key={service.title}
                  variants={fadeItem}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-sky/20 to-brand-orange/20 text-brand-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{service.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
