//Principio da Responsabilidade Unica (SRP)
class ProcessadorDePagamentoIncorreto {
  processarPagamento(pagamento) {
    console.log("Pagamento processado:", pagamento);
    this.validarPagamento(pagamento); // Metodo de validacao dentro da classe de processamento
  }

  validarPagamento(pagamento) {
    console.log("Validando pagamento:", pagamento);
    return true; // A validacao de exemplo sempre retorna verdadeira
  }
}

// Exemplo de uso - Processador de Pagamento Incorreto
const processadorDePagamentoIncorreto = new ProcessadorDePagamentoIncorreto();

// Simulacao de um pagamento valido
const pagamentoValido = { valor: 100, idTransacao: "123456" };
processadorDePagamentoIncorreto.processarPagamento(pagamentoValido);

// Simulacao de um pagamento invalido
const pagamentoInvalido = { valor: -50, idTransacao: "789012" };
processadorDePagamentoIncorreto.processarPagamento(pagamentoInvalido);
