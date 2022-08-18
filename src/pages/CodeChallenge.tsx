import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 40px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
`;

const Button = styled(motion.button)<{ switched: boolean }>`
  font-size: 18px;
  border-radius: 5px;
  border: none;
  background-color: white;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  ${(prop) =>
    prop.switched
      ? css`
          color: rgba(255, 0, 0, 1);
          scale: 1.2;
        `
      : css`
          color: rgba(0, 0, 255, 1);
          scale: 1;
        `};
`;

const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Modal = styled(motion.div)`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-color: white;
`;

const overlayVariants: Variants = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  exit: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};

function CodeChallenge() {
  const [switched, setSwitched] = useState(false);
  const [modal, setModal] = useState('');

  return (
    <Container>
      <BoxWrapper>
        <Box
          layoutId="1"
          onClick={() => setModal('1')}
          whileHover={{ x: -15, y: -10, scale: 1.1 }}
        />
        <Box>{switched && <Circle layoutId="circle" />}</Box>
        <Box>{!switched && <Circle layoutId="circle" />}</Box>
        <Box
          layoutId="2"
          onClick={() => setModal('2')}
          whileHover={{ x: 15, y: 10, scale: 1.1 }}
        />
      </BoxWrapper>
      <Button
        switched={switched}
        layout
        onClick={() => setSwitched((prev) => !prev)}
      >
        Switch
      </Button>
      <AnimatePresence>
        {modal && (
          <Overlay
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            onClick={() => setModal('')}
          >
            <Modal layoutId={modal} />
          </Overlay>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default CodeChallenge;
