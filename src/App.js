import GlobalStyle from "./styles";
import Routes from "./routes/";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
