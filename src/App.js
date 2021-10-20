import GlobalStyle from "./styles";
import Routes from "./routes/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
