import Bar from "../../components/bar";
import { Container, Poligon, MainContainer } from "./styles";
import Buttons from "../../components/button";
import { useHistory } from "react-router";
import { Redirect } from "react-router";
import { motion } from "framer-motion";

const Home = () => {
  const history = useHistory();

  if (localStorage.getItem("@KenzieHealth:token")) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MainContainer>
      <Bar />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="background">
            <h1>Monitore seus habitos</h1>
          </div>

          <div className="buttons">
            <h1>Monitore seus habitos</h1>
            <span>Comece agora para transformar sua vida </span>
            <Buttons onClick={() => history.push("/login")}>Login</Buttons>
            <p>ou</p>
            <Buttons onClick={() => history.push("/signup")}>Sign Up</Buttons>
          </div>
        </Container>

        <Poligon />
      </motion.div>
    </MainContainer>
  );
};

export default Home;
