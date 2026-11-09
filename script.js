// Seleciona os elementos do HTML.
const menu = document.querySelector(".menu");
const botao = document.getElementById("alternar");
const opcoes = document.getElementById("opcoes");
const mensagem = document.getElementById("mensagem");


// Atualiza o estado visual e a acessibilidade do menu.
function definirMenu(aberto) {
  // Retorna o foco ao botão antes de bloquear as opções.
  if (!aberto && opcoes.contains(document.activeElement)) {
    botao.focus();
  }


  // A classe "aberto" ativa as animações definidas no CSS.
  menu.classList.toggle("aberto", aberto);


  botao.setAttribute("aria-expanded", String(aberto));


  botao.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );


  // Bloqueia as opções somente quando o menu está fechado.
  opcoes.inert = !aberto;


  mensagem.textContent = aberto
    ? "Escolha um site para abrir em uma nova aba. Clique em × para fechar o menu."
    : "Clique em + para abrir o menu.";
}


// Somente o botão central abre ou fecha o menu.
// Também funciona ao ativar o botão com Enter ou Espaço.
botao.addEventListener("click", () => {
  const aberto = menu.classList.contains("aberto");
  definirMenu(!aberto);
});


// Os links navegam normalmente pelo href definido no HTML.
// Clicar nas opções mantém o menu aberto.


// Estado inicial.
definirMenu(false);

