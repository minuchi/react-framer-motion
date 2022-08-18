import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
};

function Gestures() {
  const boxWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <BoxWrapper ref={boxWrapperRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={boxWrapperRef}
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
      />
    </BoxWrapper>
  );
}

export default Gestures;
