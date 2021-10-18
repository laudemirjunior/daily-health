import styled from "styled-components";

export const StyleCardTask = styled.div`
  width: 100%;
  min-height: 130px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    svg {
      cursor: pointer;
    }
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
    border: 1px solid green;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: lightgreen;
    }
  }
`;
