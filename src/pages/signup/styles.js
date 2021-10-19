import styled from "styled-components";

export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  background-color: var(--white);
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 480px;
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  a {
    text-decoration: none;
  }
  .input {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 50vw;
    border-radius: 10px;
  }
`;

export const Poligon = styled.div`
  position: absolute;
  background-color: var(--background);
  z-index: -1;
  height: calc(100vh - 60px);
  width: 100vw;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 20%);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Countainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 11%;
    margin-bottom: 20px;
    color: var(--white);
    font-weight: bold;
    font-size: 84px;
  }
  @media screen and (min-width: 768px) {
    background-color: var(--background);
    height: calc(100vh - 60px);
    width: 50%;
  }
`;

export const AnimateDiv = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    width: 50%;
  }
`;
