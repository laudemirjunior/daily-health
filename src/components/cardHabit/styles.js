import styled from "styled-components";
import background from "../../images/background.png";

export const StyleCardTask = styled.div`
  width: 100%;
  min-height: 130px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
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
  .active {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .progress {
    margin: auto;
    width: 100px;
    height: 10px;
    background-color: var(--blue);
    border-radius: 5px;
    overflow: hidden;
  }
  .percentage {
    height: 10px;
    background-color: var(--bar);
    border-radius: 5px;
  }
`;
