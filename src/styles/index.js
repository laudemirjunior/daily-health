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
  }
  :root {
    --white: #ffffff;
    --black: #000000;
    --menu: #FD7FAA;
    --background: #fd7faad6;
    --bar: #F2527D;
    --iceCreamBlue: #88E8F2;
    --blue: #89C2D9;
  }
  button, span, svg {
    cursor: pointer;
  }
  svg {
    font-size: 30px;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: #F2527D #ffffff;
  }

  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #F2527D;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  `;

export default GlobalStyle;
