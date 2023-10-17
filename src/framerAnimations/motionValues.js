export const slideLeft = {
  hidden: {
    x: -250,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const slideRight = {
  hidden: {
    x: 105,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const opacityIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const lightsVariant = {
  visible: {
    opacity: [0.3, 0.7, 1, 0.4, 0.9, 1, 0.3],
    scale: [1, 1.2, 1.1, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
    },
  },
};

export const slideDown = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const circleRotate = {
  visible: {
    rotate: 360,
    transition: {
      delay: 0.5,
      duration: 30,
      repeat: Infinity,
    },
  },
};

export const headerZoom = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const zoomIn = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideShow = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};
