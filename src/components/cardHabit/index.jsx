import { StyleCardTask } from "./styles";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router";

const CardHabit = ({ item }) => {
  let history = useHistory();

  function handleClick(item) {
    history.push(`/groups/${item.id}`);
  }

  return (
    <StyleCardTask onClick={() => handleClick(item)}>
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
          style={{ fontSize: "30px", color: "red", cursor: "poiter" }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardHabit;
