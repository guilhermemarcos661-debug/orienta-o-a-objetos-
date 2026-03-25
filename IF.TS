class Veiculo {
    marca: String = ""
    modelo: String = ""
    placa: String = ""
    kilometragem: Number = 0
 
    acenderFarol(){
        console.log("farol ligado! ");
        
    }

}
let carro1 = new Veiculo()
carro1.marca = "vw"
carro1.modelo = "gol"
carro1.placa = "HRH0016"
carro1.kilometragem = 100000


console.log(carro1);
