import styled from "styled-components";

export const StyleHamburguer = styled.div`
  width: 100%;
  min-width: 250px;
  height: 80%;
  border-radius: 20px;
  background-color: var(--menu);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: var(--black);
  div {
    width: 150px;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 60px;
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
  .infos {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
