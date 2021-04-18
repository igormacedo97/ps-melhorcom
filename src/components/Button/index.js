import styled from 'styled-components';
import { StyledButton } from './styles'

import cellphoneIcon from '../../assets/cellphone.svg';

const AddIcon = styled.div`
  display: flex;
  align-items: center;  
  img {
    margin-right: 8px;
    }

    span {
      font-size: 38px;
    }
`

export default function Button ({isAddButton}) {
  const icon = (
  <AddIcon>
    <span>+</span>
    <img 
      src={cellphoneIcon} 
      alt="Adicionar"
    />
  </AddIcon>
  );
  return (
    <StyledButton>
      {isAddButton ? icon : null}
      <span>Adicionar</span>
    </StyledButton>
  )
}