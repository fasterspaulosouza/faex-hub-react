/**
 * Login.styles.js - ESTILOS DO COMPONENTE DE LOGIN
 *
 * Este arquivo usa a biblioteca "styled-components" para criar componentes
 * que já possuem CSS embutido. É como se cada componente trouxesse
 * seu próprio estilo, sem precisar de arquivos .css separados.
 *
 * Conceitos importantes aqui:
 * - styled-components: CSS-in-JS (CSS escrito dentro do JavaScript).
 * - keyframes: animações CSS.
 * - Template literals (`texto ${variavel}`): strings com interpolação.
 * - Media queries: estilos responsivos para diferentes tamanhos de tela.
 * - Props dinâmicas: CSS que muda com base nas props do componente.
 * - Seletor "&&": aumenta a especificidade para sobrescrever estilos do MUI.
 */

// Importa componentes do Material UI que serão "estilizados" (customizados).
import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";

// "styled" é a função principal do styled-components.
// "keyframes" permite criar animações CSS reutilizáveis.
import styled, { keyframes } from "styled-components";

// ============================================================
// ANIMAÇÃO DE FLUTUAÇÃO
// ============================================================

// "keyframes" cria uma animação CSS com nome.
// Esta animação faz os avatares "flutuarem" subindo e descendo suavemente.
// - 0% e 100%: posição inicial e final (iguais, para criar um ciclo suave).
// - 33%: sobe 15px e inclina 2 graus para a direita.
// - 66%: desce 10px e inclina 2 graus para a esquerda.
const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(10px) rotate(-2deg);
  }
`;

// ============================================================
// COMPONENTES ESTILIZADOS
// ============================================================

// Container principal da página de login.
// styled(Box) cria um componente baseado no Box do MUI, mas com CSS personalizado.
// A sintaxe com crase (`) é chamada de "tagged template literal".
export const LoginContainer = styled(Box)`
  min-height: 100vh; /* Ocupa no mínimo 100% da altura da tela (vh = viewport height) */
  display: flex; /* Ativa o Flexbox para organizar os filhos */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  position: relative; /* Permite que filhos com "absolute" se posicionem em relação a este */
  background-color: #e8ecff; /* Cor de fundo lilás claro */
  overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse os limites */
  padding: 20px; /* Espaçamento interno de 20px em todos os lados */
`;

// Container dos avatares flutuantes.
// Ocupa toda a tela mas fica "atrás" do card de login (z-index: 0).
// "pointer-events: none" faz os cliques "passarem através" dos avatares.
export const FloatingAvatars = styled(Box)`
  position: absolute; /* Posicionamento absoluto: sai do fluxo normal do layout */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Cliques atravessam este elemento */
  z-index: 0; /* Fica atrás de elementos com z-index maior */
`;

// Cada avatar flutuante individual.
// Usa "props dinâmicas" para definir posição e comportamento.
// No styled-components, acessamos props usando ${(props) => ...} dentro do CSS.
export const FloatingAvatar = styled(Box)`
  position: absolute; /* Cada avatar é posicionado individualmente na tela */

  /* Aplica a animação "float" criada acima.
     6s = duração de 6 segundos.
     ease-in-out = começa e termina devagar, acelera no meio.
     infinite = repete para sempre. */
  animation: ${float} 6s ease-in-out infinite;

  /* animation-delay: atrasa o início da animação.
     Isso faz cada avatar flutuar em momentos diferentes, criando um efeito natural.
     O "$" antes do nome da prop é uma convenção do styled-components v5+
     para indicar que a prop é apenas para estilização (transient prop). */
  animation-delay: ${(props) => props.$delay || "0s"};

  /* Posição dinâmica: cada avatar pode ter top, bottom, left ou right diferentes.
     O "&&" no início verifica se a prop existe antes de aplicar o estilo. */
  ${(props) => props.$top && `top: ${props.$top};`}
  ${(props) => props.$bottom && `bottom: ${props.$bottom};`}
  ${(props) => props.$left && `left: ${props.$left};`}
  ${(props) => props.$right && `right: ${props.$right};`}

  /* Media query: aplica estilos diferentes em telas menores que 768px (celular).
     Avatares com hideOnMobile=true ficam escondidos no celular. */
  @media (max-width: 768px) {
    display: ${(props) => (props.$hideOnMobile ? "none" : "block")};
  }
`;

// Logo da aplicação exibido no topo do card de login.
// styled.img cria um componente estilizado baseado na tag HTML <img>.
export const Logo = styled.img`
  display: block; /* Remove o espaço extra que imagens inline têm por padrão */
  max-width: 180px; /* Largura máxima de 180px (a imagem nunca fica maior que isso) */
  height: auto; /* Altura automática: mantém a proporção original da imagem */
  margin: 0 auto 24px; /* 0 em cima, auto nas laterais (centraliza), 24px embaixo */

  /* Em telas maiores que 1024px (desktop), o logo fica um pouco maior. */
  @media (min-width: 1024px) {
    max-width: 200px;
    margin-bottom: 28px;
  }
`;

