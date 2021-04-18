import styled from 'styled-components';

export const TableRow = styled.tr`

  height: 64px;
  display: flex;
  align-items: center;
  border: 1px solid #1d1d1d;
  padding: 0 30px;

  td {
    flex: 1;
    text-align: left;    
  }

  td:last-child {
    text-align: center;
  }
`