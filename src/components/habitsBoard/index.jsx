import Button from "../button";
import CardTask from "../cardTask";
import { StyleCard, Container } from "./styles";

const HabitsBoard = () => {
  return (
    <div>
      <StyleCard>
        <h1>Meus Habitos</h1>
        <Button>Criar Habito</Button>
        <Container>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </Container>
      </StyleCard>
    </div>
  );
};

export default HabitsBoard;
