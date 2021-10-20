import Bar from "../../components/bar";
import { Container, Poligon, MainContainer } from "./styles";
import Buttons from "../../components/button";
import { useHistory } from "react-router";
import { Redirect } from "react-router";

const Home = () => {
  const history = useHistory();

  if (localStorage.getItem("@KenzieHealth:token")) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MainContainer>
      <Bar />
      <Container>
        <div className="background">
          <h1>Monitore seus habitos</h1>
        </div>
        <Poligon />
        <div className="buttons">
          <h1>Monitore seus habitos</h1>
          <span>Comece agora para transformar sua vida </span>
          <Buttons onClick={() => history.push("/login")}>Login</Buttons>
          <p>ou</p>
          <Buttons onClick={() => history.push("/signup")}>Sign Up</Buttons>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Home;
