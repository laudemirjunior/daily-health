import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import { useContext, useState } from "react";
import CardMyGroups from "../../components/cardMyGroups";
import Button from "../../components/button";
import CardCreateGroup from "../../components/cardCreateGroup";
import CardGroups from "../../components/cardGroups";
import { GroupListContext } from "../../Providers/groupList";
import { MyGroupListContext } from "../../Providers/myGroupList";

const Groups = () => {
  const [showCard, setShowCard] = useState(false);

  const open = () => {
    setShowCard(!showCard);
  };

  const { groupList } = useContext(GroupListContext);
  const { myGroupList } = useContext(MyGroupListContext);

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
              <h1>Todos os Grupos</h1>
              {groupList.map((item) => {
                return <CardGroups item={item} />;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Groups;
