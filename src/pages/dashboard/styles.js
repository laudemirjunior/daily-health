import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    max-width: 1366px;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    grid-template-areas: "bar cards cards";
  }
  .cards {
    grid-area: cards;
  }
  .bar {
    grid-area: bar;
  }
`;
