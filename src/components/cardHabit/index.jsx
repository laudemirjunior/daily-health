import { StyleCardTask } from "./styles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

const CardHabit = ({ item, removeHabit, updateHabit }) => {
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(!show);
  };

  const value = () => {
    if ((item.how_much_achieved * 100) / 30 < 100) {
      return (item.how_much_achieved * 100) / 30;
    } else {
      return 100;
    }
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
            style={{ fontSize: "30px", color: "red", marginRight: "7px" }}
          />
          <div
            style={{
              margin: "auto",
              width: "100px",
              height: "10px",
              backgroundColor: "var(--button)",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${value()}%`,
                height: "10px",
                backgroundColor: "var(--bar)",
                borderRadius: "5px",
              }}
            ></div>
          </div>
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
