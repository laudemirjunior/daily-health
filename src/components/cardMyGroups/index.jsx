import { StyleCardTask } from "./styles";
import { AiOutlineLogout } from "react-icons/ai";
import { useHistory } from "react-router";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useContext } from "react";

const CardMyGroups = ({ item }) => {
  let history = useHistory();
  const { unSubscribe } = useContext(MyGroupListContext);

  function handleClick(item) {
    history.push(`/groups/${item.id}`);
  }

  return (
    <StyleCardTask>
      <div onClick={() => handleClick(item)}>
        <span>Nome: {item.name}</span>
        <span>Descrição: {item.description}</span>
        <span>Categoria: {item.category}</span>
      </div>
      <div className="svg">
        <AiOutlineLogout
          onClick={() => unSubscribe(item)}
          style={{ color: "red" }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardMyGroups;
