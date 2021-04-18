import styled from 'styled-components';

export const StyledButton = styled.button `
  height: 40px;
  background-color: #DAE3ED;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border: 1px solid #1D1D1D;
  border-radius: 5px;

  transition: all ease 0.2s;

  cursor: pointer;

  span {
    color: #1D1D1D;
    text-transform: uppercase;
  }

  &:hover {
    background-color: #1D1D1D;

    span {
      color: #DAE3ED;
    }

    img {
      filter: brightness(800%)
    }
  }

`;

