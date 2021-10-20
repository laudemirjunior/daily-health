import styled from "styled-components";

export const StyleCardCreate = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  position: absolute;
  border-radius: 20px;
  form {
    text-align: center;
    align-items: center;
    color: black;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    .title {
      color: black;
    }
    svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
      color: red;
    }
  }
`;
