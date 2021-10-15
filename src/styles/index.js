import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: none;
    font-family: 'Nunito', sans-serif;
  }
  .App {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;

  }
  :root {
    --white: #ffffff
    --black: #000000
    --button: #F2A0AF;
    --background: #FD7FAA;
    ${"" /* usar opacity: opacity: 0.8; no efeitos transversais: */}
    --bar: #F2527D;
  }
  button {
    cursor: pointer;
  }
  `;

export default GlobalStyle;
