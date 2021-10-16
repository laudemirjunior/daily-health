import { StyleCardTask } from "./styles";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const CardHabit = ({ item, removeHabit }) => {
  return (
    <StyleCardTask>
      <div>
        <span>Título: {item.title}</span>
        <span>Categoria: {item.category}</span>
        <span>Dificuldade: {item.difficulty}</span>
        <span>Frequência: {item.frequency}</span>
      </div>
      <div>
        <AiOutlineCheckCircle
          style={{ fontSize: "30px", color: "green", cursor: "poiter" }}
        />
        <AiOutlineCloseCircle
          onClick={() => removeHabit(item)}
          style={{ fontSize: "30px", color: "red", cursor: "poiter" }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardHabit;
