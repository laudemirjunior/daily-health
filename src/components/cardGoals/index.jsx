import { StyleCardTask } from "./styles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/goals";

const CardGoals = ({ item, locket }) => {
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
          {locket && (
            <AiOutlineCloseCircle
              onClick={() => deleteGoals(item.id)}
              style={{
                color: "red",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          )}
          <div
            className="active"
            onClick={() => {
              updateGoals(true, item.id);
            }}
          >
            {locket && (
              <AiOutlineCheckCircle
                style={{
                  color: "green",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              />
            )}
          </div>
        </div>
      </StyleCardTask>
    </>
  );
};

export default CardGoals;
