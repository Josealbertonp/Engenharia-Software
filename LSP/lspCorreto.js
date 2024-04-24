//Principio da Substituicao de Liskov (LSP)
class Forma {
    area() {
      throw new Error("Método area() não implementado");
    }
  }
  
  class Retangulo extends Forma {
    constructor(altura, largura) {
      super();
      this.altura = altura;
      this.largura = largura;
    }
  
    area() {
      return this.altura * this.largura;
    }
  }
  
  class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    area() {
      return this.lado * this.lado;
    }
  }
  
  // Funcao que calcula a soma das areas de varias formas
  function calcularAreaTotal(formas) {
    return formas.reduce((total, forma) => total + forma.area(), 0);
  }
  
  const retangulo = new Retangulo(5, 10);
  const quadrado = new Quadrado(5);
  const areaTotal = calcularAreaTotal([retangulo, quadrado]);
  console.log("Área total:", areaTotal);
  