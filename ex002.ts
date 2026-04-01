class Lampada {
    private estado = false; 
  
    public ligar(): void {
      this.estado = true;
      console.log("Ligada");
    }
  
    public desligar(): void {
      this.estado = false;
      console.log("Desligada");
    }
  
    public mostrarEstado(): void {
      console.log(this.estado ? "Ligada" : "Desligada");
    }
  }

  const lampada = new Lampada();
  lampada.ligar();        
  lampada.mostrarEstado();
  lampada.desligar();     
  