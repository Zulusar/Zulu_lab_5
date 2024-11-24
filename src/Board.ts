import { GameVC } from "./GameVC"
import { Sym } from "./Sym"

let firstSym: Sym<GameType>

export type BoardParam = {
    row: number,
    col: number
  }

// Абстрактный класс доски
export abstract class Board<T extends GameType>{
    cells: Sym<T>[]

    static row: number
    static col: number

    constructor(
        str: Sym<T>[],
        row?: number,
        col?: number,
    ) {
        // TODO
        // При наличии row или col 
        //  инициализировать соответсвующие поля
        // Инициализировать массив cells
        this.cells = []
        if(typeof(row) == "number" && typeof(col) == "number" && row == 3) {//инициализация для Tic
            let multiplication = row*col
            for(let i = 0; i < multiplication; i++){
                this.cells.push(new Sym<T>)
            }
        }
    }

    abstract clone(): Board<T>     

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        // Реомендуется реализация без циклов,
        //  с использованием функций массивов
        let count = 0
        for( let i = 0; i<this.cells.length; i++){
            if(this.cells[i].sym == "_") count ++
        }
        return (count == 1) ? true : false
        //return true
    }

    move(index: number, sym: Sym<T>): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        if(this.cells[index].sym == "_"){
            this.cells[index] = sym
            return true
        }
        else return false
        //return true
    }

    status(): string { 
        // TODO
        // Если доска заполнена возвращает "Игра закончена"
        //   если игра не закончена, строку "Идет игра".
        return (this.isFill()!= true) ? "Идет игра" : "Игра окончена"
    }

}
