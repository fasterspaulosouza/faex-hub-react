/**
 * main.jsx - PONTO DE ENTRADA DA APLICAÇÃO REACT
 *
 * Este é o primeiro arquivo JavaScript que o navegador executa.
 * Ele é responsável por "montar" (renderizar) a aplicação React dentro do HTML.
 */

// "StrictMode" é um componente do React que ajuda a encontrar problemas no código.
// Ele NÃO aparece na tela — apenas ativa verificações extras durante o desenvolvimento.
import { StrictMode } from "react";

// "createRoot" é a função do React 18+ que cria a "raiz" da aplicação.
// Ela substitui o antigo ReactDOM.render() usado em versões anteriores.
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação (App).
import App from "./App.jsx";

// Importa o CSS global que será aplicado em TODA a aplicação.
import "./main.css";

// document.getElementById("root") busca a <div id="root"> no index.html.
// createRoot() cria a raiz do React nessa div.
// .render() renderiza (exibe) o componente <App /> dentro dela.
// O <StrictMode> envolve tudo para ativar verificações extras em desenvolvimento.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
