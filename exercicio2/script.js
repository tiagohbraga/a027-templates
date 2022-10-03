const mudaInputs = () => {
    let nome = document.getElementById("nome")
    let endereco = document.getElementById("endereco")
    let email = document.getElementById("email")
    
    console.log(`
    ${nome.value}
    ${endereco.value}
    ${email.value}`)

nome.value= ""
endereco.value = ""
email.value = ""
}
