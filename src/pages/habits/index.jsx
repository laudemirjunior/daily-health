import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, ContainerOne, Poligon } from "./styles.js";
import { useContext, useState } from "react";
import Button from "../../components/button";
import CardCreateHabits from "../../components/cardCreateHabits";
import CardHabit from "../../components/cardHabit";
import { HabitListContext } from "../../Providers/habitsList";
import { motion } from "framer-motion";
import { Redirect } from "react-router";

const Habits = () => {
  const { habitList, removeHabit, CreateHabit, updateHabit } =
    useContext(HabitListContext);

  const [showCard, setShowCard] = useState(false);

  const open = () => {
    setShowCard(!showCard);
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
                <h1 className="title">Meus hábitos</h1>
                <Button onClick={() => open()}>Criar hábito</Button>
                {showCard && (
                  <CardCreateHabits createHabit={CreateHabit} open={open} />
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
      </motion.div>
    </>
  );
};
export default Habits;
