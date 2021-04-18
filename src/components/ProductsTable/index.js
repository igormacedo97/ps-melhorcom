import Button from '../Button';
import * as styles from './styles';

export default function ProductsTable(){
  return (
    <div style={styles.container}>
    <header style={styles.header}>
      <h2>Produtos</h2>
      <Button />
    </header>    
    <table>
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
        <tr>
          <td>00000001</td>
          <td>Redmi 4k</td>
          <td>R$ 1000.00</td>
          <td>Xiaomi</td>
          <td>Preto</td>
          <td />
          <td />
        </tr>

        <tr>
          <td>00000002</td>
          <td>Moto G5</td>
          <td>R$ 1200.00</td>
          <td>Motorola</td>
          <td>Branco</td>
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </div>
  )
}