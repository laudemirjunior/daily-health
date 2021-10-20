import { StyleBar, MenuHamburguer } from "./styles";
import { FaBars } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import Hamburguer from "../hamburguer";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { DarkModeContext } from "../../Providers/darkMode";

export default function Bar() {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  const { change, reverse } = useContext(DarkModeContext);

  return (
    <StyleBar>
      <div className="bar">
        <div
          className="logo"
          onClick={() =>
            localStorage.getItem("@KenzieHealth:token")
              ? history.push("/dashboard")
              : history.push("/")
          }
        >
          Kenzie Health
        </div>
        <div className="buttons">
          <div onClick={reverse}>
            {change ? <MdDarkMode /> : <MdLightMode />}
          </div>

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
