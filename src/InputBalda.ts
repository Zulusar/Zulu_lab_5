import { Input } from "./Input"
import { Sym } from "./Sym"

export class InputBalda extends Input<GameBalda>{
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): Sym<GameBalda> {
        // TODO
        //  возвращает символ из поля ввода        
        let but = <HTMLInputElement>document.getElementById(`inputBalda`) //найти поле ввода и взять оттуда символ
        //but.textContent = this.html
        let newBut = new Sym<GameBalda>
        let empty = "_"
        if(but.value == "") return newBut.make(empty)
        else return newBut.make(but.value)
    }

    move(): void {
        // TODO
        //  очищает поле ввода\
         let butClear = <HTMLInputElement>document.getElementById(`inputBalda`)
        butClear.value = ""
    }

}