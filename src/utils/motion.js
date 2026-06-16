export const viewport = {
  once: true,
  amount: 0.2,
};

export const getRevealProps = (reduceMotion, delay = 0, y = 28) => {
  if (reduceMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0 },
      viewport,
    };
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
    viewport,
  };
};

export const getStaggerProps = (reduceMotion, delayChildren = 0, staggerChildren = 0.12) => {
  if (reduceMotion) {
    return {
      initial: false,
      whileInView: 'show',
      viewport,
    };
  }

  return {
    initial: 'hidden',
    whileInView: 'show',
    viewport,
    variants: {
      hidden: {},
      show: {
        transition: {
          delayChildren,
          staggerChildren,
        },
      },
    },
  };
};

export const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const getFloatAnimation = (reduceMotion, distance = 12, duration = 6, delay = 0) => {
  if (reduceMotion) {
    return {};
  }

  return {
    animate: { y: [0, -distance, 0] },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  };
};
