import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, div#root {
    height: 100vh;
  }

  div#root {
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: Arial, Helvetica, sans-serif
  }
`