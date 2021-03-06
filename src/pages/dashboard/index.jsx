import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, Poligon } from "./styles.js";
import CardHabit from "../../components/cardHabit";
import CardMyGroups from "../../components/cardMyGroups";
import { HabitListContext } from "../../Providers/habitsList";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useContext } from "react";
import { Redirect } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { habitList, removeHabit, updateHabit, loading } =
    useContext(HabitListContext);
  const { myGroupList, loadingMyGroup } = useContext(MyGroupListContext);

  if (!localStorage.getItem("@KenzieHealth:token")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {habitList !== undefined && (
          <div>
            <Bar />

            <MainContainer>
              <div className="container">
                <div className="menu">
                  <Hamburguer />
                </div>
                <div className="cards">
                  <div className="card">
                    <h1 className="title">Meus hábitos</h1>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      habitList.map((item) => {
                        return (
                          <CardHabit
                            item={item}
                            removeHabit={removeHabit}
                            updateHabit={updateHabit}
                          />
                        );
                      })
                    )}
                  </div>
                  <div className="card">
                    <h1 className="title">Meus Grupos</h1>
                    {loadingMyGroup ? (
                      <CircularProgress />
                    ) : (
                      myGroupList.map((item) => {
                        return <CardMyGroups item={item} />;
                      })
                    )}
                  </div>
                </div>
              </div>
            </MainContainer>
            <Poligon />
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default Dashboard;
