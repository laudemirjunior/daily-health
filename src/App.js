import GlobalStyle from "./styles";
import Routes from "./routes/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { DarkModeContext } from "./Providers/darkMode";

function App() {
  const { change } = useContext(DarkModeContext);

  return (
    <div className="App">
      <GlobalStyle change={change} />
      <Routes />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
