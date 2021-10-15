import GlobalStyle from "./styles";
import Routes from "./routes/";
import axios from "axios";

function App() {
  const test = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <GlobalStyle />
      <button onClick={() => test()}>Oi</button>
      <Routes />
    </div>
  );
}

export default App;
