import Bar from "../../components/bar";
import { Container } from "./styles.js";
import { motion } from "framer-motion";

const PinkOctober = () => {
  return (
    <div>
      <Bar />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div>
            <h3> Você sabe o que é Outubro Rosa?</h3>
            <span>
              Outubro Rosa é uma campanha anual realizada mundialmente em
              outubro, com a intenção de alertar a sociedade sobre o diagnóstico
              precoce do câncer de mama. A mobilização visa também à
              disseminação de dados preventivos e ressalta a importância de
              olhar com atenção para a saúde, além de lutar por direitos como o
              atendimento médico e o suporte emocional, garantindo um tratamento
              de qualidade.
            </span>
            <h5>Sobre o câncer de mama</h5>
            <span>
              O câncer de mama é um tumor maligno que ataca o tecido mamário e é
              um dos tipos mais comuns, segundo o Instituto Nacional do Câncer –
              INCA. Ele se desenvolve quando ocorre uma alteração de apenas
              alguns trechos das moléculas de DNA, causando uma multiplicação
              das células anormais que geram o cisto.
            </span>
            <h5>A importância da mamografia</h5>
            <span>
              Segundo o Instituto Oncoguia, diagnosticar o câncer precocemente
              aumenta significantemente as chances de cura, 95% dos casos
              identificados em estágio inicial têm possibilidade de cura. Por
              isso, a mamografia é imprescindível, sendo o principal método para
              o rastreamento da doença. De acordo com a Sociedade Brasileira de
              Mastologia (SBM) das 11,5 milhões de mamografias que deveriam ter
              sido realizadas no ano passado, apenas 2,7 milhões foram feitas. A
              diminuição acentuada do exame é um fator de risco para milhares de
              mulheres e um alerta para a importância da campanha.
            </span>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default PinkOctober;
