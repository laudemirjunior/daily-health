import { StyleBar, MenuHamburguer } from "./styles";
import { FaBars } from "react-icons/fa";
import Hamburguer from "../hamburguer";
import { useState } from "react";
import { useHistory } from "react-router";
import { AuthenticatedContext } from "../../Providers/authenticated";
import { useContext } from "react";
import Switch from 'react-switch'
import { ThemeContext } from "styled-components";
import {shade} from 'polished'



export default function Bar({opositeTheme}) {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const { authenticated } = useContext(AuthenticatedContext);

  const{colors} = useContext(ThemeContext)
  
  return (
    <StyleBar>
      <div className="bar">
        <span
          className="logo"
          onClick={() =>
            authenticated ? history.push("/dashboard") : history.push("/")
          }
        >
          Kenzie Health
        </span>

        <div className="buttons">
          <span className="info button">
            <Switch 
            onChange={opositeTheme}
            checked={true}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1,colors.backgroundButton)}
            onColor={colors.backgroundButton}/>
          </span>
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

