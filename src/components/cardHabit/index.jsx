import { StyleCardTask } from "./styles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const CardHabit = ({ item, removeHabit, updateHabit }) => {
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(!show);
  };

  return (
    <>
      <StyleCardTask>
        <div>
          <span>Título: {item.title}</span>
          <span>Categoria: {item.category}</span>
          <span>Dificuldade: {item.difficulty}</span>
          <span>Frequência: {item.frequency}</span>
        </div>
        <div className="actions">
          <AiOutlineCloseCircle
            onClick={() => removeHabit(item)}
            style={{ fontSize: "30px", color: "red", marginRight: "5px" }}
          />
          <div
            className="active"
            onClick={() => {
              updateHabit(item.how_much_achieved + 1, item.id);
              open();
            }}
          >
            <h3>{item.how_much_achieved} Dias</h3>
            <AiOutlineCheckCircle
              style={{ fontSize: "30px", color: "green" }}
            />
          </div>
        </div>
      </StyleCardTask>
    </>
  );
};

export default CardHabit;
