import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  gap: 2%;
  margin: 3% auto;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    h3 {
      font-size: 60px;
    }
  }
`;

export const LeftContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  border-radius: 0px 40px 40px 0px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  h3 {
    margin-top: 30%;
  }
  @media (min-width: 900px) {
    height: 800px;
  }
`;

export const RigthContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px 0px 0px;
  width: 100%;
  height: 600px;
  padding: 20px;
  margin-top: 20px;
  background: var(--menu);
  h3 {
    margin-top: 12%;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  span {
    width: 120px;
  }

  @media (min-width: 900px) {
    height: 800px;
    border-radius: 100px 0px 34px 100px;
    width: 48%;
  }
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
