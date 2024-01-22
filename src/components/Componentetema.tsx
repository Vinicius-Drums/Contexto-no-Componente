// ComponenteTema.tsx

import React from "react";
import { useTema } from "./Contextotema";

const ComponenteTema: React.FC = () => {
  const { tema, alternarTema } = useTema();

  return (
    <div className="container-botao-tema">
      {/* Mensagem de tema atual */}
      <p
        className={`frase-tema ${
          tema === "claro" ? "texto-escuro" : "texto-claro"
        }`}
      >
        Tema Atual: {tema}
      </p>

      {/* Botão para alternar o tema */}
      <button className="botao-alternar-tema" onClick={alternarTema}>
        ☾ Alternar Tema ☾
      </button>
    </div>
  );
};

export default ComponenteTema;
