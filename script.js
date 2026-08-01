let produtos = [];

// Mapeamento de imagens/ícones por categoria (pode usar URLs de imagens reais ou SVGs)
const imagensCategorias = {
    "Hortifruti": "https://cdn-icons-png.flaticon.com/512/3194/3194766.png",
    "Laticínios": "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
    "Padaria": "https://cdn-icons-png.flaticon.com/512/3014/3014535.png",
    "Açougue": "https://cdn-icons-png.flaticon.com/512/3082/3082008.png",
    "Bebidas": "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
    "Limpeza": "https://cdn-icons-png.flaticon.com/512/995/995053.png",
    "Outros": "https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
};

const inputProduto = document.querySelector("#input-produto");
const selectCategoria = document.querySelector("#select-categoria");
const botaoAdicionar = document.querySelector("#add-btn");
const listaProdutos = document.querySelector(".lista-produtos");

function adicionarProduto() {
    const nome = inputProduto.value.trim();
    const categoria = selectCategoria.value;

    if (nome === "") return;

    // Busca a imagem da categoria correspondente
    const imagemUrl = imagensCategorias[categoria] || imagensCategorias["Outros"];

    const novoProduto = {
        id: Date.now().toString(),
        nome: nome,
        quantidade: 1,
        categoria: categoria,
        imagem: imagemUrl,
        concluido: false
    };

    produtos.push(novoProduto);

    // Cria o HTML incluindo a tag <img> e a tag da categoria
    const card = document.createElement("div");
    card.classList.add("card-produto");
    card.innerHTML = `
        <label class="produto">
            <input type="checkbox">
            <span class="checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </span>
            <img src="${novoProduto.imagem}" alt="${novoProduto.categoria}" class="img-categoria">
            <div class="detalhes-produto">
                <span class="nome-produto">${novoProduto.nome}</span>
                <span class="categoria-tag">${novoProduto.categoria}</span>
            </div>
        </label>
        <div class="info-produto">
            <span class="quantidade">Qtd: ${novoProduto.quantidade}</span>
        </div>
    `;

    listaProdutos.appendChild(card);

    inputProduto.value = "";
    inputProduto.focus();
}

botaoAdicionar.addEventListener("click", adicionarProduto);

inputProduto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarProduto();
    }
});