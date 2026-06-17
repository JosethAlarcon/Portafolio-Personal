import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers3 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const reduceMotion = useReducedMotion();
  const visibleStack = project.stack.slice(0, 4);
  const visibleFeatures = project.features.slice(0, 2);

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="glass-card group flex h-full flex-col overflow-hidden p-4 transition duration-300 hover:border-brand-orange/35 hover:shadow-orange sm:p-5"
    >
      <div
        className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-5`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
        <div className="relative px-1 py-1">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/15 bg-slate-950/30 px-3 py-1 text-[11px] text-brand-white">
              {project.status}
            </span>
            <Layers3 className="h-4 w-4 text-brand-white/80" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-3 font-mono text-xs text-brand-slate">
            <p className="text-brand-sky">// preview</p>
            <p className="mt-2 text-brand-white">{project.codeSnippet}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold text-brand-white">{project.title}</h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-brand-slate">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {visibleStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-brand-slate"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        {visibleFeatures.map((feature) => (
          <div
            key={feature}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-brand-white/90"
          >
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <motion.a
            href={project.liveUrl}
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
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeStrong px-4 py-2.5 text-xs font-semibold text-white shadow-orange transition duration-300 hover:shadow-[0_0_35px_rgba(252,125,64,0.55)]"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </span>
            <span className="relative z-10 flex items-center">
              Ver proyecto
              <ArrowUpRight className="ml-2 h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>
          <motion.a
            href={project.codeUrl}
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
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-sky/25 bg-brand-sky/10 px-4 py-2.5 text-xs font-semibold text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-sky/50 hover:bg-brand-sky/15 hover:shadow-glow"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </span>
            <span className="relative z-10 flex items-center">
              <Code2 className="mr-2 h-3.5 w-3.5 text-brand-sky transition duration-300 group-hover:scale-110" />
              Codigo
            </span>
          </motion.a>
          <motion.a
            href={project.detailUrl}
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
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:shadow-orange"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </span>
            <span className="relative z-10 flex items-center">Detalles</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
