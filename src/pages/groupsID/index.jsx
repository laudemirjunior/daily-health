import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import Button from "../../components/button";
import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { useParams } from "react-router";
import { GoalsContext } from "../../Providers/goals";

const GroupsID = () => {
  const { searchActivities, activitiesList } = useContext(ActivitiesContext);
  const { searchGoals, goalsList } = useContext(GoalsContext);
  const { id } = useParams();

  searchActivities(id);
  searchGoals(id);

  return (
    <div>
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
              {goalsList.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div>
            <div className="card">
              <h1>Minhas atividades</h1>
              <Button>Criar atividade</Button>
              {activitiesList.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default GroupsID;
