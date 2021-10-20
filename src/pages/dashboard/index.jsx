import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, Poligon } from "./styles.js";
import CardHabit from "../../components/cardHabit";
import CardMyGroups from "../../components/cardMyGroups";
import { HabitListContext } from "../../Providers/habitsList";
import { UserContext } from "../../Providers/user";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useContext } from "react";
import { Redirect } from "react-router";

const Dashboard = () => {
  const { habitList, removeHabit, updateHabit } = useContext(HabitListContext);
  const { myGroupList } = useContext(MyGroupListContext);
  const { authenticated } = useContext(UserContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
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
                  {habitList.map((item) => {
                    return (
                      <CardHabit
                        item={item}
                        removeHabit={removeHabit}
                        updateHabit={updateHabit}
                      />
                    );
                  })}
                </div>
                <div className="card">
                  <h1 className="title">Meus Grupos</h1>
                  {myGroupList.map((item) => {
                    return <CardMyGroups item={item} />;
                  })}
                </div>
              </div>
            </div>
          </MainContainer>
          <Poligon />
        </div>
      )}
    </div>
  );
};
export default Dashboard;
