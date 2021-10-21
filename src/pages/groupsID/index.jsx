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
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";

const GroupsID = () => {
  const { id } = useParams();
  const { activitiesList, searchActivities, loadingAct } =
    useContext(ActivitiesContext);
  const { goalsList, searchGoals, loading } = useContext(GoalsContext);
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
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      >
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
                <h1>Metas do meu Grupo</h1>

                <Button onClick={() => openShowGoals()}>Criar meta</Button>
                {loading ? (
                  <CircularProgress />
                ) : (
                  goalsList.map((item) => {
                    return <CardGoals item={item} locket={true} />;
                  })
                )}
                {openGoals && <CardCreateGoals openShowGoals={openShowGoals} />}
              </div>
              <div className="card">
                <h1>Atividades do meu Grupo</h1>
                <Button onClick={openShowActivities}>Criar atividade</Button>
                {loadingAct ? (
                  <CircularProgress />
                ) : (
                  activitiesList.map((item) => {
                    return (
                      <CardActivities
                        item={item}
                        locket={true}
                      ></CardActivities>
                    );
                  })
                )}
                {openActivities && (
                  <CardCreateActivities
                    openShowActivities={openShowActivities}
                  />
                )}
              </div>
            </div>
          </div>
          <Poligon />
        </MainContainer>
      </motion.div>
    </>
  );
};

export default GroupsID;
