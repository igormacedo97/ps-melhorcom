import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  `;


function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container> 
   
  );
}

export default App;
