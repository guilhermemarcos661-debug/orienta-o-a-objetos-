class Animal {
    public nome: string;
    public especie: string;
    public idade: number;
  
    constructor(nome: string, especie: string, idade: number) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    public fazerSom(): void {
      console.log(`${this.nome} (${this.especie}) está fazendo um som!`);
    }
  }

  const cachorro = new Animal("Rex", "Cachorro", 5);
  const gato = new Animal("Mimi", "Gato", 3);

  cachorro.fazerSom(); 
  gato.fazerSom();    