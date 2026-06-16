import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, LayoutDashboard, Rocket, ScrollText, Workflow } from 'lucide-react';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';

const items = [
  {
    title: 'Ingenieria de Ejecucion mencion Desarrollo de Sistemas',
    description: 'Ultimo ano de formacion, consolidando bases tecnicas y vision practica de negocio.',
    icon: GraduationCap,
  },
  {
    title: 'Desarrollo de proyectos web con React, C#, APIs y bases de datos',
    description: 'Experiencia practica construyendo soluciones con frontend, backend y persistencia de datos.',
    icon: LayoutDashboard,
  },
  {
    title: 'Experiencia en despliegue de aplicaciones frontend y backend',
    description: 'Publicacion de proyectos y configuracion de entornos para dejar soluciones operativas.',
    icon: Rocket,
  },
  {
    title: 'Trabajo con metodologias agiles, UML y documentacion tecnica',
    description: 'Capacidad para analizar requerimientos, documentar y colaborar dentro de procesos ordenados.',
    icon: Workflow,
  },
  {
    title: 'Creacion de soluciones para negocios reales y proyectos universitarios',
    description: 'Enfoque orientado a resolver problemas concretos con buena base tecnica y diseno claro.',
    icon: ScrollText,
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="experiencia" className="section-shell" {...getRevealProps(reduceMotion)}>
      <span className="chip">Experiencia y formacion</span>
      <h2 className="section-title mt-6">Una trayectoria en crecimiento, con practica real y foco en seguir avanzando.</h2>
      <p className="section-copy">
        Mi perfil combina formacion academica, proyectos aplicados y el interes constante por mejorar tanto en tecnologia como en trabajo colaborativo.
      </p>

      <motion.div className="relative mt-12" {...getStaggerProps(reduceMotion, 0.06, 0.08)}>
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-sky via-white/20 to-transparent md:block" />
        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="glass-card relative p-6 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow md:ml-16"
              >
                <div className="absolute -left-14 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-sky/30 bg-brand-darkSoft text-brand-white md:flex">
                  <Icon size={18} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-orange">
                  Etapa 0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-brand-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-brand-slate">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
