import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
  h3 {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;
export const LeftContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 40px 0px;
  width: 100%;
  height: 600px;
  padding: 100px;
  @media (min-width: 900px) {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 200px 200px 0px;
    height: 800px;
    width: 48%;
  }
`;
export const RigthContainer = styled.div`
  background: rgba(253, 127, 170, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px 0px 0px;
  width: 100%;
  height: 600px;
  padding: 100px;
  color: var(--white);
  margin-top: 20px;
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
    background: rgba(253, 127, 170, 0.8);
    border-radius: 100px 0px 34px 100px;
    width: 48%;
  }
`;
