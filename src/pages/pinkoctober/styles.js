import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: var(--white);
  font-size: 14px;

  h3 {
    font-size: 28px;
  }
  div {
    margin-top: 50px;
    background-color: var(--background);
    padding: 50px;
    width: 80%;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    font-size: 18px;
    div {
      width: 60%;
      height: 600px;
    }
    h3 {
      font-size: 40px;
    }
  }
`;
