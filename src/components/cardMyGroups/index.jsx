import { StyleCardTask } from "./styles";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router";

const CardMyGroups = ({ item }) => {
  let history = useHistory();

  function handleClick(item) {
    history.push(`/groups/${item.id}`);
  }
  return (
    <StyleCardTask onClick={() => handleClick(item)}>
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
