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
          <span>Título: {item.title}</span>
          <span>Dificuldade: {item.difficulty}</span>
          <span>Quanto conquistado: {item.how_much_achieved}</span>
          <span>Alcançou: {item.achieved === true ? "Sim" : "Não"}</span>
        </div>
        <div className="actions">
          <AiOutlineCloseCircle
            onClick={() => deleteGoals(item.id)}
            style={{ fontSize: "30px", color: "red" }}
          />
          <div
            className="active"
            onClick={() => {
              updateGoals(true, item.id);
            }}
          >
            <AiOutlineCheckCircle
              style={{ fontSize: "30px", color: "green" }}
            />
          </div>
        </div>
      </StyleCardTask>
    </>
  );
};

export default CardGoals;
