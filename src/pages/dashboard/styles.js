import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  .container {
    width: 100%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .menu {
    max-width: 300px;
    display: none;
    align-items: center;
    height: calc(100vh - 60px);
    margin-right: 20px;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  .cards {
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (min-width: 900px) {
      flex-wrap: nowrap;
    }
  }

  .card {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100%;
    max-width: 600px;
    min-width: 320px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    padding: 10px;
  }
`;

export const Poligon = styled.div`
  position: absolute;
  background-color: var(--blue);
  top: 60px;
  left: 0;
  z-index: -1;
  height: calc(100vh - 60px);
  width: 100vw;
  clip-path: polygon(100% 0, 0 0, 0 100%);
  opacity: 0.6;
`;
