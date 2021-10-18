import Bar from "../../components/bar";
import { MainContainer, LeftContainer, RigthContainer } from "./styles.js";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const AboutUs = () => {
  return (
    <div>
      <Bar />
      <MainContainer>
        <LeftContainer>
          <h3>Sobre o App</h3>
          <span>
            Com uma abordagem simple e facil o kenzie Health e um aplicativo
            desenvolvido para voce comecar a desenvovler aquele habito que
            sempre quis.{" "}
          </span>
        </LeftContainer>
        <RigthContainer>
          <h3>Desenvolvido Por:</h3>
          <ul>
            <li>
              <img alt="Foto dev" />
              <span>Nome do Dev</span>
              <a
                href="https://www.linkedin.com/in/matheus-b-648aaa111/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <img alt="Foto dev" />
              <span>Nome do Dev</span>
              <a
                href="https://www.linkedin.com/in/matheus-b-648aaa111/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <img alt="Foto dev" />
              <span>Nome do Dev</span>
              <a
                href="https://www.linkedin.com/in/matheus-b-648aaa111/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <img alt="Foto dev" />
              <span>Nome do Dev</span>
              <a
                href="https://www.linkedin.com/in/matheus-b-648aaa111/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </RigthContainer>
      </MainContainer>
    </div>
  );
};

export default AboutUs;
