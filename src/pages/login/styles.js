import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  background-color: var(--white);
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 350px;
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  span {
    font-size: 13px;
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
    border-radius: 10px;
  }
`;
export const Poligon = styled.div`
  position: absolute;
  background-color: var(--background);
  left: 0px;
  z-index: -1;
  height: calc(100vh - 60px);
  width: 100vw;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 20%);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Countainer = styled.div`
  z-index: 1;
  background-color: transparent;
  height: calc(100vh - 60px);
  width: 100vw;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .link {
    border-bottom: 1px solid #ddd;
    transition: color 0.25s ease-in;
  }
  .link:hover {
    color: #777;
  }
  h1 {
    color: var(--white);
    font-size: 84px;
    margin-top: 11%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--background);
    height: calc(100vh - 60px);
    width: 50vw;
  }
`;

export const AnimateDiv = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 60px);
    width: 50vw;
  }
`;
