const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

const button = document.querySelector(".button")



const handleClickButton = async (e) => {
    e.preventDefault()
    
    const data = {}
    

    if(email.value === ""){
        alert("Preecha o campo de email")
        return false    
    }

    if(senha.value == "") {
        alert("preecha o campo de senha") 
        return false
    }

    console.log(email.value, senha.value);

    data.email = email.value    
    data.senha = senha.value

   
    try {
        const res = await axios.post("http://localhost:5050/v1/funcionario/login", data)
    
        localStorage.setItem("token", res.data.login[0].token) 

        location.href = "http://127.0.0.1:5500/admin/eployeeRec.html"
    } catch (error) {
        alert("Login Invalido")
    }

}


button.addEventListener("click", handleClickButton)