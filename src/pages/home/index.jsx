import Bar from "../../components/bar";
<<<<<<< HEAD
import Button from "../../components/button";
import { Background } from "./styles";

const Home = () => {
  return (
    <>
      <Bar />
      
      <Background>
        <div className="container">
          <div className="name_page">
            <span>Monitore seus habitos</span>
          </div>
        </div>
        
        <div className="description">
          <span>Comece agora para transformar sua vida</span> 

          <div className="btns">
          <Button />
          </div>

        </div>


      </Background>

    </>

  
  )
=======
import { Container, Content} from "./styles";

const Home = () => {
  return (
    <Container>
      <nav>
        <Bar />
      </nav>
      
      <Content>
        <div className="background">
            <div className="name_page">
              <span>Monitore seus habitos</span>
            </div>
        </div>

        <div className="inicio">
          <span>Comece agora para transformar sua vida</span>
          
          <div className="login_sign">
            <button>Login</button>
            <span>ou</span>
            <button>Sign Up</button>
          </div>
        </div>

        
      </Content>
        
    </Container>

  )

  
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c
};

export default Home;
