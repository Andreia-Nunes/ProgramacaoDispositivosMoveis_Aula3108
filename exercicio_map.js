
let produtos = [
    {
        nome: "Computador",
        preco: 5000.00
    },
    {
        nome: "Mouse Gamer",
        preco: 300.00
    },
    {
        nome: "Cadeira Gamer",
        preco: 7000.00
    }
];

console.log("Produtos sem aumento:");
produtos.forEach((produto) => console.log(`${produto.nome} - R$ ${produto.preco}`));

console.log();

console.log("Produtos com aumento:");
produtos.map((produto) => console.log(`${produto.nome} - R$ ${produto.preco * 1.50}`));
