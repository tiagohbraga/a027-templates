let novoParagrafo = ""
let conteudoInput = ""

let substituaValor = () => {
    let novoParagrafo = document.getElementById("paragrafo")
    let conteudoInput = document.getElementById("texto")
    novoParagrafo.innerHTML = conteudoInput.value
    conteudoInput.value = ""
}
let valorAtual = () => {
    conteudoInput = document.getElementById("texto")
    console.log(conteudoInput.value)
}