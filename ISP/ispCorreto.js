//Principio da Segregacao de Interface (ISP)
class Impressora {
    imprimir(documento) {
      console.log("Imprimindo documento:", documento);
    }
  }
  
  class Scanner {
    escanear(documento) {
      console.log("Escanenado documento:", documento);
    }
  }
  
  class Fax {
    fax(documento) {
      console.log("Enviando fax do documento:", documento);
    }
  }
  
  // Multifuncional implementa apenas o que precisa
  class Multifuncional {
    constructor() {
      this.impressora = new Impressora();
      this.scanner = new Scanner();
      this.fax = new Fax();
    }
  
    imprimir(documento) {
      this.impressora.imprimir(documento);
    }
  
    escanear(documento) {
      this.scanner.escanear(documento);
    }
  
    fax(documento) {
      this.fax.fax(documento);
    }
  }
  
  const multifuncional = new Multifuncional();
  multifuncional.imprimir("Contrato");
  multifuncional.escanear("Contrato");
  multifuncional.fax("Contrato");
  