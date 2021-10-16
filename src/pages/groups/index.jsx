import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import { useState } from "react";
import api from "../../services";
import { useEffect } from "react";
import CardMyGroups from "../../components/cardMyGroups";
import Button from "../../components/button";
import CardCreateGroup from "../../components/cardCreateGroup";

const Groups = () => {
  const [habbits, setHabbits] = useState([]);
  const [groups, setGroups] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const open = () => {
    setShowCard(!showCard);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHabits:token")) || ""
  );

  const loadHabits = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjAyMTM1LCJqdGkiOiJiZTVhZjJkODkyOWI0YWYwODZiODI3NmExYjE4NDIyOCIsInVzZXJfaWQiOjE1fQ.EYZCiQ0c-BM-LNoCDX5SFVtolZSBycFjrA_9fxyFVog`,
        },
      })
      .then((response) => setHabbits(response.data))
      .catch((err) => console.log(err));
  };

  const loadGroups = () => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjAyMTM1LCJqdGkiOiJiZTVhZjJkODkyOWI0YWYwODZiODI3NmExYjE4NDIyOCIsInVzZXJfaWQiOjE1fQ.EYZCiQ0c-BM-LNoCDX5SFVtolZSBycFjrA_9fxyFVog`,
        },
      })
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  }, []);

  useEffect(() => {
    loadGroups();
  }, []);

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
              <h1>Meus Grupos</h1>
              <Button onClick={open}>Criar grupo</Button>
              {showCard && <CardCreateGroup open={open} />}
              {habbits.map((item) => {
                return <CardMyGroups item={item} />;
              })}
            </div>
            <div className="card">
              <h1>Todos os Grupos</h1>
              {groups.map((item) => {
                return <CardMyGroups item={item} />;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Groups;
