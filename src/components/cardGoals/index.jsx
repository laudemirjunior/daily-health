import { StyleCardTask } from "./styles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/goals";

const CardGoals = ({ item }) => {
  const { updateGoals, deleteGoals } = useContext(GoalsContext);

  return (
    <>
      <StyleCardTask>
        <div>
          <h3>Título: {item.title}</h3>
          <h4>Dificuldade: {item.difficulty}</h4>
          <h5>Quanto conquistado: {item.how_much_achieved}</h5>
          <h5>Alcançou: {item.achieved === true ? "Sim" : "Não"}</h5>
        </div>
        <div className="actions">
          <AiOutlineCloseCircle
            onClick={() => deleteGoals(item.id)}
            style={{ color: "red" }}
          />
          <div
            className="active"
            onClick={() => {
              updateGoals(true, item.id);
            }}
          >
            <AiOutlineCheckCircle style={{ color: "green" }} />
          </div>
        </div>
      </StyleCardTask>
    </>
  );
};

export default CardGoals;
