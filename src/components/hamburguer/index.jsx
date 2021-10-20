import { StyleHamburguer } from "./style";
import { AiFillAppstore, AiFillCarryOut, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { BsInfoCircle, BsFlower2 } from "react-icons/bs";
import k from "../../images/k.png";
import { useHistory } from "react-router";
import { useContext } from "react";
import { NameUserContext } from "../../Providers/nameUser";

const Hamburguer = () => {
  const history = useHistory();
  const logout = async () => {
    localStorage.clear();
    await history.push("/");
  };

  const local = history.location.pathname;
  const { nameUser } = useContext(NameUserContext);

  return (
    <StyleHamburguer>
      {localStorage.getItem("@KenzieHealth:token") ? null : (
        <div>
          <h3>Kenzie Health</h3>
        </div>
      )}
      {localStorage.getItem("@KenzieHealth:token") && (
        <>
          <div>
            <img src={k} alt="" />
            <p>{nameUser}</p>
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
              <span onClick={() => history.push("/habits")}>Hábitos</span>
            </div>
            <div
              style={
                local === "/groups"
                  ? { background: "var(--white)" }
                  : { background: "transparent" }
              }
            >
              <BsFillPeopleFill />
              <span onClick={() => history.push("/groups")}>Grupos</span>
            </div>
            <div
              style={
                local === "/settings"
                  ? { background: "var(--white)" }
                  : { background: "transparent" }
              }
            >
              <AiFillSetting />
              <span onClick={() => history.push("/settings")}>
                Configurações
              </span>
            </div>
          </div>
        </>
      )}
      <div className="infos" style={{ height: "100px", marginTop: "20px" }}>
        <div
          style={
            local === "/pinkoctober"
              ? { background: "var(--white)" }
              : { background: "transparent" }
          }
        >
          <BsFlower2 />
          <span onClick={() => history.push("/pinkoctober")}>Outubro Rosa</span>
        </div>
        <div
          style={
            local === "/aboutus"
              ? { background: "var(--white)" }
              : { background: "transparent" }
          }
        >
          <BsInfoCircle />
          <span onClick={() => history.push("/aboutus")}>Sobre nós</span>
        </div>
      </div>
      <div>
        {localStorage.getItem("@KenzieHealth:token") && (
          <div>
            <BiLogOut />
            <span onClick={() => logout()}>Logout</span>
          </div>
        )}
      </div>
    </StyleHamburguer>
  );
};

export default Hamburguer;
