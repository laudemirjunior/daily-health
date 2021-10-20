import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import CardCreateSettings from "../../components/cardCreateSettings";
import { MainContainer } from "./styles.js";
import { useState } from "react";
import api from "../../services";
import Button from "../../components/button";
import k from "../../images/k.png";
import { AiFillSetting } from "react-icons/ai";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/user";
import { useContext } from "react";

const Settings = () => {
  const [tokenLocal] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );
  const token = `Bearer ${tokenLocal}`;
  const [userInput, setUserInput] = useState("");
  const [showCard, setShowCard] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem("@KenzieHealth:userName"),
  });
  const { authenticated } = useContext(UserContext);
  const handleNewUserName = ({ id }) => {
    api
      .patch(`/users/${id}`, userInput, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => console.log("sucesso"))

      .catch((err) => console.log(err));
    localStorage.setItem("@KenzieHealth:userName", userInput);
  };
  const open = () => {
    setShowCard(!showCard);
  };
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Bar />
      <MainContainer>
        <div className="container">
          <div className="menu">
            <Hamburguer />
          </div>
          <div className="cards">
            <div className="card">
              <h1 className="title">
                Settings <AiFillSetting />
              </h1>
              <div className="profile">
                <h2>Seu Perfil: </h2>
                <div>
                  <img src={k} alt="" />
                  <h3>Username: {userInfo.username}</h3>
                </div>
              </div>
              <Button onClick={open}>Change Username</Button>
              {showCard && (
                <CardCreateSettings
                  open={open}
                  handleNewUserName={handleNewUserName}
                />
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Settings;
