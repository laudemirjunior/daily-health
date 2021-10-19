import styled from "styled-components";
import background from "../../images/background1.png";

export const StyleCardTask = styled.div`
  width: 100%;
  min-height: 130px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-image: url(${background});
  background-size: 100% 100%;
  color: white;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .actions {
    display: flex;
    align-items: end;
  }
`;
