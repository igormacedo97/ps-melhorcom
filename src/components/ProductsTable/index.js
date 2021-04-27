import Button from '../Button';

import { Header, Container, Table } from './styles';


import ProductRow from '../ProductRow';


export default function ProductsTable({ products }) {
  return (
    <Container>
      <Header>
        <h2>Produtos</h2>
        <Button isAddButton />
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
          {products.map((product) => {
            return (
              <ProductRow
                key={product.code}
                code={product.code}
                model={product.model}
                price={product.price}
                brand={product.brand}
                color={product.color}
              />
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}