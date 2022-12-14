const form = document.querySelector("#form-register-contato")
const button = document.querySelector(".ENVIAR")
const checkbox = document.querySelector(".checkbox")
const checkboxInputs = checkbox.querySelectorAll("input")


const inputs = Array.from(form.querySelectorAll("input"));

const checkEmptyInputs = (input) => {
    if(input.value === "") return false
    return true
}

const getInputData = (input) => input.value

const handleClickButton = async (e) => {
    e.preventDefault()
    let status = true;

    inputs.forEach((input) => {
        if(!checkEmptyInputs(input)) {
            alert(`Porfavor preencha o campo ${input.name}`)
            status = false
        }        
    })

    if (!status) return false;

    if (checkboxInputs[0].checked == false && checkboxInputs[1].checked == false) {
        alert("Selecione o tipo da mensagem")
        return false
    }
    
    const data = {}
    console.log(inputs);
    data.nome = inputs[0].value
    data.email = inputs[1].value
    data.celular = inputs[2].value
    data.mensagem = inputs[6].value
    data.telefone = inputs[3].value

    console.log(data);
    
    try {
        const res = await axios.post("http://localhost:5050/v1/contato", data);        
        alert("Criado com sucesso!")
    } catch (error) {
        console.log(error);
        alert("Nao foi possive cadastrar")
    }
    
}


button.addEventListener("click", handleClickButton)

