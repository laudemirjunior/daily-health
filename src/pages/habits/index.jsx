import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import HabitsBoard from "../../components/habitsBoard";

const Habits = () => {
  return (
    <>
      <Bar />
      <MainContainer>
        <div className="container">
          <Hamburguer className="bar" />
          <div>
            <HabitsBoard className="cards"> </HabitsBoard>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Habits;
