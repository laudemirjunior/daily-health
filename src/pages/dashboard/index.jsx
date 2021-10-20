import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import CardHabit from "../../components/cardHabit";
import CardMyGroups from "../../components/cardMyGroups";
import { HabitListContext } from "../../Providers/habitsList";
import { AuthenticatedContext } from "../../Providers/authenticated";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useContext } from "react";
import { Redirect } from "react-router";

const Dashboard = ({opositeTheme}) => {
  const { habitList, removeHabit, updateHabit } = useContext(HabitListContext);
  const { myGroupList } = useContext(MyGroupListContext);
  const { authenticated } = useContext(AuthenticatedContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Bar opositeTheme={opositeTheme}/>
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
    </>
  );
}
export default Dashboard;
