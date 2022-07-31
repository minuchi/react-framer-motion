import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Pages from './pages';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  ${reset}
  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Pages />
      </Wrapper>
    </>
  );
}

export default App;
