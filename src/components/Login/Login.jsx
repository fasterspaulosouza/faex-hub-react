import { useState } from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";

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
    <Box className="login-container">
      <Box className="Avatar"></Box>

      <Card className="login-card">
        <img src="./public/logo-faex-hub.png" alt="Logo FAEX Hub" />

        <Typography variant="h2" className="title">
          Entre na sua Conta
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            className="style-text-field"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
            variant="outlined"
          />

          <TextField
            className="style-text-field"
            fullWidth
            label="Senha"
            type={mostrarSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            required
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    edge="end"
                    aria-label={
                      mostrarSenha ? "Esconder senha" : "Mostrar senha"
                    }
                  >
                    {mostrarSenha ? "🙈" : "👁️"}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            className="login-button"
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Entrar
          </Button>

          <Link
            className="forgot-password-link"
            onClick={handleEsqueceuSenha}
            component="button"
            type="button"
          >
            Esqueceu sua senha?
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
