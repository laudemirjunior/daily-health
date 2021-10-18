import styled from "styled-components";

export const StyleHamburguer = styled.div`
  width: 100%;
  min-width: 250px;
  height: 80%;
  border-radius: 20px;
  color: var(--white);
  background-color: var(--background);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  div {
    width: 150px;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      margin-bottom: 20px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      border-radius: 30px;
      padding: 10px;
      svg {
        font-size: 20px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
`;
