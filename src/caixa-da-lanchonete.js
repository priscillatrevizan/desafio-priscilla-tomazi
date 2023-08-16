class CaixaDaLanchonete {
    constructor() {
        this.valoresDosItens = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        const itensPrincipaisQuantidade = {};
        let valorTotal = 0;

        for (const itemQuantidade of itens) {
            const [codigo, quantidade] = itemQuantidade.split(',');

            if (!this.valoresDosItens.hasOwnProperty(codigo)) {
                return 'Item inválido!';
            }

            if (quantidade === '0' && metodoDePagamento === 'dinheiro') {
                return 'Quantidade inválida!';
            }

            if (this.requerItemPrincipal(codigo) && !this.itemPrincipalPedido(codigo, itens)) {
                return 'Item extra não pode ser pedido sem o principal';
            }

            itensPrincipaisQuantidade[codigo] = (itensPrincipaisQuantidade[codigo] || 0) + parseInt(quantidade);
            valorTotal += this.valoresDosItens[codigo] * parseInt(quantidade);
        }

        if (metodoDePagamento === 'dinheiro') {
            if (itens.length === 0 || valorTotal === 0) {
                return 'Quantidade inválida!';
            }
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        } else if (metodoDePagamento !== 'debito') {
            return 'Forma de pagamento inválida!';
        } else{
            `Forma de pagamento inválida!`
        }

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }

    requerItemPrincipal(item) {
        const itensQueRequeremPrincipal = ['chantily', 'queijo'];
        return itensQueRequeremPrincipal.includes(item);
    }

    itemPrincipalPedido(item, itens) {
        const itemPrincipal = this.obterItemPrincipal(item);
        return this.itemPresenteNaLista(itens, itemPrincipal);
    }

    obterItemPrincipal(item) {
        const itensPrincipais = {
            chantily: 'cafe',
            queijo: 'sanduiche'
        };
        return itensPrincipais[item];
    }

    itemPresenteNaLista(lista, itemProcurado) {
        return lista.some(item => item.split(',')[0].trim() === itemProcurado.trim());
    }
}

export { CaixaDaLanchonete };






