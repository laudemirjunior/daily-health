import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import CardCreateSettings from "../../components/cardCreateSettings";
import { MainContainer } from "./styles.js";
import { useJwt } from "react-jwt";
import { useState } from "react";
import api from "../../services";
import Button from "../../components/button";
import k from "../../images/k.png";
import { AiFillSetting } from "react-icons/ai";

const Settings = () => {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const { decodedToken, isExpired } = useJwt(token);
  const [userInput, setUserInput] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [userGroup, setUserGroup] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem("@KenzieHealth:userName"),
  });

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
