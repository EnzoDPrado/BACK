'use strict'

import './card-promo.js'

const fetchCardPromo = async function () {
    const url = `` 
    const response = await fetch(url);
    const data = await response.json()

    return data
}

const pizza = await fetchCardPromo();
console.log(pizza)

pizza.forEach(item => {
    const container = document.querySelector('.container-cards')
    const card = document.createElement('.card-promocoes')

    card.setAttribute('nome', item.nome)
    card.setAttribute('descricao', item.descricao)
    card.setAttribute('imagem', item.image)
    card.setAttribute('preco', item.preco)

    container.appendChild(card)
});