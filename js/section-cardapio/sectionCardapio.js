'use strict'

import './card-cardapio'

const fetchCardPizza = async function () {
    const url = `http://localhost:5050/v1/pizzaComponentes` 
    const response = await fetch(url);
    const data = await response.json()

    return data
}

const card = await fetchCardPizza();
console.log(card)

card.forEach(item => {
    const container = document.querySelector('.container-card-pizza')
    const cardPizza = document.createElement('.card-pizza')

    cardPizza.setAttribute('nome', item.nome)
    cardPizza.setAttribute('descricao', item.descricao)
    cardPizza.setAttribute('preco1', item.preco1)
    cardPizza.setAttribute('preco2', item.preco2)
    cardPizza.setAttribute('preco3', item.preco3)
    cardPizza.setAttribute('Broto', item.tamanhoBroto)
    cardPizza.setAttribute('Medio', item.tamanhoMedio)
    cardPizza.setAttribute('Grande', item.tamanhoGrande)

    container.appendChild(cardPizza)
});