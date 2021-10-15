import styled from "styled-components";

export const StyleCard = styled.div`
  width: 100%;
  height: 800px;
  background-color: var(--background);
  border-radius: 20px;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: scroll;
  div {
    margin-top: 10px;
  }
`;
