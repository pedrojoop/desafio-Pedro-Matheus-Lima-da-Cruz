class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const precos = {
            cafe: 1.50,
            sanduiche: 5.00,
            queijo: 2.00,
        };

        
        let total = 0;

        
        for (const itemInfo of itens) {
            const [item, quantidade] = itemInfo;
            if (precos[item]) {
                total += precos[item] * quantidade;
            } else {
            }
        }

        if (metodoDePagamento === 'credito') {
            total *= 1.10;
        } else if (metodoDePagamento === 'debito') {
            total *= 1.05;
        }


        const valorFormatado = `R$ ${total.toFixed(2).replace('.', ',')}`;

        return valorFormatado;
    }

}

const minhaCompra = new CaixaDaLanchonete();
const metodoDePagamento = 'credito';
const itens = [['cafe', 2], ['sanduiche', 1], ['queijo', 1]];

const valorTotal = minhaCompra.calcularValorDaCompra(metodoDePagamento, itens);
console.log(`Valor total da compra: ${valorTotal}`);


export { CaixaDaLanchonete };
