import styled from "styled-components";

export const StyleBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--bar);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  align-items: center;
  .bar {
    width: 100%;
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
  }
  .buttons {
    display: flex;
  }
  .info {
    display: none;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border-left: 1px solid var(--black);
  }
  .FaBars {
    display: block;
    margin: 10px;
    font-size: 20px;
  }
  @media (min-width: 400px) {
    .info {
      display: block;
    }
    .FaBars {
      display: none;
    }
  }
`;
