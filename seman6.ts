
class Paciente {
    public nome: string;
    private prontuario: string;
    public idade: number;
  
    constructor(nome: string, idade: number, prontuario: string) {
      this.nome = nome;
      this.idade = idade;
      this.prontuario = prontuario;
    }
  
    public mostrarInfo(): void {
      console.log("Paciente: " + this.nome + ", Idade: " + this.idade);
    }
  
    private validarProntuario(): void {
      console.log("Validando acesso ao prontuário...");
    }
  
    public acessarProntuario(): void {
      this.validarProntuario();
      console.log("Prontuário de " + this.nome + ": " + this.prontuario);
    }
  }
  
  class Medico {
    public nome: string;
    private crm: string; 
    public especialidade: string;
  
    constructor(nome: string, especialidade: string, crm: string) {
      this.nome = nome;
      this.especialidade = especialidade;
      this.crm = crm;
    }
  
    public atenderPaciente(paciente: Paciente): void {
      console.log(this.nome + " está atendendo o paciente " + paciente.nome + ".");
    }
  
    private checarCRM(): void {
      console.log("Verificando CRM do médico...");
    }
  
    public validarMedico(): void {
      this.checarCRM();
      console.log("Médico " + this.nome + " validado com CRM " + this.crm + ".");
    }
  }
  

  class Exame {
    public tipo: string;
    private resultado: string; 
    public paciente: Paciente;
  
    constructor(tipo: string, paciente: Paciente, resultado: string) {
      this.tipo = tipo;
      this.paciente = paciente;
      this.resultado = resultado;
    }
  
    public emitirLaudo(): void {
      console.log("Laudo do exame " + this.tipo + " para " + this.paciente.nome + ": " + this.resultado);
    }
  
    private validarResultado(): void {
      console.log("Checando consistência do resultado...");
    }
  
    public acessarResultado(): void {
      this.validarResultado();
      console.log("Resultado do exame: " + this.resultado);
    }
  }
  

  const paciente1 = new Paciente("Maria", 30, "Prontuário #123");
  const medico1 = new Medico("Dr. João", "Cardiologista", "CRM-456");
  const exame1 = new Exame("Raio-X", paciente1, "Sem alterações");
  
  paciente1.mostrarInfo();
  paciente1.acessarProntuario();
  
  medico1.atenderPaciente(paciente1);
  medico1.validarMedico();
  
  exame1.emitirLaudo();
  exame1.acessarResultado();
