import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import { useState } from "react";
import api from "../../services";
import { useEffect } from "react";
import CardHabit from "../../components/cardHabit";
import CardMyGroups from "../../components/cardMyGroups";

const Dashboard = () => {
  const [habbits, setHabbits] = useState([]);
  const [groups, setGroups] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHabits:token")) || ""
  );

  const loadHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjAyMTM1LCJqdGkiOiJiZTVhZjJkODkyOWI0YWYwODZiODI3NmExYjE4NDIyOCIsInVzZXJfaWQiOjE1fQ.EYZCiQ0c-BM-LNoCDX5SFVtolZSBycFjrA_9fxyFVog`,
        },
      })
      .then((response) => setHabbits(response.data))
      .catch((err) => console.log(err));
  };

  const loadGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjAyMTM1LCJqdGkiOiJiZTVhZjJkODkyOWI0YWYwODZiODI3NmExYjE4NDIyOCIsInVzZXJfaWQiOjE1fQ.EYZCiQ0c-BM-LNoCDX5SFVtolZSBycFjrA_9fxyFVog`,
        },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  }, []);

  console.log(groups);

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
              <h1>Meus Hábitos</h1>
              {habbits.map((item) => {
                return <CardHabit item={item} />;
              })}
            </div>
            <div className="card">
              <h1>Meus Grupos</h1>
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

export default Dashboard;
