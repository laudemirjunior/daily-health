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
`;
