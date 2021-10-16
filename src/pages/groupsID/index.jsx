import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import Button from "../../components/button";

const GroupsID = () => {
  return (
    <>
      <Bar />
      <MainContainer>
        <div className="container">
          <div className="menu">
            <Hamburguer />
          </div>
          <div className="cards">
            <div className="card">
              <h1>Minhas Metas</h1>
              <Button>Criar meta</Button>
            </div>
            <div className="card">
              <h1>Minhas atividades</h1>
              <Button>Criar atividade</Button>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default GroupsID;
