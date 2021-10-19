import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  background-color: var(--white);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 85vw;
  max-width: 375px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  span {
    font-size: 13px;
    margin-top: 12px;
  }
  a {
    text-decoration: none;
  }
  button {
    margin-top: 16px;
    color: var(--white);
  }
  .input {
    width: 240px;
  }
  .visibilityButton {
    color: grey;
    margin: inherit;
  }
  .link {
    color: var(--background);
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    background-color: var(--white);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 43.5vw;
    max-width: 375px;
    border-radius: 10px;

    span {
      font-size: 15px;
      margin-top: 16px;
    }
  }
`;
export const Poligon = styled.div`
  position: absolute;
  background-color: var(--background);
  left: 0px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  border-color: green;
  clip-path: polygon(0 0, 100% 0, 100% 125vw, 0 20%);
  @media screen and (min-width: 500px) {
    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 20%);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Countainer = styled.div`
  z-index: 1;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  input {
    background-color: white;
    border-radius: 6px;
  }

  h1 {
    color: var(--white);
    font-style: normal;
    font-weight: bold;
    margin-bottom: 25px;
    margin-top: 20px;
    font-size: 57px;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--background);
    height: 100vh;
    width: 50vw;

    h1 {
      margin-top: 75px;
      margin-bottom: 50px;
      font-size: 6.5vw;
      line-height: 98px;
    }
  }
`;

export const Animate_div = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 50vw;
  }
`;
