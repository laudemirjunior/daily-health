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
import { useEffect } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const GroupsID = () => {
  const { id } = useParams();
  const { activitiesList, searchActivities } = useContext(ActivitiesContext);
  const { goalsList, searchGoals } = useContext(GoalsContext);
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
  if (!localStorage.getItem("@KenzieHealth:token")) {
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
              <Link to="/groups">
                <RiArrowGoBackLine className="back" />
              </Link>
              <h1>Minhas Metas</h1>

              {goalsList.map((item) => {
                return <CardGoals item={item} locket={false} />;
              })}
              {openGoals && <CardCreateGoals openShowGoals={openShowGoals} />}
            </div>
            <div className="card">
              <h1>Minhas atividades</h1>
              {activitiesList.map((item) => {
                return (
                  <CardActivities item={item} locket={false}></CardActivities>
                );
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
