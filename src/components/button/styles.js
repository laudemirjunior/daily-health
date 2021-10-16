import styled from "styled-components";

export const StyleButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: var(--button);
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;

  span{
    font-size: 22px;
    color:var(--white);
  }
  .ou{
    position:relative;
    top:96%;
    right:15%;
  }

  .ou span{
    font-size: 22px;
    color:var(--black);
  }
`;
