import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 500px;
  width: 100%;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  span {
    font-size: 13px;
  }
  a {
    text-decoration: none;
  }
  button {
    margin-top: 16px;
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
`;
export const Poligon = styled.div`
  position: absolute;
  background-color: var(--menu);
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
  justify-content: center;

  h1 {
    font-size: 70px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--menu);
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
