import { Board } from "./Board"
import { Sym } from "./Sym"


export class State<T extends GameType> {
    board: Board<T>
    sym: Sym<T>

    constructor(
        board: Board<T>,
        sym: Sym<T>
    ) {
        this.board = board
        this.sym = sym
    }

    clone(): State<T>{
        // TODO
        // Функция должна вернуть копию объекта
        let newState = new State (this.board.clone(), this.sym)//клонирование состояния
        return newState
    }
}