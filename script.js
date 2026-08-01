let produtos = [];


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


function renderizarProdutos() {
    listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {
        const imagemUrl = imagensCategorias[produto.categoria] || imagensCategorias["Outros"];

        const card = document.createElement("div");
        card.classList.add("card-produto");

        card.innerHTML = `
            <label class="produto">
                <input type="checkbox" ${produto.concluido ? "checked" : ""} data-id="${produto.id}">
                <span class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>
                <img src="${imagemUrl}" alt="${produto.categoria}" class="img-categoria" style="width: 24px; height: 24px; margin-right: 8px;">
                <span class="nome-produto">${produto.nome}</span>
            </label>

            <div class="info-produto">
                <span class="quantidade">Qtd: ${produto.quantidade}</span>
                <button class="btn-excluir" data-id="${produto.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        `;

        listaProdutos.appendChild(card);
    });
}

function adicionarProduto() {
    const nome = inputProduto.value.trim();
    const categoria = selectCategoria.value;

    if (nome === "") return;

    const novoProduto = {
        id: Date.now().toString(),
        nome: nome,
        quantidade: 1,
        categoria: categoria,
        concluido: false
    };

    produtos.push(novoProduto);
    renderizarProdutos();

    inputProduto.value = "";
    inputProduto.focus();
}


botaoAdicionar.addEventListener("click", adicionarProduto);
inputProduto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarProduto();
    }
});


listaProdutos.addEventListener("click", (e) => {
    const btnExcluir = e.target.closest(".btn-excluir");

    if (btnExcluir) {
        const id = btnExcluir.dataset.id;
        produtos = produtos.filter(prod => prod.id !== id);
        renderizarProdutos();
    }
});

botaoAdicionar.addEventListener("click", adicionarProduto);
inputProduto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarProduto();
    }
});