import { StyleBar } from "./styles";
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Bar() {
  return (
    <StyleBar>
      <div className="bar">
      <Link to="/" style={{ textDecoration: 'none',color:'white' }}><span className="logo">Kenzie Health</span></Link>
        <div className="buttons">
        <Link to="/pinkoctober" style={{ textDecoration: 'none',color:'white' }}><span className="info">Outubro rosa</span></Link>
        <Link to="/aboutus" style={{ textDecoration: 'none',color:'white' }}><span className="info">Sobre nós</span></Link>
        </div>
        <FaBars className="FaBars" />
      </div>
    </StyleBar>
  );
}

