import { StyleCardTask } from "./styles";
import { AiOutlineLogin } from "react-icons/ai";
import { useContext } from "react";
import { MyGroupListContext } from "../../Providers/myGroupList";

const CardGroups = ({ item }) => {
  const { subscribe } = useContext(MyGroupListContext);

  return (
    <StyleCardTask>
      <div>
        <h2>Nome: {item.name}</h2>
        <h3>Descrição: {item.description}</h3>
        <h4>Categoria: {item.category}</h4>
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
