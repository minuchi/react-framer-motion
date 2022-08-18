import { motion } from 'framer-motion';
import styled from 'styled-components';

const Svg = styled(motion.svg)`
  width: 200px;
  height: 200px;
  path {
    stroke: #f3ba2f;
    stroke-width: 2;
  }
`;

const svg = {
  start: {},
  end: {
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const path = {
  start: { pathLength: 0, fill: 'rgba(243, 186, 47, 0)' },
  end: { pathLength: 1, fill: 'rgba(243, 186, 47, 1)' },
};

const pathTransition = {
  fill: { delay: 1.5, duration: 1 },
};

function Path() {
  return (
    <Svg
      variants={svg}
      initial="start"
      animate="end"
      viewBox="0 0 126.61 126.61"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={path}
        transition={pathTransition}
        d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"
      />
      <motion.path
        variants={path}
        transition={pathTransition}
        d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"
      />
      <motion.path
        variants={path}
        transition={pathTransition}
        d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"
      />
      <motion.path
        variants={path}
        transition={pathTransition}
        d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"
      />
      <motion.path
        variants={path}
        transition={pathTransition}
        d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"
      />
    </Svg>
  );
}

export default Path;
