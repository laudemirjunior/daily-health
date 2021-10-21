import styled from "styled-components";
import background from "../../images/background.png";
import backgroundTwo from "../../images/background3.png";

export const StyleCardTask = styled.div`
  width: 100%;
  min-height: 130px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-image: ${(props) =>
    props.change ? `url(${background})` : `url(${backgroundTwo})`};
  background-size: 100% 100%;
  color: white;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .actions {
    display: flex;
    align-items: end;
  }
  .active {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  .active:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  .progress {
    margin: auto;
    width: 100px;
    height: 10px;
    background-color: #006400;
    border-radius: 5px;
    overflow: hidden;
  }
  .percentage {
    height: 10px;
    background-color: #00ff00;
    border-radius: 5px;
  }
  .iconHabit {
    transition: 0.4s;
  }
  .iconHabit:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  .lottie {
    position: relative;
    bottom: 0;
    right: 3px;
    z-index: 0;
  }
`;
