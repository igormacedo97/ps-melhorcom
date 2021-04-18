import Button from '../Button';

import { Header, Container, Table } from './styles';

import cellphoneIcon from '../../assets/cellphone.svg';

import ProductRow from '../ProductRow';

const styles = {};

export default function ProductsTable(){
  return (
    <Container>
    <Header>
      <h2>Produtos</h2>
      <Button />
    </Header>

    <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Modelo</th>
          <th>Preço</th>
          <th>Marca</th>
          <th>Cor</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <ProductRow
          code="0000001"
          model="XT2041-1"
          price={1407.12}
          brand="Motorola"
          color="BLACK"
        />

        <ProductRow
          code="0000001"
          model="XT2041-1"
          price={1407.12}
          brand="Motorola"
          color="BLACK"
        />

        <ProductRow
          code="0000001"
          model="XT2041-1"
          price={1407.12}
          brand="Motorola"
          color="BLACK"
        />
        
      </tbody>
    </Table>
  </Container>
  )
}