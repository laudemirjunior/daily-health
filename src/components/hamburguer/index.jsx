import { StyleHamburguer } from "./style";
import { AiFillAppstore, AiFillCarryOut, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import ellipse from "../../images/ellipse.png";

const Hamburguer = () => {
  return (
    <StyleHamburguer>
      <div>
        <img src={ellipse} alt="" />
        <p>Laudemir</p>
      </div>
      <div>
        <div>
          <AiFillAppstore />
          <span>Dashboard</span>
        </div>
        <div>
          <AiFillCarryOut />
          <span>Habits</span>
        </div>
        <div>
          <BsFillPeopleFill />
          <span>Groups</span>
        </div>
        <div>
          <AiFillSetting />
          <span>Setttings</span>
        </div>
      </div>
      <div>
        <div>
          <BiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </StyleHamburguer>
  );
};

export default Hamburguer;
