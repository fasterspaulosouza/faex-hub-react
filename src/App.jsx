/**
 * App.jsx - COMPONENTE RAIZ DA APLICAÇÃO
 *
 * Este é o componente principal que serve como "container" de toda a aplicação.
 * Todos os outros componentes (páginas, menus, etc.) são renderizados dentro dele.
 *
 * Atualmente, ele renderiza apenas a página de Login.
 * No futuro, aqui ficaria o sistema de rotas (React Router) para navegar
 * entre diferentes páginas (Login, Dashboard, Perfil, etc.).
 */

// Importa o componente de Login que criamos na pasta components.
import Login from "./components/Login/Login";

// "function App()" define um componente funcional.
// Em React, um componente é basicamente uma função que retorna JSX (HTML dentro do JS).
function App() {
  return (
    // O "<> </>" é chamado de "Fragment" (Fragmento).
    // Ele permite agrupar múltiplos elementos sem criar uma <div> extra no HTML.
    // Isso mantém o DOM mais limpo, sem elementos desnecessários.
    <>
      <Login />
    </>
  );
}

// "export default" permite que outros arquivos importem este componente.
// Exemplo: import App from "./App.jsx" (como é feito no main.jsx).
export default App;
