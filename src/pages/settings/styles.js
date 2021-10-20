import styled from "styled-components";
import background from "../../images/background1.png";

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
  .smallContainer {
    width: 100%;
    height: 95%;
  }
  .card {
    width: 100%;
    min-width: 320px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-size: 20px;
    gap: 10px;
    h1 {
      color: var(--black);
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
  width: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  height: 100%;
  max-height: 340px;
  background-image: url(${background});
  background-size: 100% 100%;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    width: 80%;
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

export const Poligon = styled.div`
  position: absolute;
  background-color: var(--blue);
  top: 60px;
  left: 0;
  z-index: -1;
  height: calc(100vh - 60px);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 70%);
`;
