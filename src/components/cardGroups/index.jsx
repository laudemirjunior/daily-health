import { StyleCardTask } from "./styles";
import { AiOutlineLogin } from "react-icons/ai";
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
        <AiOutlineLogin
          onClick={() => subscribe(item)}
          style={{ color: "green" }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardGroups;
