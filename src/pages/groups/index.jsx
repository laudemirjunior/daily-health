import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer, Poligon } from "./styles.js";
import { useContext, useState } from "react";
import CardMyGroups from "../../components/cardMyGroups";
import Button from "../../components/button";
import CardCreateGroup from "../../components/cardCreateGroup";
import CardGroups from "../../components/cardGroups";
import { GroupListContext } from "../../Providers/groupList";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { Redirect } from "react-router";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const Groups = () => {
  const [showCard, setShowCard] = useState(false);

  const open = () => {
    setShowCard(!showCard);
  };

  const { groupList, next, prev, loading } = useContext(GroupListContext);
  const { myGroupList } = useContext(MyGroupListContext);
  if (!localStorage.getItem("@KenzieHealth:token")) {
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
              <h1>Meus Grupos</h1>
              <Button onClick={open}>Criar grupo</Button>
              {showCard && <CardCreateGroup open={open} />}
              {myGroupList.map((item) => {
                return <CardMyGroups item={item} />;
              })}
            </div>
            <div className="card">
              <div className="btn">
                <GrCaretPrevious onClick={prev} />
                <h1>Todos os Grupos</h1>
                <GrCaretNext onClick={next} />
              </div>
              {groupList.map((item) => {
                return <CardGroups item={item} />;
              })}
            </div>
          </div>
        </div>

        <Poligon />
      </MainContainer>
    </>
  );
};

export default Groups;
