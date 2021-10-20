import styled from "styled-components";
import background from "../../images/background-home.png";

export const MainContainer = styled.div`
  background-color: white;
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1500px;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  .background {
    width: 80%;
    height: 100%;
    display: none;
    flex-direction: column;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: right;
    h1 {
      width: 350px;
      height: 350px;
      font-size: 84px;
    }
  }
  .buttons {
    min-width: 300px;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h1 {
      width: 260px;
      font-size: 60px;
      display: block;
    }
    span {
      width: 250px;
      height: 100px;
      font-size: 26px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (min-width: 768px) {
    .background {
      display: flex;
    }
    .buttons {
      h1 {
        display: none;
      }
    }
  }
`;

export const Poligon = styled.div`
  position: absolute;
  background-color: var(--menu);
  top: 60px;
  left: 0px;
  z-index: -1;
  height: calc(100% - 60px);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 70%);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