// Card central que contém o formulário de login.
// O "&&" (duplo ampersand) aumenta a ESPECIFICIDADE do CSS.
// Isso é necessário para sobrescrever os estilos padrão do MUI,
// que têm alta especificidade. Sem "&&", nossos estilos seriam ignorados.
export const LoginCard = styled(Card)`
  && {
    /* rgba() define cores com transparência. O último valor (0.97) é a opacidade.
       0 = totalmente transparente, 1 = totalmente opaco. */
    background: rgba(255, 255, 255, 0.97);

    /* backdrop-filter: blur() cria o efeito "glassmorphism" (vidro fosco).
       Ele desfoca o que está ATRÁS do elemento, criando um efeito moderno. */
    backdrop-filter: blur(10px);

    border-radius: 24px; /* Cantos arredondados (quanto maior o valor, mais arredondado) */
    padding: 48px 40px; /* Espaçamento interno: 48px vertical, 40px horizontal */

    /* box-shadow cria sombra: deslocamento-x, deslocamento-y, desfoque, cor.
       Aqui: 0 horizontal, 20px para baixo, 40px de desfoque, preto com 8% opacidade. */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

    width: 100%; /* Ocupa toda a largura disponível */
    max-width: 460px; /* Mas nunca ultrapassa 460px */
    z-index: 1; /* Fica ACIMA dos avatares flutuantes (que têm z-index: 0) */
    position: relative;

    /* Responsividade: em telas grandes (desktop), o card fica um pouco maior. */
    @media (min-width: 1024px) {
      max-width: 480px;
      padding: 52px 44px;
    }
  }
`;

// Título "Entre na sua Conta".
export const Title = styled(Typography)`
  && {
    font-size: 1.5rem; /* rem = relativo ao tamanho da fonte raiz (geralmente 16px) */
    font-weight: 600; /* Peso da fonte: 400=normal, 600=semi-bold, 700=bold */
    color: #2d3748; /* Cor cinza escuro */
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 1.6rem;
      margin-bottom: 36px;
    }
  }
`;

// Campo de texto personalizado (email e senha).
// Aqui sobrescrevemos várias classes internas do MUI usando seletores CSS aninhados.
// Classes como ".MuiOutlinedInput-root" são geradas automaticamente pelo MUI.
export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;

    /* Estiliza o container do input (borda, fundo, etc.) */
    .MuiOutlinedInput-root {
      border-radius: 10px;
      background: #fff;

      /* "&" referencia o elemento pai (neste caso, .MuiOutlinedInput-root).
         "&:hover" = quando o mouse passa por cima. */
      &:hover {
        background: #fff;
      }

      /* "&.Mui-focused" = quando o campo está selecionado/focado. */
      &.Mui-focused {
        background: #fff;
      }

      /* "fieldset" é o elemento HTML que o MUI usa para desenhar a borda. */
      fieldset {
        border-color: #e2e8f0; /* Cor da borda padrão */
        border-width: 1.5px;
      }

      /* Borda mais escura ao passar o mouse */
      &:hover fieldset {
        border-color: #b0b8c9;
      }

      /* Borda azul/roxa ao focar + sombra sutil ao redor */
      &.Mui-focused fieldset {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
    }

    /* Estiliza o texto digitado dentro do input */
    .MuiInputBase-input {
      padding: 14px 16px;
      font-size: 0.95rem;
    }

    /* Estiliza o label (texto flutuante acima do campo) */
    .MuiInputLabel-root {
      font-weight: 500;
      color: #4a5568;
      font-size: 0.95rem;
    }

    /* Label muda de cor quando o campo está focado */
    .MuiInputLabel-root.Mui-focused {
      color: #667eea;
    }
  }
`;

// Botão "Entrar" personalizado.
export const LoginButton = styled(Button)`
  && {
    background: #1e2533; /* Cor de fundo escura */
    color: #fff;
    border-radius: 10px;
    padding: 14px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 12px;
    text-transform: none; /* Remove o UPPERCASE padrão do MUI nos botões */
    height: 52px;
    box-shadow: none; /* Remove a sombra padrão do MUI */

    /* Efeito hover: cor mais escura + sobe 1px + adiciona sombra */
    &:hover {
      background: #151b27;
      transform: translateY(-1px); /* Move 1px para cima (efeito de "levantar") */
      box-shadow: 0 6px 16px rgba(30, 37, 51, 0.3);
    }

    /* Efeito active (ao clicar): volta à posição original */
    &:active {
      transform: translateY(0);
    }
  }
`;

// Link "Esqueceu sua senha?" estilizado.
export const ForgotPasswordLink = styled(Link)`
  && {
    color: #4a5568;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer; /* Muda o cursor para "mãozinha" ao passar por cima */
    text-align: center;
    display: block; /* Faz o link ocupar toda a largura (centralizado pelo text-align) */
    margin-top: 12px;
    text-decoration: none; /* Remove o sublinhado padrão dos links */

    &:hover {
      color: #2d3748;
      text-decoration: underline; /* Adiciona sublinhado apenas ao passar o mouse */
    }
  }
`;
