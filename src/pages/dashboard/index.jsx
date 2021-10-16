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
import { ShowCardsContext } from "../../Providers/showCards";

const Dashboard = () => {
  const { habitList, removeHabit, createHabit } = useContext(HabitListContext);
  const { open, showCard } = useContext(ShowCardsContext);
  const { myGroupList } = useContext(MyGroupListContext);

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
              <h1>Criar hábito</h1>
              <Button onClick={() => showCard()}>Criar grupo</Button>
              <CardCreate
                createHabit={createHabit}
                open={open}
                showCard={showCard}
              />
              {habitList.map((item) => {
                return <CardHabit item={item} removeHabit={removeHabit} />;
              })}
            </div>
            <div className="card">
              <h1>Meus Grupos</h1>
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
