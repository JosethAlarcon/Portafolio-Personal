import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers3 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="glass-card group overflow-hidden p-6 transition duration-300 hover:border-brand-orange/35 hover:shadow-orange"
    >
      <div className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/15 bg-slate-950/30 px-3 py-1 text-xs text-brand-white">
              {project.status}
            </span>
            <Layers3 className="h-5 w-5 text-brand-white/80" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 font-mono text-sm text-brand-slate">
            <p className="text-brand-sky">// preview</p>
            <p className="mt-2 text-brand-white">{project.codeSnippet}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-brand-white">{project.title}</h3>
        <p className="mt-4 text-base leading-7 text-brand-slate">{project.description}</p>
        <p className="mt-4 text-sm leading-7 text-brand-slate/90">{project.longDescription}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-brand-slate"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {project.features.map((feature) => (
          <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-white/90">
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={project.liveUrl} className="button-primary">
          Ver proyecto
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
        <a href={project.codeUrl} className="button-secondary">
          <Code2 className="mr-2 h-4 w-4" />
          Ver codigo
        </a>
        <a href={project.detailUrl} className="button-ghost">
          Ver detalles
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
