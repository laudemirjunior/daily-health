<<<<<<< HEAD
import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import Card from "../../components/card";
import CardTask from "../../components/cardTask";

const Dashboard = () => {
  return (
    <>
      <Bar />

      <MainContainer>
        <div className="container">
          <Hamburguer className="bar" />
          <Card className="cards" />
          <Card className="cards" />
        </div>
      </MainContainer>
    </>
  );
=======
const Dashboard = () => {
  return <div></div>;
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c
};

export default Dashboard;
