import { StyleCardTask } from "./styles";
import { ImEnter } from "react-icons/im";
import { useContext } from "react";
import { MyGroupListContext } from "../../Providers/myGroupList";

const CardGroups = ({ item }) => {
  const { subscribe } = useContext(MyGroupListContext);

  return (
    <StyleCardTask>
      <div>
        <span>Nome: {item.name}</span>
        <span>Descrição: {item.description}</span>
        <span>Categoria: {item.category}</span>
      </div>
      <div className="svg">
        <ImEnter
          onClick={() => subscribe(item)}
          style={{ fontSize: "30px", color: "green" }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardGroups;
