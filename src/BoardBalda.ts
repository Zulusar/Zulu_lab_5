import { Board, BoardParam } from "./Board"
import { Sym } from "./Sym"

export class BoardBalda extends Board<GameBalda> {
    constructor(
        str: string | Sym<GameBalda>[] = "балда",
        init: boolean = true
    ) {
        // TODO
        // Если длина str==5, то дополняет ее 10 пробелами до и после
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        super({} as Sym<GameBalda>[])
    }
    clone(): BoardBalda {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        return this
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}