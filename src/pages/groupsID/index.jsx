import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import Button from "../../components/button";
import { useContext, useEffect, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { useParams } from "react-router";
import { GoalsContext } from "../../Providers/goals";
import CardActivities from "../../components/cardActivities";
import CardCreateActivities from "../../components/cardCreateActivities";
import CardGoals from "../../components/cardGoals";
import CardCreateGoals from "../../components/cardCreateGoals";
import { Redirect } from "react-router";
import { AuthenticatedContext } from "../../Providers/authenticated";

const GroupsID = () => {
  const { searchActivities, activitiesList } = useContext(ActivitiesContext);
  const { searchGoals, goalsList } = useContext(GoalsContext);
  const { id } = useParams();
  const { authenticated } = useContext(AuthenticatedContext);
  useEffect(() => {
    searchActivities(id);
    searchGoals(id);
  }, []);

  const [openActivities, setOpenActivities] = useState(false);

  const openShowActivities = () => {
    setOpenActivities(!openActivities);
  };

  const [openGoals, setOpenGoals] = useState(false);

  const openShowGoals = () => {
    setOpenGoals(!openGoals);
  };
  if (!authenticated) {
    return <Redirect to="/" />;
  }
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
              <Button onClick={() => openShowGoals()}>Criar meta</Button>
              {goalsList.map((item) => {
                return <CardGoals item={item} />;
              })}
              {openGoals && <CardCreateGoals openShowGoals={openShowGoals} />}
            </div>
            <div className="card">
              <h1>Minhas atividades</h1>
              <Button onClick={openShowActivities}>Criar atividade</Button>
              {activitiesList.map((item) => {
                return <CardActivities item={item}></CardActivities>;
              })}
              {openActivities && (
                <CardCreateActivities openShowActivities={openShowActivities} />
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default GroupsID;
