import Bar from "../../components/bar";
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

  
};

export default Home;
