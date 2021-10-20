import styled from "styled-components";

export const StyleButton = styled.button`
  width: 250px;
  min-height: 50px;
  background-color: var(--bar);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: var(--white);
  font-weight: bold;
  transition: 0.3s;
  :hover {
    filter: saturate(2);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
