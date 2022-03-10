const optGroupHora = document.querySelector(".optGroup__Hora")
const optGroupMinutos = document.querySelector(".optGroup__Minutos")

class OpcoesHorario {

    static gerarHoras() {
        for(let i = 0; i < 24; i++) {
            const option = document.createElement("option")
            if(i < 10) {
                option.innerText = `0${i}`
                option.value=`0${i}`
            }
            else {
                option.innerText = i
                option.value = i
            }
            optGroupHora.appendChild(option)
        }
    }

    static gerarMinutos() {
        for(let i = 0; i <= 60; i++) {
            const option = document.createElement("option")
            if(i < 10) {
                option.innerText = `0${i}`
                option.value=`0${i}`
            }
            else {
                option.innerText = i
                option.value = i
            }
            optGroupMinutos.appendChild(option)
        }
    }
}

export default OpcoesHorario