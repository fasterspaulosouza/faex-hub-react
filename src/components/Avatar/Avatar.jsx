/**
 * Avatar.jsx - COMPONENTE REUTILIZÁVEL DE AVATAR
 *
 * Este componente exibe uma foto de perfil circular (avatar).
 * Ele é "reutilizável" — pode ser usado em qualquer lugar da aplicação
 * apenas passando propriedades (props) diferentes.
 *
 * Conceitos importantes aqui:
 * - Props (propriedades): dados que um componente pai passa para o filho.
 * - Renderização condicional: exibir algo diferente com base em uma condição.
 * - Styled-components: CSS escrito dentro do JavaScript.
 */

import { Box } from "@mui/material";
import styled from "styled-components";

// ============================================================
// STYLED COMPONENTS
// styled(Box) cria um novo componente baseado no Box do MUI,
// mas com estilos CSS personalizados.
// ============================================================

// Container circular do avatar.
// Recebe "props" dinâmicas (color e size) para personalizar cada avatar.
const AvatarContainer = styled(Box)`
  border-radius: 50%; /* Torna o elemento perfeitamente circular */
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  overflow: hidden; /* Esconde qualquer parte da imagem que ultrapasse o círculo */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave ao redor */
  border: 3px solid rgba(255, 255, 255, 0.6); /* Borda branca semitransparente */
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */

  /* Props dinâmicas: o styled-components permite acessar as props do componente
     para gerar CSS dinâmico. Aqui, "color" e "size" são passados como props. */
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  /* Efeito hover: ao passar o mouse, o avatar aumenta 10% de tamanho. */
  &:hover {
    transform: scale(1.1);
  }

  /* Estiliza a tag <img> que está DENTRO do AvatarContainer. */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* A imagem preenche o espaço sem distorcer */
  }
`;

// Placeholder exibido quando NÃO há imagem disponível.
const AvatarPlaceholder = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

// ============================================================
// COMPONENTE AVATAR
// ============================================================

// Desestruturação de props: em vez de receber "props" e usar "props.src",
// extraímos diretamente { src, alt, className, color, size }.
// Os valores após "=" são VALORES PADRÃO — usados quando a prop não é fornecida.
const Avatar = ({ src, alt, className = "", color = "#667eea", size = 60 }) => {
  return (
    <AvatarContainer className={className} color={color} size={size}>
      {/* Renderização condicional com operador ternário (condição ? verdadeiro : falso).
          Se "src" existir (tiver valor), exibe a imagem.
          Se "src" for vazio/undefined, exibe o placeholder com o texto "alt". */}
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <AvatarPlaceholder>{alt}</AvatarPlaceholder>
      )}
    </AvatarContainer>
  );
};

export default Avatar;
