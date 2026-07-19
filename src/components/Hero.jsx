import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Download,
  Mail,
  ServerCog,
  Sparkles,
} from 'lucide-react';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';

const techChips = ['React', 'C# APIs', 'PostgreSQL', 'TypeScript', 'Deploy', 'GitHub'];

const codeBlock = `const joseth = {
  role: "Full Stack Developer",
  stack: ["React", "C#", "PostgreSQL"],
  focus: "Real business solutions",
  status: "Available"
}`;

const architectureNodes = [
  { label: 'React / Vite', icon: Code2 },
  { label: 'API C# .NET', icon: ServerCog },
  { label: 'PostgreSQL', icon: Database },
  { label: 'Deploy', icon: Cloud },
];

const metricCards = [
  ['6+', 'proyectos reales'],
  ['Full Stack', 'frontend, backend y deploy'],
  ['Cloud', 'Netlify / Render'],
  ['Disponible', 'trabajo, práctica y freelance'],
];

const tokenizeLine = (line) => {
  if (line.startsWith('const ')) {
    return (
      <>
        <span className="text-fuchsia-300">const</span>
        <span className="text-brand-sky">{line.slice(5)}</span>
      </>
    );
  }

  if (line.includes(':')) {
    const [key, ...restParts] = line.split(':');
    const rest = restParts.join(':');

    return (
      <>
        <span className="text-brand-white">{key}</span>
        <span className="text-brand-slate">:</span>
        <span className="text-emerald-300">{rest}</span>
      </>
    );
  }

  if (line.trim() === '}') {
    return <span className="text-brand-white">{line}</span>;
  }

  return <span className="text-brand-white">{line}</span>;
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [typedCode, setTypedCode] = useState(reduceMotion ? codeBlock : '');
  const titleWords = ['Hola,', 'soy', 'Joseth', 'Alarcón'];

  useEffect(() => {
    if (reduceMotion) {
      setTypedCode(codeBlock);
      return undefined;
    }

    setTypedCode('');
    let currentIndex = 0;

    const interval = window.setInterval(() => {
      currentIndex += 1;
      setTypedCode(codeBlock.slice(0, currentIndex));

      if (currentIndex >= codeBlock.length) {
        window.clearInterval(interval);
      }
    }, 18);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const typedLines = useMemo(() => typedCode.split('\n'), [typedCode]);

  return (
    <motion.section
      id="inicio"
      className="section-shell overflow-hidden pt-12 sm:pt-16 lg:pt-20"
      {...getRevealProps(reduceMotion)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-12 -z-10 h-[32rem] bg-grid bg-[size:34px_34px] opacity-20" />
      <div className="pointer-events-none absolute left-[-6%] top-16 -z-10 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4%] top-10 -z-10 h-80 w-80 rounded-full bg-brand-sky/20 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-14">
        <motion.div
          {...getStaggerProps(reduceMotion, 0.08, 0.09)}
          className="relative z-10 flex flex-col justify-center"
        >
          <motion.div
            variants={fadeItem}
            className="chip mb-6 self-start border-brand-sky/20 bg-brand-sky/10 text-brand-white"
          >
            <Sparkles className="mr-2 h-4 w-4 text-brand-sky" />
            Portafolio Full Stack / Último año de Ingeniería
          </motion.div>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-brand-white sm:text-6xl xl:text-7xl">
              {titleWords.map((word, index) => (
                <motion.span
                  key={word}
                  variants={fadeItem}
                  transition={
                    reduceMotion
                      ? undefined
                      : { ...fadeItem.show.transition, delay: 0.08 * index }
                  }
                  className={`mr-3 inline-block ${
                    index >= 2
                      ? 'bg-gradient-to-r from-brand-orange via-orange-300 to-brand-orangeStrong bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeItem}
              className="mt-6 max-w-3xl text-xl font-medium leading-8 text-brand-white/90 sm:text-2xl"
            >
              Desarrollo aplicaciones web modernas, APIs escalables y soluciones digitales orientadas a resultados.
            </motion.p>

            <motion.p
              variants={fadeItem}
              className="mt-6 max-w-3xl text-base leading-8 text-brand-slate sm:text-lg"
            >
              Construyo proyectos reales con React, C#, PostgreSQL y despliegues en la nube, combinando diseño, lógica de negocio y experiencia de usuario.
            </motion.p>
          </div>

<motion.div
  variants={fadeItem}
  className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
>
  <motion.a
    href="#proyectos"
    initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
    transition={
      reduceMotion
        ? undefined
        : {
            duration: 0.45,
            delay: 0.42,
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
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeStrong px-6 py-3 font-semibold text-white shadow-orange transition duration-300 hover:shadow-[0_0_35px_rgba(252,125,64,0.55)]"
  >
    <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
      <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
    </span>

    <span className="relative z-10 flex items-center">
      Ver proyectos
      <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
    </span>
  </motion.a>

  <motion.a
    href="#contacto"
    initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
    transition={
      reduceMotion
        ? undefined
        : {
            duration: 0.45,
            delay: 0.5,
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
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-sky/25 bg-brand-sky/10 px-6 py-3 font-semibold text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-sky/50 hover:bg-brand-sky/15 hover:shadow-glow"
  >
    <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
      <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
    </span>

    <span className="relative z-10 flex items-center">
      <Mail className="mr-2 h-4 w-4 text-brand-sky transition duration-300 group-hover:scale-110" />
      Contactarme
    </span>
  </motion.a>

  <motion.a
    href="/cv-joseth-alarcon.pdf"
    download="CV-Joseth-Alarcon.pdf"
    initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
    transition={
      reduceMotion
        ? undefined
        : {
            duration: 0.45,
            delay: 0.58,
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
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:shadow-orange"
  >
    <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
      <span className="absolute -left-12 top-0 h-full w-12 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
    </span>

    <span className="relative z-10 flex items-center">
      <Download className="mr-2 h-4 w-4 text-brand-orange transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
      Descargar CV
    </span>
  </motion.a>
</motion.div>

                    <motion.div
            variants={fadeItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            {techChips.map((chip, index) => (
              <motion.span
                key={chip}
                variants={fadeItem}
                initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 0.45,
                        delay: 0.38 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.22 },
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-brand-white shadow-sm backdrop-blur transition duration-300 hover:border-brand-sky/40 hover:bg-brand-sky/10 hover:shadow-glow"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
                </span>

                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_14px_rgba(252,125,64,0.9)]" />
                  {chip}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          {...getRevealProps(reduceMotion, 0.14, 28)}
          className="relative"
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.45, 0.9, 0.45],
                    scale: [1, 1.12, 1],
                    x: [0, 18, 0],
                    y: [0, -10, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
            className="pointer-events-none absolute left-8 top-10 h-72 w-72 rounded-full bg-brand-sky/20 blur-3xl"
          />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.4, 0.85, 0.4],
                    scale: [1.12, 1, 1.12],
                    x: [0, -16, 0],
                    y: [0, 14, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
            className="pointer-events-none absolute bottom-10 right-8 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl"
          />

          <motion.div
            {...getStaggerProps(reduceMotion, 0.1, 0.1)}
            className="relative z-10 flex flex-col gap-5"
          >
            <motion.div variants={fadeItem} className="grid gap-6">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 shadow-card backdrop-blur-xl transition duration-300 hover:border-brand-sky/30 hover:shadow-glow"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-brand-slate">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  <span className="rounded-full border border-brand-sky/20 bg-brand-sky/10 px-3 py-1 text-brand-white">
                    JavaScript
                  </span>
                </div>

                <div className="min-h-[210px] px-5 py-5 font-mono text-sm leading-7 sm:text-[15px]">
                  {typedLines.map((line, index) => (
                    <div
                      key={`${line}-${index}`}
                      className="whitespace-pre-wrap text-brand-slate"
                    >
                      {tokenizeLine(line)}
                    </div>
                  ))}

                  {!reduceMotion && typedCode.length < codeBlock.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className="inline-block h-5 w-[2px] translate-y-1 bg-brand-sky"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeItem}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-card backdrop-blur-xl transition duration-300 hover:border-brand-orange/30 hover:shadow-orange"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-sky">
                  Flujo técnico
                </p>

                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.35, 1],
                          opacity: [0.75, 1, 0.75],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                  className="h-2.5 w-2.5 rounded-full bg-brand-orange shadow-[0_0_20px_rgba(252,125,64,0.8)]"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] xl:items-center">
                {architectureNodes.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <div key={node.label} className="contents">
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        transition={
                          reduceMotion
                            ? undefined
                            : {
                                duration: 0.45,
                                delay: 0.46 + index * 0.08,
                              }
                        }
                        whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-white transition duration-300 hover:border-brand-sky/30 hover:bg-brand-sky/10"
                      >
                        <Icon className="h-4 w-4 text-brand-sky" />
                        {node.label}
                      </motion.div>

                      {index < architectureNodes.length - 1 && (
                        <motion.div
                          animate={
                            reduceMotion
                              ? undefined
                              : { x: [0, 4, 0], opacity: [0.45, 1, 0.45] }
                          }
                          transition={
                            reduceMotion
                              ? undefined
                              : {
                                  duration: 1.8,
                                  repeat: Infinity,
                                  delay: index * 0.18,
                                }
                          }
                          className="hidden items-center justify-center xl:flex"
                        >
                          <ArrowRight className="h-4 w-4 text-brand-orange" />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeItem} className="grid gap-3 sm:grid-cols-2">
              {metricCards.map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 0.55, delay: 0.55 + index * 0.08 }
                  }
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur-xl transition duration-300 hover:border-brand-orange/40 hover:shadow-orange"
                >
                  <p className="text-xl font-bold text-brand-white">{title}</p>
                  <p className="mt-2 text-sm leading-5 text-brand-slate">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
