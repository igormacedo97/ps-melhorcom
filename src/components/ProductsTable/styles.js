import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

`
export const Container = styled.div`
  width: 70%;
  margin: 70px auto;
`

export const Table = styled.table`
  border: 1px solid #1d1d1d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  thead > tr {
    height: 64px;
    display: flex;
    align-items: center;    
    border: 1px solid #1d1d1d;
    padding: 0 30px;
    
    th {
      flex: 1; 
      text-align: left; 
          
    }
  }

`



