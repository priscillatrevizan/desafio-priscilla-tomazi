# DESAFIO CAIXA DA LANCHONETE

## COMO BAIXAR O CÓDIGO E SUBMETER MINHA SOLUÇÃO?
Este repositório contém minha solução para o desafio "Caixa da Lanchonete" proposto pela DB Server. O objetivo deste desafio era criar uma lógica para calcular o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

### BAIXANDO A ESTRUTURA
Para baixar a estrutura no formato zip, basta clicar neste [link](https://dev.azure.com/db-tecnologia/371ab069-cd1e-4ede-8ae5-fa54dd981c56/_apis/git/repositories/a3a8fe92-b324-4d6b-abbd-1953e46fb075/items?path=/&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=zip&api-version=5.0&download=true).


### ESTRUTURA DO CÓDIGO

src/: Esta pasta contém os arquivos relacionados à implementação da lógica do caixa da lanchonete.
caixa-da-lanchonete.js: Arquivo principal que contém a implementação da lógica do caixa da lanchonete.
caixa-da-lanchonete.test.js: Arquivo de testes com cenários para validar a solução.



### COMO EXECUTAR A SOLUÇÃO
Certifique-se de ter o Node.js instalado em sua máquina.

Clone este repositório para sua máquina local: git clone https://github.com/seunome/sobrenome-desafio-caixa-lanchonete.git
Navegue até a pasta do projeto: cd sobrenome-desafio-caixa-lanchonete
Instale as dependências do projeto: npm install
Execute os testes para validar a solução: npm test


## USO DA CLASSE `CaixaDaLanchonete`
A classe CaixaDaLanchonete contém o método calcularValorDaCompra que recebe dois parâmetros: formaDePagamento e itens.

formaDePagamento (string): Deve ser um dos valores válidos: 'debito', 'credito' ou 'dinheiro'.
itens (array de strings): Cada elemento da array deve ser uma string contendo o código do item e a quantidade separados por uma vírgula. Por exemplo: 'cafe,2' para dois cafés.

### CARDÁPIO

  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |


### FORMAS DE PAGAMENTO
Atualmente a Lanchonete aceita as seguintes formas de pagamento:
 - dinheiro
 - debito
 - credito

O sistema deve receber essa informação como string, utilizando a grafia exatamente igual aos exemplos acima.

### DESCONTOS E TAXAS
 - Pagamento em dinheiro tem 5% de desconto
 - Pagamento a crédito tem acréscimo de 3% no valor total

### OUTRAS REGRAS

- Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
- Combos não são considerados como item principal.
- É possível pedir mais de um item extra sem precisar de mais de um principal.
- Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
- Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
- Se o código do item não existir, apresentar mensagem "Item inválido!"
- Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"

### EXEMPLOS DE USO
A classe CaixaDaLanchonete está implementada no arquivo caixa-da-lanchonete.js. Você pode importar e usar essa classe em seus projetos.

import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const caixa = new CaixaDaLanchonete();

// Exemplo 1: Calcular valor da compra
const formaDePagamento = 'credito';
const itens = ['cafe,2', 'sanduiche,1', 'queijo,1'];
const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
console.log(resultado); // 


Exibirá o valor total da compra ou uma mensagem de erro conforme as 
> ALERTA:
> É importante que a estrutura básica descrita acima não seja alterada, incluindo nome e parâmetros do método. Iremos validar sua solução através destes, assim como você pode validar através dos cenários de testes já implementados em `src/caixa-da-lanchonete.test.js`.


### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você recebi alguns cenários de testes para auxiliar na validação da solução. Criei mais casos de teste para aumentar a confiabilidade da solução.
Para testar sua solução com os cenários já criados, basta rodar o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### INPUTS
O método `calcularValorDaCompra` recebe dois parâmetros, `formaDePagamento` e `itens`, sendo o primeiro uma string com os possíveis valores válidos: `debito`, `credito` e `dinheiro`. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
EXEMPLO:
```js
['cafe,1','chantily,1']
```

### OUPUTS
O retorno do método `calcularValorDaCompra` está no formato string e o conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra está formatado com `R$` e decimais separados por vírgula.

O padrão da quantidade de decimais está no método `toFixed` do JavaScript, e foi devidamente conferido. 


### CONTATO

Se tiver alguma dúvida ou problema com a solução, você pode entrar em contato comigo pelo e-mail priscillatrevizan.dev@gmail.com.

Obrigada pela oportunidade!