
class Animal {
    nome: string;
    especie: string;
    idade: number;

    constructor(nome: string, especie: string, idade: number) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    fazerSom(): void {
        console.log(`${this.nome} (${this.especie}) fez um som!`);
    }
}

const cachorro = new Animal("Rex", "Cachorro", 5);
const gato = new Animal("Mimi", "Gato", 3);


cachorro.fazerSom();
gato.fazerSom();