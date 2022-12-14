class card extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.nome = 'Nome do Produto'
        this.image = 'Sem imagem'
        this.bgcolor = '#FFF'
        this.preco = ''
        this.descricao = ''
        this.id = ''
    }

    static get observedAttributes(){
        return ['nome', 'image', 'bgcolor', 'preco', 'descricao', 'id']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        // this[nameAttr] = newValue

        if (nameAttr === 'nome'){
            this.nome = newValue
        }else if(nameAttr === 'image'){
            this.image = newValue
        }else if(nameAttr === 'bgcolor'){
            this.bgcolor = newValue
        }else if(nameAttr === 'preco'){
            this.preco = newValue
        }else if(nameAttr === 'descricao'){
            this.descricao = newValue
        }else if(nameAttr === 'id'){
            this.id = newValue
        }
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const style = document.createElement('style')
        style.textContent =  
        `
            .card-pizza{
                display: flex;
                height: 350px;
                width: 290px;
                flex-direction: column;
                margin-left: 90px;
                gap: 5px;
                /* border: 1px solid #000; */
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            
            .card-pizza img{
                display: flex;
                border-radius: 5px 5px 0px 0px;
            }
            
            .card-pizza h1{
                color: #000;
                margin-left: 10px;
                font-family: 'Inter', sans-serif;
                font-weight: 400;
            }
            
            .card-descricao{
                display: flex;
                font-family: 'Inter', sans-serif;
                margin-left: 10px;
                font-weight: 300;
            }
            
            .price{
                display: flex;
                justify-content: flex-end;
                padding: 20px;
                font-family: 'Inter', sans-serif;
                font-size: 30px;
                font-weight: 300
            }
            
            .container-price{
                display: flex;
                background-color: #FF2727;
                width: max-content;
                border-radius: 5px;
                margin-left: 10px;
                margin-top: 5px;
            }
        `
        return style
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card-pizza')
        card.innerHTML = `
        <img src="${this.image}" alt="">
        <h1 class="card-titulo">${this.nome}</h1>
        <span class="card-descricao">${this.descricao}</span>
        <div class="container-price">
            <span class="price">${this.preco}</span>
        </div>
        `
        return card
    }
}

//Para a web entender esse componente
customElements.define('card-promocoes', card)