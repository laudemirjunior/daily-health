import Bar from "../../components/bar";
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

};

export default Home;
