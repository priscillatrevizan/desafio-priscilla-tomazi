import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

describe('CaixaDaLanchonete', () => {

    const validaTeste = (formaDePagamento, resultadoEsperado, itens) => {
        const resultado = new CaixaDaLanchonete()
            .calcularValorDaCompra(formaDePagamento, itens);

        expect(resultado.replace("\xa0", " ")).toEqual(resultadoEsperado);
    };

    test.each([
        ['com carrinho vazio', 'dinheiro', 'Não há itens no carrinho de compra!', []],
        ['com carrinho vazio', 'credito', 'Não há itens no carrinho de compra!', []],
        ['com carrinho vazio', 'debito', 'Não há itens no carrinho de compra!', []],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));

    test.each([
        ['dinheiro', 'R$ 2,85', ['cafe,1']],
        ['credito', 'R$ 3,09', ['cafe,1']],
        ['debito', 'R$ 3,00', ['cafe,1']],
    ])('compra simples em %p deve resultar em %p', validaTeste);

    test.each([
        ['credito', 'R$ 11,85', ['cafe,1', 'sanduiche,1', 'queijo,1']],
        ['debito', 'R$ 11,50', ['cafe,1', 'sanduiche,1', 'queijo,1']],
    ])('compra de 3 itens em %p deve resultar em %p', validaTeste);

    test.each([
        ['dinheiro', 'R$ 33,73', ['cafe,4', 'sanduiche,3', 'queijo,2']],
        ['credito', 'R$ 36,56', ['cafe,4', 'sanduiche,3', 'queijo,2']],
        ['debito', 'R$ 35,50', ['cafe,4', 'sanduiche,3', 'queijo,2']],
    ])('compra de múltiplas quantidades em %p deve resultar em %p', validaTeste);

    test.each([
        ['com quantidade zero', 'dinheiro', 'Quantidade inválida!', ['cafe,0']],
        ['com um valor', 'credito', 'Item inválido!', ['1']],
        ['com código inexistente', 'debito', 'Item inválido!', ['pizza, 1']],
        ['com forma de pagamento inválida', 'especie', 'Forma de pagamento inválida!', ['cafe, 1']],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));

    test.each([
        ['chantily', 'dinheiro', 'Item extra não pode ser pedido sem o principal', ['chantily,1']],
        ['queijo', 'credito', 'Item extra não pode ser pedido sem o principal', ['queijo,1']],
        ['chantily com outro item', 'credito', 'Item extra não pode ser pedido sem o principal', ['chantily,1', 'sanduiche,1']],
        ['queijo com outro item', 'debito', 'Item extra não pode ser pedido sem o principal', ['cafe,1', 'queijo,1']],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));



    //testes adicionais
    test.each([
        ['compra com forma de pagamento inválida', 'especie', 'Forma de pagamento inválida!', ['cafe,1']],      
    ])(
        '%s: compra em %p deve resultar em %p',

        (_, formaDePagamento, resultadoEsperado, itens) => 
            validaTeste(formaDePagamento, resultadoEsperado, itens));

    test.each([
        ['debito', 'R$ 4,50', ['cafe,1', 'chantily,1']], 
        ['credito', 'R$ 8,76', ['sanduiche,1', 'queijo,1']],
    ])('compra de 2 itens em %p deve resultar em %p', validaTeste);   

    test.each([
        ['debito', 'R$ 9,50', ['combo1,1']], 
        ['credito', 'R$ 9,79', ['combo1,1']],
    ])('compra de 1 combo1 em %p deve resultar em %p', validaTeste); 

    test.each([
        ['debito', 'R$ 7,50', ['combo2,1']], 
        ['credito', 'R$ 7,73', ['combo2,1']],
    ])('compra de 1 combo2 em %p deve resultar em %p', validaTeste); 

    test.each([
        ['dinheiro', 'Não há itens no carrinho de compra!', []],
        ['dinheiro', 'Quantidade inválida!', ['cafe,0']],
    ])('pagamento em dinheiro - forma: %p, resultado esperado: %p, itens: %p', (formaDePagamento, resultadoEsperado, itens) => {
        const resultado = new CaixaDaLanchonete()
            .calcularValorDaCompra(formaDePagamento, itens);
    
        expect(resultado).toEqual(resultadoEsperado);
    }); 
}
    );
           

