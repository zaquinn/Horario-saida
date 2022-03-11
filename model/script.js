import OpcoesHorario from "./addOpcoes.js"
import horarioSaida from "./msgHorarioSaida.js"

const form = document.querySelector("form")

const span = document.querySelector("span")

const h2 = document.querySelector("h2")

const h2div = document.querySelector(".div__h2")

OpcoesHorario.gerarHoras()

OpcoesHorario.gerarMinutos()


const mostrarHorarioSaida = form.addEventListener("submit", (event) => {

    event.preventDefault()

    const listaDados = {}

    const inputs = event.target

    for(let i = 0; i < inputs.length; i++) {
        const {name, value} = inputs[i]
        if(name) {
            listaDados[name] = value
        }

        inputs[i].value = ""
    }

    const newHora = new horarioSaida(listaDados.entradaHoras, listaDados.entradaMinutos, listaDados.dia)

    h2div.classList.remove("hidden")
    h2.classList.remove("hidden")

    newHora.horaDeSaida()
    
})

export default mostrarHorarioSaida