// main.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProvedorTema } from "./components/Contextotema";

// Renderização da aplicação React
ReactDOM.render(
  <React.StrictMode>
    {/* Provedor de Tema envolve toda a aplicação para fornecer contexto de tema */}
    <ProvedorTema>
      {/* Componente principal da aplicação */}
      <App />
    </ProvedorTema>
  </React.StrictMode>,
  // Ponto de montagem da aplicação no HTML
  document.getElementById("root")
);
