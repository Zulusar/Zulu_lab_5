import { Board, BoardParam } from "./Board"
import { Sym } from "./Sym"
import { SymTic } from "./SymTic"

export class BoardTic extends Board<GameTic> {

    constructor(
        str: string | SymTic[] = "_________",
        init: boolean = true
    ) {
        // TODO
        // Если длина str!=9, то используется строка по умолчанию
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        super(str as Sym<GameTic>[], BoardTicParam.row, BoardTicParam.col)
    }

    clone(): BoardTic {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        let newBoard = new BoardTic()//клонирование игры
        for(let i=0; i<this.cells.length; i++){//по-другому не получается
            newBoard.cells[i] = this.cells[i]
        }
        return newBoard
    }

    private getLineChar(line: number[]): string[] {
        return [
            this.cells[line[0]].sym,
            this.cells[line[1]].sym,
            this.cells[line[2]].sym,
        ]
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    private checkWin() {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        let data = "_"
        for(let i = 0; i < BoardTic.winPos.length; i++){
            if (this.getLineChar(BoardTic.winPos[i])[0] == this.getLineChar(BoardTic.winPos[i])[1]  && this.getLineChar(BoardTic.winPos[i])[0] == this.getLineChar(BoardTic.winPos[i])[2]&& this.getLineChar(BoardTic.winPos[i])[0] != "_") {
                data = this.getLineChar(BoardTic.winPos[i])[0]
                break
            }
            else  data = "_"   
        }
        return data
    }

    override status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, вызывает status родителя.
        if(this.checkWin()!= "_") return `Победил ${this.checkWin()}`
        else return super.status()//на случай победы 
    }
}

export const BoardTicParam: BoardParam = {
    row: 3,
    col: 3
}