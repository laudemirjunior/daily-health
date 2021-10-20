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
    --white: ${(props) => (props.change ? "#ffffff" : "#000000")};
    --black: ${(props) => (props.change ? "#000000" : "#ffffff")};
    --menu:${(props) => (props.change ? "#FD7FAA" : "#04BEC4")};
    --bar:  ${(props) => (props.change ? "#F2527D" : "#034C8C")};
    --blue: ${(props) => (props.change ? "#88E8F2" : "#FD7FAA")};
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
