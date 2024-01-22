// Importações necessárias do React
import React, { useState } from "react";
import { useTema } from "./components/Contextotema";
import "./App.css";
import ImagemVirada from "./Imagem/Virada23-24.jpeg";

const App: React.FC = () => {
  // Obtém o estado do tema e a função para alternar o tema usando o hook useTema
  const { tema, alternarTema } = useTema();

  // Estados para controlar o nome, envio do formulário, e mensagens de erro
  const [nome, setNome] = useState("");
  const [nomeEnviado, setNomeEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");

  // Função para manipular o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se o nome não está vazio antes de enviar
    if (nome.trim() === "") {
      setErroEnvio("Insira seu nome antes de enviar.");
      return;
    }

    // Limpa a mensagem de erro se houver
    setErroEnvio("");

    console.log("Nome enviado:", nome);
    setNomeEnviado(true);
  };

  // Adiciona a classe do tema ao corpo da página
  document.body.className = tema;

  return (
    <div className={`app ${tema}`}>
      {/* Título da aplicação */}
      <h1> ♫ Seja bem-vindo ao nosso evento ♫</h1>

      {/* Imagem destacada */}
      <img src={ImagemVirada} alt="Virada 23-24" className="foto" />

      {/* Conteúdo principal */}
      <div className="conteudo">
        {/* Mensagem instrutiva */}
        <p>Envie seu nome para a lista de convidados</p>

        {/* Formulário */}
        <div className="formulario">
          {nomeEnviado ? (
            // Mensagem de sucesso após o envio do nome
            <p className="mensagem-sucesso">
              Nome enviado com sucesso! Obrigado!
            </p>
          ) : (
            // Formulário de envio de nome
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>

              {/* Exibição de mensagem de erro, se houver */}
              {erroEnvio && <p className="mensagem-erro">{erroEnvio}</p>}

              {/* Botão para enviar o nome */}
              <button type="submit" className="botao-enviar">
                👆🏻 Enviar Nome 👆🏻
              </button>
            </form>
          )}
        </div>

        {/* ComponenteTema para exibir tema atual e fornecer botão para alternar o tema */}
        <div className="container-botao-tema">
          <p className="frase-tema">
            Tema Atual: <span className="tema-atual">{tema}</span>
          </p>
          <button className="botao-alternar-tema" onClick={alternarTema}>
            ☾ Alternar Tema ☾
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
