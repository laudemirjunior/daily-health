import { StyleHamburguer } from "./style";
import { AiFillAppstore, AiFillCarryOut, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import k from "../../images/k.png";
import { useHistory } from "react-router";

const Hamburguer = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const local = history.location.pathname;
  const name = localStorage.getItem("@KenzieHealth:userName");

  return (
    <StyleHamburguer>
      <div>
        <img src={k} alt="" />
        <p>{name}</p>
      </div>
      <div>
        <div
          style={
            local === "/dashboard"
              ? { background: "var(--white)" }
              : { background: "transparent" }
          }
        >
          <AiFillAppstore />
          <span onClick={() => history.push("/dashboard")}>Dashboard</span>
        </div>
        <div
          style={
            local === "/habits"
              ? { background: "var(--white)" }
              : { background: "transparent" }
          }
        >
          <AiFillCarryOut />
          <span onClick={() => history.push("/habits")}>Habits</span>
        </div>
        <div
          style={
            local === "/groups"
              ? { background: "var(--white)" }
              : { background: "transparent" }
          }
        >
          <BsFillPeopleFill />
          <span onClick={() => history.push("/groups")}>Groups</span>
        </div>
        <div
          style={
            local === "/settings"
              ? { background: "var(--white)" }
              : { background: "transparent" }
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
