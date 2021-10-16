import { StyleBar } from "./styles";
import { FaBars } from "react-icons/fa";

export default function Bar() {
  return (
    <StyleBar>
      <div className="bar">
        <span className="logo">Kenzie Health</span>
        <div className="buttons">
          <span className="info">Outubro rosa</span>
          <span className="info">Sobre nós</span>
        </div>
        <FaBars className="FaBars" />
      </div>
    </StyleBar>
  );
}

