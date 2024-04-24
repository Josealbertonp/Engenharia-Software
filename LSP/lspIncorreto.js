//Principio da Substituicao de Liskov (LSP)
class RetanguloIncorreto {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  
    // Metodo area() diferente do quadrado
    area() {
      return this.altura * this.largura;
    }
  }
  
  class QuadradoIncorreto extends RetanguloIncorreto {
    constructor(lado) {
      super(lado, lado);
    }
  }
  
  // Funcao que calcula a soma das areas de varias formas
  function calcularAreaTotal(formas) {
    return formas.reduce((total, forma) => total + forma.area(), 0);
  }
  
  const retanguloIncorreto = new RetanguloIncorreto(5, 10);
  const quadradoIncorreto = new QuadradoIncorreto(5);
  const areaTotalIncorreta = calcularAreaTotal([retanguloIncorreto, quadradoIncorreto]);
  console.log("Area total incorreta:", areaTotalIncorreta);
  