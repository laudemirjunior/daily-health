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
<<<<<<< HEAD
    --white: #ffffff;
    --black: #000000;
    --button: #F2A0AF;
    --background: #FD7FAA;
    --bar: #F2527D;
  }
  button, span {
    cursor: pointer;
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
=======
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
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c
  `;

export default GlobalStyle;
