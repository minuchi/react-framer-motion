import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButtons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 0;
`;

const LinkButton = styled(motion(Link))`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 50px;
  width: 200px;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
  font-size: 30px;
  padding: 10px 5px;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.3);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const LinkButtonsVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const LinkButtonVariants = {
  start: {
    scale: 0,
    opacity: 0.5,
    rotateZ: 180,
  },
  end: {
    scale: 1,
    opacity: 1,
    rotateZ: 360,
    transition: {
      duration: 0.5,
    },
  },
};

/*      transition={{ type: 'spring', delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }} */

function Home() {
  return (
    <LinkButtons variants={LinkButtonsVariants} initial="start" animate="end">
      <LinkButton variants={LinkButtonVariants} to="/animation">
        Animation
      </LinkButton>
      <LinkButton variants={LinkButtonVariants} to="/variants">
        Variants
      </LinkButton>
    </LinkButtons>
  );
}

export default Home;
