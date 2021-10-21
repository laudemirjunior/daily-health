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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .menuItem {
    transition: 0.5s;
    :hover {
      color: #777;
      opacity: 0.8;
    }
  }
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
