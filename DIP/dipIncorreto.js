//Principio da Inversao de Dependencia (DIP)
class ProcessadorDeDadosIncorreto {
  processarDadosNoBancoDeDados(dados) {
    const bancoDeDados = new BancoDeDados();
    bancoDeDados.salvar(dados);
  }

  processarDadosNoSistemaDeArquivos(dados) {
    const gerenciadorDeArquivos = new GerenciadorDeArquivos();
    gerenciadorDeArquivos.salvar(dados);
  }
}

const processadorIncorreto = new ProcessadorDeDadosIncorreto();

processadorIncorreto.processarDadosNoBancoDeDados({ nome: "João", idade: 30 });
processadorIncorreto.processarDadosNoSistemaDeArquivos({ nome: "Alice", idade: 25 });
