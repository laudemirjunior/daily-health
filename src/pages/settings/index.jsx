import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import { useJwt } from "react-jwt";
import { useState, useEffect } from "react";
import api from "../../services";
import { TextField } from "@material-ui/core";
import Button from "../../components/button";
import ellipse from "../../images/ellipse.png";
import axios from "axios";
import { AiFillSetting } from "react-icons/ai";
const Settings = () => {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const { decodedToken, isExpired } = useJwt(token);
  const [userInput, setUserInput] = useState("");
  const [link, setLink] = useState(
    `https://kenzie-habits.herokuapp.com/users/`
  );
  const [userGroup, setUserGroup] = useState([]);

  const [userInfo, setUserInfo] = useState([
    {
      username: "null",
      email: "null",
    },
  ]);

  const handleNewUserName = ({ id }) => {
    api
      .patch(`/users/${id}`, userInput, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => console.log("sucesso"))

      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   if (link !== null) {
  //     axios
  //       .get(link, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       })
  //       .then((response) => {
  //         setUserGroup(response.data.results.filter((user) => user.id === 125));
  //         setLink(response.data.next);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [userGroup, link]);

  console.log(userGroup);
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
              <div>
                <img src={ellipse} alt="" />
                <h3>Username: {userInfo[0].username}</h3>
                <h3>email: {userInfo[0].email}</h3>
              </div>
              <div className="divInput">
                <h3> Escolha o novo nome de usuario: </h3>

                <TextField
                  label="Username"
                  type="text"
                  value={userInput}
                  onChange={(event) => setUserInput(event.target.value)}
                ></TextField>
              </div>
              <Button onClick={() => handleNewUserName(decodedToken.user_id)}>
                Update Profile
              </Button>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Settings;
