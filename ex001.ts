class Lampada {
    private estado: boolean = false; 
  
    public ligar(): void {
      this.estado = true;
      console.log("A lâmpada foi ligada.");
    }

    public desligar(): void {
      this.estado = false;
      console.log("A lâmpada foi desligada.");
    }
  

    public mostrarEstado(): void {
      if (this.estado) {
        console.log("A lâmpada está ligada.");
      } else {
        console.log("A lâmpada está desligada.");
      }
    }
  }
  

  const lampada = new Lampada();
  
  lampada.ligar();        
  lampada.mostrarEstado(); 
  
  lampada.desligar();      
  lampada.mostrarEstado(); 
