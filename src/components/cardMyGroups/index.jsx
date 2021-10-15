import { StyleCardTask } from "./styles";
import { BiLogOut } from "react-icons/bi";

const CardMyGroups = ({ item }) => {
  return (
    <StyleCardTask>
      <div>
        <span>Nome: {item.name}</span>
        <span>Descrição: {item.description}</span>
        <span>Categoria: {item.category}</span>
      </div>
      <div className="svg">
        <BiLogOut style={{ fontSize: "30px", color: "red" }} />
      </div>
    </StyleCardTask>
  );
};

export default CardMyGroups;
