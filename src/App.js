
import GlobalStyle from "./styles";
import Routes from "./routes/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {lightTheme} from './styles/themes/light'
import {darkTheme} from './styles/themes/dark'

function App() {
  const[theme, setTheme] = useState(lightTheme)
  const opositeTheme = () =>{
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Routes opositeTheme={opositeTheme}/>
        <ToastContainer theme="colored" />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
