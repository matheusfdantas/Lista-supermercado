# 🛒 Lista Super Mercado

**Aluno:** Matheus Dantas

## Sobre o projeto

O List SuperMarket é um aplicativo que desenvolvi para facilitar a organização de uma lista de compras de supermercado. A ideia foi criar uma aplicação simples, mas funcional, onde o usuário pode adicionar produtos, editar, excluir, marcar os itens já comprados e visualizar uma tela apenas com os produtos que já estão no carrinho.

Além disso, utilizei o localStorage para que os dados não sejam perdidos quando a página for atualizada.

---

## Funcionalidades

- Adicionar produtos.
- Editar produtos.
- Excluir produtos.
- Marcar produtos como concluídos.
- Visualizar uma tela com os produtos do carrinho.
- Salvar os dados no navegador usando localStorage.

---

## Estrutura do projeto

- **index.html:** estrutura da página.
- **style.css:** parte visual do aplicativo.
- **script.js:** onde está toda a lógica do funcionamento.

---

## Como os dados funcionam

Os produtos são armazenados em um array no JavaScript. Sempre que alguma alteração acontece, como adicionar, editar ou excluir um produto, esse array é atualizado e a lista é renderizada novamente na tela.

Cada produto possui suas próprias informações, como nome, quantidade e status de concluído.

---

## Eventos principais

### Adicionar

Quando o botão de adicionar é clicado, o JavaScript pega o valor digitado no campo de texto, cria um novo produto e o adiciona à lista.

### Editar

Ao clicar no botão de editar, é possível alterar o nome do produto. Depois de salvar, a lista é atualizada automaticamente.

### Concluir

Ao marcar o checkbox, o produto passa para o estado de concluído e pode aparecer na tela do carrinho.

### Excluir

Ao clicar na lixeira, o produto é removido da lista.

---

## LocalStorage

Para que os produtos não sejam perdidos quando a página é atualizada, utilizei o localStorage.

Sempre que a lista sofre alguma alteração, ela é salva utilizando `JSON.stringify()`. Quando a página abre novamente, os dados são recuperados com `JSON.parse()`.

---

## Dificuldades

A maior dificuldade foi fazer a troca entre a tela principal e a tela do carrinho sem precisar recarregar a página. Também tive um pouco de dificuldade para organizar os elementos do layout e fazer os cards funcionarem corretamente.

Depois de pesquisar e fazer alguns testes, consegui resolver esses problemas utilizando JavaScript para atualizar a interface e CSS para organizar o layout.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git e GitHub

---

## Como executar

Basta abrir o arquivo `index.html` no navegador ou utilizar a extensão Live Server do Visual Studio Code.

---

## Links

**Repositório:** https://github.com/matheusfdantas/Lista-supermercado

**GitHub Pages:** https://matheusfdantas.github.io/Lista-supermercado/
