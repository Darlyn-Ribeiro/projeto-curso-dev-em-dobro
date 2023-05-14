
const botaoAlterarTema = document.getElementById("botao-alterar-tema");    //BUSCAR ELEMENMTOS PELO ID GET ELEMENT
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

	const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

	body.classList.toggle("modo-escuro");   //toggle alternar entre modo escuro e modo claro
	

	if (modoEscuroEstaAtivo) {
		imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
	} else {
		imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
	}
});
