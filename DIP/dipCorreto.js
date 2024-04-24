//Principio da Inversao de Dependencia (DIP)
class BancoDeDados {
    salvar(dados) {
      console.log("Salvando dados no banco de dados:", dados);
    }
  }
  
  class GerenciadorDeArquivos {
    salvar(dados) {
      console.log("Salvando dados no sistema de arquivos:", dados);
    }
  }
  
  // Classe de alto nivel depende de uma abstracao
  class ProcessadorDeDados {
    constructor(salvadorDeDados) {
      this.salvadorDeDados = salvadorDeDados;
    }
  
    processarDados(dados) {
      this.salvadorDeDados.salvar(dados);
    }
  }
  
  const bancoDeDados = new BancoDeDados();
  const gerenciadorDeArquivos = new GerenciadorDeArquivos();
  
  const processadorBancoDeDados = new ProcessadorDeDados(bancoDeDados);
  const processadorArquivos = new ProcessadorDeDados(gerenciadorDeArquivos);
  
  processadorBancoDeDados.processarDados({ nome: "João", idade: 30 });
  processadorArquivos.processarDados({ nome: "Alice", idade: 25 });
  