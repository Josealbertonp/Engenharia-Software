//Principio da Segregacao de Interface (ISP)
class MultifuncionalIncorreto {
  imprimir(documento) {
    console.log("Imprimindo documento:", documento);
  }

  escanear(documento) {
    console.log("Escanenado documento:", documento);
  }

  fax(documento) {
    console.log("Enviando fax do documento:", documento);
  }
}

const multifuncionalIncorreto = new MultifuncionalIncorreto();
multifuncionalIncorreto.imprimir("Contrato");
multifuncionalIncorreto.escanear("Contrato");
multifuncionalIncorreto.fax("Contrato");
