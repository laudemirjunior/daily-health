import Bar from "../../components/bar";
import Hamburguer from "../../components/hamburguer";
import { MainContainer } from "./styles.js";
import Card from "../../components/card";

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
}
export default Dashboard;
