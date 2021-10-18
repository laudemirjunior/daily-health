import styled from "styled-components";

export const StyleHamburguer = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 20px;
  color: var(--white);
  background-color: var(--background);
  box-shadow: 10.3472px 11.4969px 72.4307px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  div {
    width: 120px;
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

      svg {
        font-size: 20px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
`;
