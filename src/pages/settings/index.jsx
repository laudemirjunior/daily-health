import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import CardCreateSettings from "../../components/cardCreateSettings";
import { MainContainer, CardWrapper, CardHeading, Poligon } from "./styles.js";
import { useJwt } from "react-jwt";
import { useState, useContext } from "react";
import api from "../../services";
import Button from "../../components/button";
import k from "../../images/k.png";
import { AiFillSetting } from "react-icons/ai";
import { useHistory } from "react-router";
import { NameUserContext } from "../../Providers/nameUser";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { HabitListContext } from "../../Providers/habitsList";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Settings = () => {
  const token = JSON.parse(localStorage.getItem("@KenzieHealth:token")) || "";

  const { decodedToken, isExpired } = useJwt(token);

  const [userInput, setUserInput] = useState("");
  const [showCard, setShowCard] = useState(false);
  const { myGroupList } = useContext(MyGroupListContext);
  const { habitList } = useContext(HabitListContext);
  const history = useHistory();
  const { nameUser, setNameUser } = useContext(NameUserContext);

  const handleNewUserName = (data) => {
    const id = decodedToken.user_id;
    api
      .patch(`/users/${id}/`, userInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success(`Seu novo Username é: ${data.userName}`))
      .then(() => {
        setNameUser(data.userName);
        localStorage.setItem("@KenzieHealth:name", data.username);
      })

      .catch((err) => toast.error("Erro ao mudar seu Username!"));
  };
  const open = () => {
    setShowCard(!showCard);
  };

  return (
    <>
      <Bar />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <MainContainer>
          <div className="container">
            <div className="menu">
              <Hamburguer />
            </div>
            <div className="smallContainer">
              <div className="card">
                <h1 className="title">
                  Settings <AiFillSetting />
                </h1>
                <CardWrapper>
                  <CardHeading>Seu Perfil: </CardHeading>
                  <div>
                    <img src={k} alt="" />
                    <span>
                      Username:{" "}
                      {nameUser === ""
                        ? localStorage.getItem("@KenzieHealth:name")
                        : nameUser}
                    </span>
                    <span>
                      Voce Participa de {myGroupList.length} grupos diferentes!
                    </span>
                    <span>
                      Atualmente voce esta tentando ter {habitList.length}{" "}
                      habitos novos!
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
        <Poligon />
      </motion.div>
    </>
  );
};

export default Settings;
