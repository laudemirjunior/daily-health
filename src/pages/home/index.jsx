import Bar from "../../components/bar";
import Button from "../../components/button";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Bar />

          <div className="background">
            
          </div>
          
         <div className="name_page">
                <h1>Monitore seus habitos</h1>
            </div>

        <div className="description">
            <span>Comece agora para transformar sua vida.</span> 

            <div className="btns">
              <Button />
            </div> 
        </div> 
      
    </Container>

  
  )

};

export default Home;
