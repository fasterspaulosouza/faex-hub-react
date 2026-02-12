/**
 * Login.jsx - PÁGINA DE LOGIN
 *
 * Este é o componente principal da tela de login.
 * Ele contém o formulário de autenticação e os avatares flutuantes de fundo.
 *
 * Conceitos importantes aqui:
 * - useState (Hook de estado): permite que o componente "lembre" de dados.
 * - Formulários controlados: o React controla o valor dos inputs.
 * - Array.map(): percorre uma lista e renderiza um componente para cada item.
 * - Eventos: handleSubmit, onChange, onClick.
 */

// useState é um "Hook" — uma função especial do React que adiciona funcionalidades
// a componentes funcionais. Neste caso, adiciona "estado" (memória) ao componente.
import { useState } from "react";

// Componentes do Material UI (MUI) — uma biblioteca de componentes prontos.
// Box: container genérico (como uma <div> com superpoderes).
// IconButton: botão que exibe apenas um ícone.
// InputAdornment: elemento decorativo dentro de um campo de texto (ex: ícone no final).
import { Box, IconButton, InputAdornment } from "@mui/material";

// Importa os componentes estilizados que criamos no arquivo Login.styles.js.
// Cada um desses é um componente com CSS embutido (styled-components).
import {
  LoginContainer,
  FloatingAvatars,
  FloatingAvatar,
  LoginCard,
  Logo,
  Title,
  StyledTextField,
  LoginButton,
  ForgotPasswordLink,
} from "./Login.styles";

// Importa o componente Avatar que criamos (componente reutilizável).
import Avatar from "../Avatar/Avatar";

// Ícones do Material UI para o botão de mostrar/ocultar senha.
import { Visibility, VisibilityOff } from "@mui/icons-material";

// ============================================================
// DADOS DOS AVATARES FLUTUANTES
// ============================================================

// Array de objetos: cada objeto representa um avatar flutuante na tela.
// Esses dados controlam a posição, tamanho, cor e animação de cada avatar.
// Nota: as imagens ficam na pasta "public/" e são acessadas pela raiz "/".
const avatars = [
  {
    src: "/rosto_01.png", // Caminho da imagem (pasta public)
    alt: "Usuário 1", // Texto alternativo (acessibilidade)
    color: "#f8c8d4", // Cor de fundo do avatar
    size: 120, // Tamanho em pixels
    top: "18%", // Posição: 18% do topo da tela
    left: "6%", // Posição: 6% da esquerda
    delay: "0s", // Atraso na animação (começa imediatamente)
  },
  {
    src: "/rosto_02.png",
    alt: "Usuário 2",
    color: "#f4a6a0",
    size: 85,
    top: "6%",
    right: "28%",
    delay: "1s", // Começa a animação 1 segundo depois
  },
  {
    src: "/rosto_03.png",
    alt: "Usuário 3",
    color: "#f5b0a8",
    size: 115,
    top: "8%",
    right: "4%",
    delay: "2s",
  },
  {
    src: "/rosto_04.png",
    alt: "Usuário 4",
    color: "#a8dbc5",
    size: 55,
    top: "42%",
    right: "16%",
    delay: "3s",
  },
  {
    src: "/rosto_05.png",
    alt: "Usuário 5",
    color: "#c8b8e8",
    size: 80,
    top: "45%",
    left: "16%",
    delay: "1.5s",
    hideOnMobile: true, // Este avatar será ESCONDIDO em telas pequenas (celular)
  },
  {
    src: "/rosto_06.png",
    alt: "Usuário 6",
    color: "#b8dfc8",
    size: 105,
    bottom: "10%", // Posição: 10% do fundo da tela
    left: "5%",
    delay: "2.5s",
  },
  {
    src: "/rosto_07.png",
    alt: "Usuário 7",
    color: "#f0cfa0",
    size: 130,
    bottom: "8%",
    right: "3%",
    delay: "0.5s",
    hideOnMobile: true,
  },
];

// ============================================================
// COMPONENTE LOGIN
// ============================================================

