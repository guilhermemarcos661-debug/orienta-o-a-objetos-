/*
//Ex001
class Pessoa {
    constructor(nome, idade, cidade){
        this.nome = nome 
        this.idade = idade 
        this.cidade = cidade 

    }
    apresentar (){
        console.log(`meu nome é ${this.nome}, eu tenho ${this.idade} anos e moro em ${ this.cidade}`);
        
    }
}
let pessoa = new Pessoa("Guilherme", 25, "Aquidauana")
console.log(pessoa.apresentar());
Ex002
//EX002
class Livro {
    constructor(titulo, autor, anoPublicado){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicado = anoPublicado
    }
    info(){
        console.log(`o titulo do livro é ${this.titulo}, escrito por ${this.autor} e foi publicado em ${this.anoPublicado}`);
        
    }
}
let livro = new Livro ("Harry Potter e a pedra Filosofica", "J.K.Rowling", 1997)
console.log(livro.info());


///////////////////////////////////////////////////
// Classe Carro
class Carro {

    // Construtor
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; // A velocidade sempre começa em 0
    }

    // Método para acelerar
    acelerar() {
        this.velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
    }

    // Método para frear
    frear() {
        this.velocidade -= 5;

        // Impede que a velocidade fique negativa
        if (this.velocidade < 0) {
            this.velocidade = 0;
        }

        console.log(`Freando... Velocidade atual: ${this.velocidade} km/h`);
    }

    // Método para mostrar o status do carro
    status() {
        return `O carro ${this.marca} ${this.modelo} está a ${this.velocidade} km/h`;
    }
}

// Criando um objeto da classe Carro
const carro = new Carro("Fiat", "Uno", 2015);

// Chamando os métodos
carro.acelerar(); // 10 km/h
carro.acelerar(); // 20 km/h
carro.frear();    // 15 km/h

// Exibindo o status do carro
console.log(carro.status());

//EX003
class carro {
    constructor(marca, modelo, ano){
        this. marca = marca 
        this. modelo = modelo 
        this.ano = ano 
        this.velocidade = 0 
        
    }
    acelerar(){
        this.velocidade += 10 
        console.log(`O carro está acelerando... velocidade atual ${this.velocidade} km/h`);
        
    }
    frear(){
        this.velocidade -= 5
        console.log(`o carro esta freando... A velocidade atual é de ${this.velocidade} km/h`);
    }
    status(){
        console.log(`A marca do carro é ${this.marca}. O modelo é ${this.modelo}, do ano de ${this.ano} e sua velocidade atual é de ${this.velocidade} km/h.`);
        
        
    }
    
}
carro.acelerar()
carro.frear()
console.log(carro.status());

*/ 
//EX004
class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    vender(quantidade) {
        if (quantidade <= this.quantidadeEstoque) {
            this.quantidadeEstoque -= quantidade;
            let total = quantidade * this.preco;
            console.log(`Venda de ${quantidade} unidades de ${this.nome}. Total: R$ ${total.toFixed(2)}`);
        } else {
            console.log("Estoque insuficiente.");
        }
    }
    repor(quantidade) {
        this.quantidadeEstoque += quantidade;
        console.log(`Reposição de ${quantidade} unidades de ${this.nome}. Estoque atual: ${this.quantidadeEstoque}`);
    }

    valorEstoque() {
        let valor = this.preco * this.quantidadeEstoque;
        return `Valor total do estoque: R$ ${valor.toFixed(2)}`;
    }

}

const produto = new Produto("Notebook", 2500, 10);
produto.vender(3);
produto.repor(5);
console.log(produto.valorEstoque());