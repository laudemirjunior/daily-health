import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, Poligon } from "./styles.js";
import Button from "../../components/button";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { GoalsContext } from "../../Providers/goals";
import CardActivities from "../../components/cardActivities";
import CardCreateActivities from "../../components/cardCreateActivities";
import CardGoals from "../../components/cardGoals";
import CardCreateGoals from "../../components/cardCreateGoals";
import { Redirect, useParams } from "react-router";
import { UserContext } from "../../Providers/user";
import { useEffect } from "react";

const GroupsID = () => {
  const { id } = useParams();
  const { activitiesList, searchActivities } = useContext(ActivitiesContext);
  const { goalsList, searchGoals } = useContext(GoalsContext);
  const { authenticated } = useContext(UserContext);
  const [openActivities, setOpenActivities] = useState(false);
  const [openGoals, setOpenGoals] = useState(false);

  useEffect(() => {
    searchActivities(id);
  }, [activitiesList]);

  useEffect(() => {
    searchGoals(id);
  }, [goalsList]);

  const openShowActivities = () => {
    setOpenActivities(!openActivities);
  };

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
        <Poligon />
      </MainContainer>
    </>
  );
};

export default GroupsID;
