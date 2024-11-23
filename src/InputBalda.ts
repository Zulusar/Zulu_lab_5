import { Input } from "./Input"
import { Sym } from "./Sym"

export class InputBalda extends Input<GameBalda>{
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): Sym<GameBalda> {
        // TODO
        //  возвращает символ из поля ввода        
        return {} as Sym<GameBalda>
    }
    move(): void {
        // TODO
        //  очищает поле ввода
    }

}