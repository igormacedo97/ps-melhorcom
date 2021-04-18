import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

import {TableRow} from './styles'

const numberFormatter = new Intl.NumberFormat('pt-br', {
  currency: 'BRL',
  minimumFractionDigits: 2,
  style: 'currency'  
})

export default function ProductRow({model, brand, price, code, color}){
  return (
    <TableRow>
      <td>{code}</td>
      <td>{model}</td>
      <td>{numberFormatter.format(price)}</td>
      <td>{brand}</td>
      <td>{color}</td>
      <td />
      <td>
        <img
          src={editIcon}
          alt="Editar"
          style={{cursor: 'pointer', marginRight:30}}
        />
        <img
          src={deleteIcon}
          alt="Deletar"
          style={{cursor: 'pointer'}}
        />
      </td>
    </TableRow>
  )
}