import Bar from "../../components/bar"
import { Content } from "./styles"

const PinkOctober = () => {
  return (
    <Content>
      <Bar />
        <div className="content">
        <div className="cabecalho"><span>Você sabe o que é Outubro Rosa?</span></div>
          <div className="text">
            {/* <p>
              Outubro Rosa é uma campanha anual realizada mundialmente em outubro, com a intenção de alertar a sociedade sobre o diagnóstico precoce do câncer de mama. A mobilização visa também à disseminação de dados preventivos e ressalta a importância de olhar com atenção para a saúde, além de lutar por direitos como o atendimento médico e o suporte emocional, garantindo um tratamento de qualidade.<br></br>

              Durante o mês, diversas instituições abordam o tema para encoContentrajar mulheres a realizarem seus exames e muitas até os disponibilizam. Iniciativas como essa são fundamentais para a prevenção, visto que nos estágios iniciais, a doença é assintomática.<br></br>

              Sobre o câncer de mama<br></br>

              O câncer de mama é um tumor maligno que ataca o tecido mamário e é um dos tipos mais comuns, segundo o Instituto Nacional do Câncer – INCA. Ele se desenvolve quando ocorre uma alteração de apenas alguns trechos das moléculas de DNA, causando uma multiplicação das células anormais que geram o cisto.<br></br>

              A importância da mamografia

              Segundo o Instituto Oncoguia, diagnosticar o câncer precocemente aumenta significantemente as chances de cura, 95% dos casos identificados em estágio inicial têm possibilidade de cura. Por isso, a mamografia é imprescindível, sendo o principal método para o rastreamento da doença.

              De acordo com a Sociedade Brasileira de Mastologia (SBM) das 11,5 milhões de mamografias que deveriam ter sido realizadas no ano passado, apenas 2,7 milhões foram feitas. A diminuição acentuada do exame é um fator de risco para milhares de mulheres e um alerta para a importância da campanha.
              </p> */}
          </div>
          
        </div>
    </Content>
  )
};

export default PinkOctober;
