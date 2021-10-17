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
  `;

export default GlobalStyle;
