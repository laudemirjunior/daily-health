import styled from "styled-components";

export const StyleCardCreate = styled.div`
  width: 300px;
  height: 350px;
  background-color: white;
  position: absolute;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  form {
    height: inherit;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    color: black;
    .title {
      color: black;
    }
    svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
      font-size: 30px;
      color: red;
      cursor: pointer;
    }
    h2 {
      text-align: center;
    }
  }
`;
