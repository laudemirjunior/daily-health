import styled from "styled-components";

export const StyleBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--bar);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  align-items: center;
 
  .bar {
    width: 100%;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 30px;
    padding: 10px;
    font-weight: bold;
  }
  .buttons {
    display: flex;
  }
  .info {
    display: none;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
    border-left: 1px solid var(--black);
  }
  .info.button{
    display:block;
    border-left:none;
  }
  .FaBars {
    display: block;
    margin-right: 30px;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    .info {
      display: block;
    }
    .FaBars {
      display: none;
    }
  }
`;

export const MenuHamburguer = styled.div`
  width: 200px;
  height: 80vh;
  position: absolute;
  right: 50px;
  top: 60px;
  z-index: 1;
  display: ${(props) => (props.open ? "none" : "block")};
  @media (min-width: 768px) {
    display: none;
  }
`;
