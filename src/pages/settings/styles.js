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
    justify-content: space-between;
    background-color: var(--background);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-size: 20px;
    gap: 10px;
    h1 {
      color: var(--white);
      align-self: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 40px;
    }
    .profile {
      height: 50%;
    }
    img {
      width: 50px;
      height: 50px;
    }
    .divInput {
      max-width: 450px;
    }
    button {
      align-self: flex-end;
    }
  }
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 20px;
  align-self: center;
  min-width: 200px;
  width: 48%;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%), 0 0px 40px rgb(0 0 0 / 8%);
  border-radius: 5px;
  height: 100%;
  max-height: 340px;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 15px;
    margin: 10px;
  }
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
