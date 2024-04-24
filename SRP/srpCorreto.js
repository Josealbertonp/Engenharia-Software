// Principio da Responsabilidade Unica (SRP)
class ProcessadorDePagamento {
    processarPagamento(pagamento) {
      console.log("Pagamento processado:", pagamento);
    }
  }
  
  class ValidadorDePagamento {
    validarPagamento(pagamento) {
      console.log("Validando pagamento:", pagamento);
      return true; //sempre retorna verdadeira
    }
  }
  
  // Classe de alto nivel que utiliza as classes de baixo nivel
  class ClienteDeProcessamentoDePagamento {
    constructor(validador, processador) {
      this.validador = validador;
      this.processador = processador;
    }
  
    processar(pagamento) {
      if (this.validador.validarPagamento(pagamento)) {
        this.processador.processarPagamento(pagamento);
      } else {
        console.log("Pagamento inválido:", pagamento);
      }
    }
  }
  
  // Exemplo de uso
  const processadorDePagamento = new ProcessadorDePagamento();
  const validadorDePagamento = new ValidadorDePagamento();
  const clienteDeProcessamentoDePagamento = new ClienteDeProcessamentoDePagamento(validadorDePagamento, processadorDePagamento);
  
  // Simulacao de um pagamento valido
  const pagamentoValido = { valor: 100, idTransacao: "123456" };
  clienteDeProcessamentoDePagamento.processar(pagamentoValido);
  
  // Simulacao de um pagamento invalido
  const pagamentoInvalido = { valor: -50, idTransacao: "789012" };
  clienteDeProcessamentoDePagamento.processar(pagamentoInvalido);
  