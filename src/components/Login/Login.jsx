import { useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
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
import Avatar from "../Avatar/Avatar";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const avatars = [
  {
    src: "/rosto_01.png",
    alt: "Usuário 1",
    color: "#f8c8d4",
    size: 120,
    top: "18%",
    left: "6%",
    delay: "0s",
  },
  {
    src: "/rosto_02.png",
    alt: "Usuário 2",
    color: "#f4a6a0",
    size: 85,
    top: "6%",
    right: "28%",
    delay: "1s",
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
    hideOnMobile: true,
  },
  {
    src: "/rosto_06.png",
    alt: "Usuário 6",
    color: "#b8dfc8",
    size: 105,
    bottom: "10%",
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login:", { email, senha });
  };

  const handleEsqueceuSenha = () => {
    console.log("Esqueci minha senha");
  };

  return (
    <LoginContainer>
      <FloatingAvatars>
        {avatars.map((avatar, index) => (
          <FloatingAvatar
            key={index}
            $delay={avatar.delay}
            $top={avatar.top}
            $bottom={avatar.bottom}
            $left={avatar.left}
            $right={avatar.right}
            $hideOnMobile={avatar.hideOnMobile}
          >
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              color={avatar.color}
              size={avatar.size}
            />
          </FloatingAvatar>
        ))}
      </FloatingAvatars>

      <LoginCard elevation={0}>
        <Logo src="/logo-faex-hub.png" alt="Logo FAEX Hub" />

        <Title variant="h2">Entre na sua Conta</Title>

        <Box component="form" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
            variant="outlined"
          />

          <StyledTextField
            fullWidth
            label="Senha"
            type={mostrarSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            required
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      edge="end"
                      aria-label={
                        mostrarSenha ? "Ocultar senha" : "Mostrar senha"
                      }
                      sx={{ color: "#a0aec0" }}
                    >
                      {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <LoginButton type="submit" fullWidth variant="contained" size="large">
            Entrar
          </LoginButton>

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
