import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import ProductsTable from '../components/ProductsTable'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  `;


export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <ProductsTable />
      </Main>
      <Footer />
    </Container>    
  );
}


