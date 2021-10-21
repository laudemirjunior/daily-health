import { Button, StyleCardTask } from "./styles";
import { AiOutlineLogin } from "react-icons/ai";
import { useContext } from "react";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { useHistory } from "react-router";

const CardGroups = ({ item }) => {
  let history = useHistory();
  const { subscribe } = useContext(MyGroupListContext);

  function handleClick(item) {
    history.push(`/groups/${item.id}`);
  }

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
          style={{
            color: "green",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="iconGroup"
        />
        <Button onClick={() => handleClick(item)}>Entrar</Button>
      </div>
    </StyleCardTask>
  );
};

export default CardGroups;
