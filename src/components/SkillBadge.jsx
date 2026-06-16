import { motion, useReducedMotion } from 'framer-motion';

const SkillBadge = ({ label }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-brand-slate transition duration-300 hover:border-brand-sky/40 hover:bg-brand-sky/10 hover:text-brand-white hover:shadow-glow"
    >
      {label}
    </motion.span>
  );
};

export default SkillBadge;
