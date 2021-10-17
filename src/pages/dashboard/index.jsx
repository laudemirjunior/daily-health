import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import CardHabit from "../../components/cardHabit";
import CardMyGroups from "../../components/cardMyGroups";
import { HabitListContext } from "../../Providers/habitsList";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useContext } from "react";
import Button from "../../components/button";
import CardCreate from "../../components/cardCreate/index";
import { useState } from "react";

const Dashboard = () => {
  const { habitList, removeHabit, createHabit, updateHabit } =
    useContext(HabitListContext);
  const { myGroupList } = useContext(MyGroupListContext);
  const [showCard, setShowCard] = useState(false);

  const open = () => {
    setShowCard(!showCard);
  };

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
              <h1 className="title">Meus hábitos</h1>
              <Button onClick={() => open()}>Criar hábito</Button>
              {showCard && <CardCreate createHabit={createHabit} open={open} />}
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
};

export default Dashboard;
