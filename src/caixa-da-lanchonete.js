class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const valoresDosItens = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        const itensAdicionais = {
            cafe: { chantily: 1 },
            sanduiche: { queijo: 1 }
        };

        let valorTotal = 0;
        let itensPrincipaisQuantidade = {};

        if (itens.length === 0) {
            if (itens.length === 0 && metodoDePagamento === 'dinheiro') {
                return `Quantidade inválida!`;
            } else  {
                return `Não há itens no carrinho de compra!`;
            } 
        }

        for (const itemQuantidade of itens) {
            const [codigo, quantidade] = itemQuantidade.split(',');

            if (!valoresDosItens.hasOwnProperty(codigo)) {
                return 'Item inválido!';
            }

            if (itensPrincipaisQuantidade[codigo] === undefined) {
                itensPrincipaisQuantidade[codigo] = 0;
            }

            if (itensAdicionais.hasOwnProperty(codigo)) {
                const adicionais = itensAdicionais[codigo];
                for (const adicional in adicionais) {
                    if (itensPrincipaisQuantidade[adicional] > 0) {
                        return 'Item extra não pode ser pedido sem o principal';
                    }
                }
            }

            itensPrincipaisQuantidade[codigo] += parseInt(quantidade);
            valorTotal += valoresDosItens[codigo] * parseInt(quantidade);
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        } else if (metodoDePagamento !== 'debito') {
            return 'Forma de pagamento inválida!';
        }

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };





