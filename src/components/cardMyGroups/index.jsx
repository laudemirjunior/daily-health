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
      <div className="info" onClick={() => handleClick(item)}>
        <h2>Nome: {item.name}</h2>
        <h3>Descrição: {item.description}</h3>
        <h4>Categoria: {item.category}</h4>
      </div>
      <div className="svg">
        <AiOutlineLogout
          onClick={() => unSubscribe(item)}
          style={{
            color: "red",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>
    </StyleCardTask>
  );
};

export default CardMyGroups;
