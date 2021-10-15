import { StyleBar, MenuHamburguer } from "./styles";
import { FaBars } from "react-icons/fa";
import Hamburguer from "../hamburguer";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Bar() {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  return (
    <StyleBar>
      <div className="bar">
        <span className="logo" onClick={() => history.push("/")}>
          Kenzie Health
        </span>
        <div className="buttons">
          <span className="info" onClick={() => history.push("/pinkoctober")}>
            Outubro rosa
          </span>
          <span className="info" onClick={() => history.push("/aboutus")}>
            Sobre nós
          </span>
        </div>
        <FaBars className="FaBars" onClick={() => setOpen(!open)} />
        <MenuHamburguer open={open}>
          <Hamburguer />
        </MenuHamburguer>
      </div>
    </StyleBar>
  );
}
