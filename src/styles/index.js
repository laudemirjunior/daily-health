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
  body {
    background-color: ${(props) => (props.change ? "trasparent" : "#0D0D0D")};
  }
  .App {
      width: 100%;
      min-height: 100vh;
      background-color: ${(props) =>
        props.change ? "trasparent" : "#0D0D0D"};;

  }
  :root {
    --white: ${(props) => (props.change ? "#ffffff" : "#0D0D0D")};
    --black: ${(props) => (props.change ? "#0D0D0D" : "#ffffff")};
    --menu:${(props) => (props.change ? "#FD7FAA" : "#595959")};
    --bar:  ${(props) => (props.change ? "#F2527D" : "#262626")};
    --blue: ${(props) => (props.change ? "#88E8F2" : "#8C8C8C")};
  }
  button, span, svg {
    cursor: pointer;
  }
  svg {
    font-size: 30px;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--menu) #ffffff;
  }

  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--menu);
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  `;

export default GlobalStyle;
