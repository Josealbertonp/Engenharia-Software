# Exemplos dos Princípios SOLID em JavaScript

Neste repositório, apresento exemplos de como aplicar os Princípios SOLID em JavaScript, com cada exemplo demonstrando um princípio específico.

## Princípio da Responsabilidade Única (SRP)

No exemplo do Princípio da Responsabilidade Única (SRP), crio um sistema de processamento de pagamentos. Divido a responsabilidade de validar e processar pagamentos em classes separadas, cada uma fazendo apenas uma coisa:

- **Correto:** Criei duas classes, `ProcessadorDePagamento` e `ValidadorDePagamento`, cada uma com uma responsabilidade específica: processar e validar pagamentos, respectivamente. A classe `ClienteDeProcessamentoDePagamento` coordena essas classes para processar pagamentos, mantendo a separação de responsabilidades.

- **Incorreto:** No exemplo incorreto, a classe `ProcessadorDePagamentoIncorreto` mistura validação dentro do método `processarPagamento`, violando o SRP.

[Exemplo Correto](https://github.com/Joseal19/Engenharia-Software/blob/main/SRP/srpCorreto.js) | [Exemplo Incorreto](https://github.com/Joseal19/Engenharia-Software/blob/main/SRP/srpIncorreto.js)

## Princípio da Substituição de Liskov (LSP)

No exemplo do Princípio da Substituição de Liskov (LSP), crio um sistema de cálculo de áreas de formas geométricas. Mostro como as classes devem ser feitas para que uma subclasse possa substituir sua superclasse sem quebrar o programa:

- **Correto:** Implementei as classes `Retangulo` e `Quadrado` de forma que um quadrado possa substituir um retângulo em qualquer contexto, seguindo o LSP.

- **Incorreto:** No exemplo incorreto, a classe `QuadradoIncorreto` herda da classe `RetanguloIncorreto`, violando o LSP.

[Exemplo Correto](https://github.com/Joseal19/Engenharia-Software/blob/main/LSP/lspCorreto.js) | [Exemplo Incorreto](https://github.com/Joseal19/Engenharia-Software/blob/main/LSP/lspIncorreto.js)

## Princípio da Segregação de Interface (ISP)

No exemplo do Princípio da Segregação de Interface (ISP), crio um sistema que mostra como interfaces separadas podem levar a um design mais flexível:

- **Correto:** Criei interfaces separadas para `Impressora`, `Scanner` e `Fax`. A classe `Multifuncional` usa essas interfaces para realizar suas operações.

- **Incorreto:** No exemplo incorreto, a classe `MultifuncionalIncorreto` tem métodos que não são relevantes para todas as suas instâncias.

[Exemplo Correto](https://github.com/Joseal19/Engenharia-Software/blob/main/ISP/ispCorreto.js) | [Exemplo Incorreto](https://github.com/Joseal19/Engenharia-Software/blob/main/ISP/ispIncorreto.js)

## Princípio da Inversão de Dependência (DIP)

No exemplo do Princípio da Inversão de Dependência (DIP), crio um sistema de processamento de dados. Mostro como uma classe de alto nível pode depender de abstrações em vez de implementações específicas:

- **Correto:** A classe `ProcessadorDeDados` depende de uma abstração (`salvadorDeDados`) em vez de depender diretamente das implementações específicas (`BancoDeDados` e `GerenciadorDeArquivos`).

- **Incorreto:** No exemplo incorreto, a classe `ProcessadorDeDadosIncorreto` depende diretamente das implementações específicas `BancoDeDados` e `GerenciadorDeArquivos`.

[Exemplo Correto](https://github.com/Joseal19/Engenharia-Software/blob/main/DIP/dipCorreto.js) | [Exemplo Incorreto](https://github.com/Joseal19/Engenharia-Software/blob/main/DIP/dipIncorreto.js)

