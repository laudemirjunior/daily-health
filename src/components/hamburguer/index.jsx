import { StyleHamburguer } from "./style";
import { AiFillAppstore, AiFillCarryOut, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import k from "../../images/k.png";
import { useHistory } from "react-router";
import { AuthenticatedContext } from "../../Providers/authenticated";
import { NameUserContext } from "../../Providers/nameUser";
import { useContext } from "react";

const Hamburguer = () => {
  const history = useHistory();
  const { setAuthenticated } = useContext(AuthenticatedContext);
  const { nameUser } = useContext(NameUserContext);
  const logout = () => {
    history.push("/");
    localStorage.clear();
    setAuthenticated(false);
  };

  const local = history.location.pathname;

  return (
    <StyleHamburguer>
      <div>
        <img src={k} alt="" />
        <p>{nameUser}</p>
      </div>
      <div>
        <div
          style={
            local === "/dashboard"
              ? { background: "var(--bar)" }
              : { background: "transparent" }
          }
        >
          <AiFillAppstore />
          <span onClick={() => history.push("/dashboard")}>Dashboard</span>
        </div>
        <div
          style={
            local === "/habits"
              ? { background: "var(--bar)" }
              : { background: "transparent" }
          }
        >
          <AiFillCarryOut />
          <span onClick={() => history.push("/habits")}>Habits</span>
        </div>
        <div
          style={
            local === "/groups"
              ? { background: "var(--bar)" }
              : { background: "transparent" }
          }
        >
          <BsFillPeopleFill />
          <span onClick={() => history.push("/groups")}>Groups</span>
        </div>
        <div
          style={
            local === "/settings"
              ? { background: "var(--bar)" }
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
