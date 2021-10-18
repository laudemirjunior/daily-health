import styled from "styled-components";
import background from "../../images/background-home.png";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1500px;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  .background {
    width: 60%;
    height: 100%;
    display: none;
    flex-direction: column;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: left;
    background-position: 30% 45%;
    background-size: cover;
    h1 {
      width: 350px;
      height: 350px;
      font-size: 84px;
    }
  }
  .buttons {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h1 {
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
  overflow: hidden;
  position: absolute;
  background-color: var(--background);
  left: 0px;
  z-index: -1;
  height: calc(100% - 60px);
  width: 100%;
  border-color: green;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 70%);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
