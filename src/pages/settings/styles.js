import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .container {
    width: 100%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 10px;
  }
  .menu {
    max-width: 300px;
    display: none;
    align-items: center;
    height: calc(100vh - 60px);
    margin-right: 30px;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  .cards {
    width: 100%;
    height: 80%;
  }
  .card {
    width: 100%;
    max-width: 900px;
    min-width: 320px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--background);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);

    h1 {
      color: var(--white);
      align-self: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 40px;
    }
    img {
      width: 50px;
      height: 50px;
    }
    .divInput {
      max-width: 450px;
    }
  }
`;
