import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, Database, Layout, Rocket, Server } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';
import SkillBadge from './SkillBadge';

const icons = {
  Layout,
  Server,
  Database,
  Rocket,
  BriefcaseBusiness,
};

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="habilidades" className="section-shell" {...getRevealProps(reduceMotion)}>
      <span className="chip">Habilidades tecnicas</span>
      <h2 className="section-title mt-6">Tecnologias y capacidades con las que construyo proyectos completos.</h2>
      <p className="section-copy">
        Trabajo con una base tecnica amplia que me permite participar en frontend, backend, modelado de datos, despliegue y documentacion de soluciones.
      </p>

      <motion.div className="mt-12 grid gap-6 xl:grid-cols-2" {...getStaggerProps(reduceMotion, 0.05, 0.08)}>
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];

          return (
            <motion.article
              key={group.title}
              variants={fadeItem}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="glass-card group p-7 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-sky/20 to-brand-orange/20 text-brand-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-white">{group.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-slate">
                  {group.items.length} skills
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
