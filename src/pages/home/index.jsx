import Bar from "../../components/bar";
import { Container, Poligon } from "./styles";
import Buttons from "../../components/button";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <>
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
    </>
  );
};

export default Home;
