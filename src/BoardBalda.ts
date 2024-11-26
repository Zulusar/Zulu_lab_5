import { Board, BoardParam } from "./Board"
import { Sym } from "./Sym"

let a = 0

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
        super(str as Sym<GameBalda>[], BoardBaldaParam.row, BoardBaldaParam.col)
        for(let i = 10; i<15; i++){    
            this.cells.splice(i, 0, this.cells[i].make(str[a] as string)) 
            a++
        }
    }

    clone(): BoardBalda {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        let newBoard = new BoardBalda()//клонирование игры
        for(let i=0; i<this.cells.length; i++){//по-другому не получается
            newBoard.cells[i] = this.cells[i]
        }
        return newBoard
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}