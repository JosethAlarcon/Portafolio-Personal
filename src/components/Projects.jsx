import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="proyectos" className="section-shell" {...getRevealProps(reduceMotion)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div {...getRevealProps(reduceMotion, 0.04)}>
          <span className="chip">Proyectos destacados</span>
          <h2 className="section-title mt-6">
            Evidencia real de como convierto ideas en productos funcionales.
          </h2>
          <p className="section-copy">
            Estos proyectos muestran mi interes por crear soluciones completas, con foco en experiencia de usuario, arquitectura, logica de negocio y despliegue.
          </p>
        </motion.div>
        <motion.div
          {...getRevealProps(reduceMotion, 0.12)}
          className="glass-card max-w-md p-5 transition duration-300 hover:border-brand-orange/25 hover:shadow-orange"
        >
          <p className="text-sm leading-7 text-brand-slate">
            Mi objetivo es seguir ampliando este portafolio con proyectos que combinen valor tecnico, diseno moderno y necesidades reales de negocio.
          </p>
        </motion.div>
      </div>

      <motion.div className="mt-12 grid gap-8" {...getStaggerProps(reduceMotion, 0.08, 0.08)}>
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeItem}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