const Login = () => {
  // ---- HOOKS DE ESTADO (useState) ----
  // useState retorna um array com 2 elementos: [valorAtual, funçãoParaAlterar].
  // Usamos "desestruturação de array" para nomeá-los.
  // Quando chamamos a função "set", o React re-renderiza o componente com o novo valor.

  const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha digitada
  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado booleano: mostrar ou ocultar a senha

  // ---- FUNÇÕES DE EVENTO (handlers) ----

  // Função executada quando o formulário é enviado (botão "Entrar" clicado).
  // "event.preventDefault()" impede o comportamento padrão do formulário,
  // que seria recarregar a página inteira (comportamento HTML tradicional).
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login:", { email, senha });
  };

  // Função executada quando o link "Esqueceu sua senha?" é clicado.
  const handleEsqueceuSenha = () => {
    console.log("Esqueci minha senha");
  };

  // ---- JSX (o que será renderizado na tela) ----
  // JSX é uma sintaxe que parece HTML, mas é JavaScript.
  // O React converte isso em chamadas de função para criar elementos na tela.

  return (
    // Container principal que ocupa toda a tela
    <LoginContainer>

      {/* ---- AVATARES FLUTUANTES (fundo decorativo) ---- */}
      <FloatingAvatars>
        {/* .map() percorre o array "avatars" e retorna um componente para CADA item.
            É assim que renderizamos listas dinâmicas no React.
            A prop "key" é OBRIGATÓRIA em listas — ajuda o React a identificar cada item. */}
        {avatars.map((avatar, index) => (
          <FloatingAvatar
            key={index}
            // Props com "$" na frente: convenção do styled-components para props
            // que são usadas APENAS para estilização (não são passadas ao DOM HTML).
            // Isso evita warnings no console do navegador.
            $delay={avatar.delay}
            $top={avatar.top}
            $bottom={avatar.bottom}
            $left={avatar.left}
            $right={avatar.right}
            $hideOnMobile={avatar.hideOnMobile}
          >
            {/* Componente Avatar reutilizável que criamos */}
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              color={avatar.color}
              size={avatar.size}
            />
          </FloatingAvatar>
        ))}
      </FloatingAvatars>

      {/* ---- CARD DE LOGIN (formulário central) ---- */}
      {/* elevation={0} remove a sombra padrão do Card do MUI (usamos nossa própria sombra) */}
      <LoginCard elevation={0}>
        {/* Logo da aplicação */}
        <Logo src="/logo-faex-hub.png" alt="Logo FAEX Hub" />

        <Title variant="h2">Entre na sua Conta</Title>

        {/* Box com component="form" transforma o Box em um elemento <form> no HTML.
            onSubmit é o evento disparado quando o formulário é enviado. */}
        <Box component="form" onSubmit={handleSubmit}>

          {/* ---- CAMPO DE EMAIL ---- */}
          {/* Este é um "input controlado": o React controla seu valor através do estado.
              - value={email}: o valor exibido vem do estado.
              - onChange: a cada tecla digitada, atualiza o estado com o novo valor.
              - "e.target.value" é o texto atual do campo de input. */}
          <StyledTextField
            fullWidth // Ocupa 100% da largura disponível
            label="Email"
            type="email" // Tipo email: o navegador valida o formato automaticamente
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required // Campo obrigatório: o formulário não envia sem preencher
            variant="outlined" // Estilo com borda ao redor
          />

          {/* ---- CAMPO DE SENHA ---- */}
          <StyledTextField
            fullWidth
            label="Senha"
            // Operador ternário: se mostrarSenha for true, exibe como texto (visível).
            // Se for false, exibe como password (bolinhas/asteriscos).
            type={mostrarSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            required
            variant="outlined"
            // slotProps permite personalizar partes internas do componente MUI.
            // Aqui, adicionamos um ícone de olho no FINAL do campo de senha.
            slotProps={{
              input: {
                endAdornment: (
                  // InputAdornment posiciona um elemento dentro do campo de texto.
                  // position="end" coloca no final (lado direito).
                  <InputAdornment position="end">
                    {/* IconButton é um botão clicável com formato de ícone.
                        Ao clicar, inverte o valor de mostrarSenha (true <-> false). */}
                    <IconButton
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      edge="end"
                      // aria-label é para acessibilidade: leitores de tela lêem este texto.
                      aria-label={
                        mostrarSenha ? "Ocultar senha" : "Mostrar senha"
                      }
                      sx={{ color: "#a0aec0" }} // sx é o sistema de estilo inline do MUI
                    >
                      {/* Renderização condicional: exibe o ícone apropriado.
                          Se a senha está visível, mostra o ícone de "ocultar".
                          Se está oculta, mostra o ícone de "mostrar". */}
                      {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* ---- BOTÃO DE LOGIN ---- */}
          {/* type="submit" faz o botão disparar o evento onSubmit do formulário.
              variant="contained" aplica o estilo com fundo preenchido do MUI. */}
          <LoginButton type="submit" fullWidth variant="contained" size="large">
            Entrar
          </LoginButton>

          {/* ---- LINK "ESQUECEU SUA SENHA?" ---- */}
          {/* component="button" transforma o Link em um <button> no HTML.
              type="button" evita que ele dispare o submit do formulário. */}
          <ForgotPasswordLink
            onClick={handleEsqueceuSenha}
            component="button"
            type="button"
          >
            Esqueceu seu senha?
          </ForgotPasswordLink>
        </Box>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
