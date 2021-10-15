import { StyleHamburguer } from "./style";
import { AiFillAppstore, AiFillCarryOut, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import ellipse from "../../images/ellipse.png";
import { useHistory } from "react-router";

const Hamburguer = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  const local = history.location.pathname;

  return (
    <StyleHamburguer>
      <div>
        <img src={ellipse} alt="" />
        <p>Laudemir</p>
      </div>
      <div>
        <div
          style={
            local === "/dashboard"
              ? { backgroundColor: "var(--bar)" }
              : { backgroundColor: "transparent" }
          }
        >
          <AiFillAppstore />
          <span onClick={() => history.push("/dashboard")}>Dashboard</span>
        </div>
        <div
          style={
            local === "/habits"
              ? { backgroundColor: "var(--bar)" }
              : { backgroundColor: "transparent" }
          }
        >
          <AiFillCarryOut />
          <span onClick={() => history.push("/habits")}>Habits</span>
        </div>
        <div
          style={
            local === "/groups"
              ? { backgroundColor: "var(--bar)" }
              : { backgroundColor: "transparent" }
          }
        >
          <BsFillPeopleFill />
          <span onClick={() => history.push("/groups")}>Groups</span>
        </div>
        <div
          style={
            local === "/settings"
              ? { backgroundColor: "var(--bar)" }
              : { backgroundColor: "transparent" }
          }
        >
          <AiFillSetting />
          <span onClick={() => history.push("/settings")}>Setttings</span>
        </div>
      </div>
      <div>
        <div>
          <BiLogOut />
          <span onClick={() => logout()}>Logout</span>
        </div>
      </div>
    </StyleHamburguer>
  );
};

export default Hamburguer;
