import styled from "styled-components";
import background from "../../images/background2.png";

export const StyleCardTask = styled.div`
  color: white;
  cursor: pointer;
  width: 100%;
  min-height: 130px;
  background-image: url(${background});
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  :hover {
    background-color: var(--iceCreamBlue);
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .info {
    width: 90%;
  }
  .svg {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .iconGroup {
    transition: 0.4s;
  }
  .iconGroup:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Button = styled.button`
  width: 100px;
  background-color: var(--bar);
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 3px;
  font-weight: bold;
  transition: 0.3s;
  :hover {
    filter: saturate(2);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
