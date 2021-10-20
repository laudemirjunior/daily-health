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
          <h2>Título: {item.title}</h2>
          <h3>Categoria: {item.category}</h3>
          <h5>Dificuldade: {item.difficulty}</h5>
          <h5>Frequência: {item.frequency}</h5>
        </div>
        <div className="actions">
          <AiOutlineCloseCircle
            onClick={() => removeHabit(item)}
            style={{
              color: "red",
              marginRight: "7px",
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="iconHabit"
          />
          <div className="progress">
            <div
              className="percentage"
              style={{
                width: `${value()}%`,
              }}
            ></div>
          </div>
          <div
            style={{ backgroundColor: "white", color: "black" }}
            className="active"
            onClick={() => {
              updateHabit(item.how_much_achieved + 1, item.id);
              open();
            }}
          >
            <h3>{item.how_much_achieved} Dias</h3>
            <AiOutlineCheckCircle style={{ color: "green" }} />
          </div>
        </div>
      </StyleCardTask>
    </>
  );
};

export default CardHabit;
