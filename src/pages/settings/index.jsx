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
import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { NameUserContext } from "../../Providers/nameUser";

const Settings = () => {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const { decodedToken, isExpired } = useJwt(token);
  const [userInput, setUserInput] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const history = useHistory();
  const { nameUser, setNameUser } = useContext(NameUserContext);

  const handleNewUserName = (data) => {
    const id = decodedToken.user_id;

    api
      .patch(`/users/${id}/`, userInput, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setNameUser(data.username);
      })

      .catch((err) => console.log(err.message));
  };
  const open = () => {
    setShowCard(!showCard);
  };
  // const userName = () => {
  //   setUserInfo(localStorage.getItem("@KenzieHealth:username"));
  // };
  // useEffect(() => {
  //   userName();
  // });
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
                  <span>Username: {nameUser}</span>
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
