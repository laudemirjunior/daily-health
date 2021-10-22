import Bar from "../../components/bar";
import {
  MainContainer,
  LeftContainer,
  RigthContainer,
  Poligon,
} from "./styles.js";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <Bar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MainContainer>
          <LeftContainer>
            <h3>Sobre o App</h3>
            <span>
              Com uma abordagem simple e facil o Daily Health e um aplicativo
              desenvolvido para voce comecar a desenvovler aquele habito que
              sempre quis.
            </span>
          </LeftContainer>
          <RigthContainer>
            <h3>Desenvolvido Por:</h3>
            <ul>
              <li>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U022091F97Z-dce4a65b567f-72"
                  alt="Foto dev"
                />
                <span>Laudemir</span>
                <a
                  href="https://www.linkedin.com/in/nlaudemir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQHVj5Ys3ni2MA/profile-displayphoto-shrink_200_200/0/1622549941138?e=1640217600&v=beta&t=YZppAjbpSXhqVTHiu1XTxvt7NNAqdjVqaNNJqZqFyyE"
                  alt="Foto dev"
                />
                <span>Matheus Bueno</span>
                <a
                  href="https://www.linkedin.com/in/matheus-b-648aaa111/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U0235UNGVHT-01a51c9a0d80-512"
                  alt="Foto dev"
                />
                <span>Julia</span>
                <a
                  href="https://www.linkedin.com/in/julia-gama-730566213/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U020WPS4Y80-866d8dc820b3-512"
                  alt="Foto dev"
                />
                <span>Joao Pedro</span>
                <a
                  href="https://www.linkedin.com/in/joao-pedro-nonato-santos-2b8aa851/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </RigthContainer>
        </MainContainer>
      </motion.div>
      <Poligon />
    </div>
  );
};

export default AboutUs;
