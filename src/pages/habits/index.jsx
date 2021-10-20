import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, ContainerOne, Poligon } from "./styles.js";
import { useContext, useState } from "react";
import Button from "../../components/button";
import CardCreateHabits from "../../components/cardCreateHabits";
import CardHabit from "../../components/cardHabit";
import { HabitListContext } from "../../Providers/habitsList";
import { UserContext } from "../../Providers/user";
import { Redirect } from "react-router";

const Habits = () => {
  const { habitList, removeHabit, createHabit, updateHabit } =
    useContext(HabitListContext);
  console.log(habitList);
  const [showCard, setShowCard] = useState(false);
  const { authenticated } = useContext(UserContext);
  const open = () => {
    setShowCard(!showCard);
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
              <h1 className="title">Meus hábitos</h1>
              <Button onClick={() => open()}>Criar hábito</Button>
              {showCard && (
                <CardCreateHabits createHabit={createHabit} open={open} />
              )}
              <ContainerOne>
                {habitList.map((item) => {
                  return (
                    <div className="one">
                      <CardHabit
                        item={item}
                        removeHabit={removeHabit}
                        updateHabit={updateHabit}
                      />
                    </div>
                  );
                })}
              </ContainerOne>
            </div>
          </div>
        </div>
        <Poligon />
      </MainContainer>
    </>
  );
};
export default Habits;
