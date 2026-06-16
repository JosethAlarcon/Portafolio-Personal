import { motion, useReducedMotion } from 'framer-motion';
import { fadeItem, getRevealProps, getStaggerProps } from '../utils/motion';

const values = [
  'Proactividad',
  'Aprendizaje constante',
  'Trabajo en equipo',
  'Responsabilidad',
  'Orientacion a resultados',
  'Calidad en el desarrollo',
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="sobre-mi" className="section-shell" {...getRevealProps(reduceMotion)}>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div {...getStaggerProps(reduceMotion)}>
          <span className="chip">Sobre mi</span>
          <motion.h2 variants={fadeItem} className="section-title mt-6">
            Construyo soluciones con enfoque tecnico y sentido practico.
          </motion.h2>
          <div className="section-copy space-y-6">
            <motion.p variants={fadeItem}>
              Soy una persona proactiva, responsable y con muchas ganas de seguir creciendo profesionalmente en el area del desarrollo de software. Me gusta aprender constantemente, trabajar con calidad, aportar ideas y construir soluciones que realmente generen valor.
            </motion.p>
            <motion.p variants={fadeItem}>
              Actualmente estoy finalizando mi carrera de Ingenieria de Ejecucion mencion Desarrollo de Sistemas, donde he fortalecido mis conocimientos en desarrollo web, bases de datos, metodologias agiles, analisis de requerimientos, diagramas UML, arquitectura de software y evaluacion de proyectos informaticos.
            </motion.p>
            <motion.p variants={fadeItem}>
              Ademas de mi formacion academica, he desarrollado proyectos reales utilizando tecnologias como React, JavaScript, TypeScript, C#, ASP.NET Core Web API, PostgreSQL, SQL Server, MySQL, GitHub, Netlify, Render y Azure en menor medida. Tambien tengo experiencia configurando dominios, trabajando por ramas en Git y desplegando aplicaciones completas.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          {...getRevealProps(reduceMotion, 0.12)}
          className="glass-card p-8 transition duration-300 hover:border-brand-sky/30 hover:shadow-glow"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-brand-sky">Valores que me representan</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-brand-orange/40 hover:shadow-orange"
              >
                <p className="text-xs font-semibold text-brand-orange">0{index + 1}</p>
                <p className="mt-2 text-base font-medium text-brand-white">{value}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-brand-sky/20 bg-brand-sky/10 p-5">
            <p className="text-sm leading-7 text-brand-white/90">
              Me interesa integrarme a equipos donde pueda aportar, aprender de otros profesionales y seguir creciendo mientras desarrollo productos utiles para personas y empresas.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
