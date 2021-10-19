import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import CardCreateSettings from "../../components/cardCreateSettings";
import { MainContainer, CardWrapper, CardHeading } from "./styles.js";
import { useJwt } from "react-jwt";
import { useState } from "react";
import api from "../../services";
import Button from "../../components/button";
import k from "../../images/k.png";
import { AiFillSetting } from "react-icons/ai";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Settings = () => {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const { decodedToken, isExpired } = useJwt(token);
  const [userInput, setUserInput] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const history = useHistory();
  const userName = () => {
    setUserInfo(localStorage.getItem("@KenzieHealth:username"));
  };

  const handleNewUserName = (data) => {
    const id = decodedToken.user_id;

    api
      .patch(`/users/${id}/`, userInput, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => localStorage.clear("@KenzieHealth:username"))
      .then(() => {
        localStorage.setItem("@KenzieHealth:username", data.username);
        history.push("/settings");
        console.log("sucesso");
      })

      .catch((err) => console.log(err.message));
  };
  const open = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    userName();
  });
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
              <CardWrapper>
                <CardHeading>Seu Perfil: </CardHeading>
                <div>
                  <img src={k} alt="" />
                  <span>Username: {userInfo}</span>
                  <span>Voce Participa de 30 grupos diferentes!</span>
                  <span>
                    Atualmente voce esta tentando ter 10 habitos novos!
                  </span>
                </div>
              </CardWrapper>
              <Button onClick={open}>Change Username</Button>
              {showCard && (
                <CardCreateSettings
                  open={open}
                  handleNewUserName={handleNewUserName}
                  userName={userName}
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
