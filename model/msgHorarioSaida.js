import mostrarHorarioSaida from "./script.js"
import OpcoesHorario from "./addOpcoes.js"

const span = document.querySelector("span")

class horarioSaida {

    constructor(hora, minuto, dia) {
        this._hora = hora;
        this._minuto = minuto;
        this._dia = dia;
    }

    get hora() {
        return this._hora
    }

    get minuto() {
        return this._minuto
    }

    get dia() {
        return this._dia
    }

    set hora(nH) {
        this._hora = nH
    }

    set minuto(nM) {
        this._minuto = nM
    }
    
    set dia(nD) {
        this._dia = nD
    }

    horaDeSaida() {

        let calculoHoras = 0

        this.dia === "Domingo" ? calculoHoras = Number(this.hora) + 6 : calculoHoras = Number(this.hora) + 9
        
        span.innerText = `${this.dia} seu horário de saída é às ${calculoHoras}h${this.minuto}.`
    }
}

export default horarioSaida