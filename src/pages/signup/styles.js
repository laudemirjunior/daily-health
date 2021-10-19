import styled from "styled-components";

export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 100%;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  background-color: var(--menu);
  left: 0px;
  z-index: -1;
  height: calc(100vh - 60px);
  width: 100vw;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 70%);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Countainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 70px;
  }
  @media screen and (min-width: 768px) {
    background-color: var(--menu);
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
