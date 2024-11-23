import { BoardParam } from "./Board"
import { SymError } from "./Error"
import { GameVC } from "./GameVC"
import { Input } from "./Input"
import { State } from "./State"

// Класс
export class Game<T extends GameType> {
    // Шаги игры
    steps: State<T>[]
    // Номер текущей игры    
    current: number
    // Параметры доски (размеры)    
    boardParam: BoardParam
    // интерфейс для пользовательского ввода    
    input: Input<T>

    constructor(
        steps: State<T>[] | State<T>,
        input: Input<T>,
        boardParam: BoardParam,
        current: number = 0
    ) {
        if (Array.isArray(steps))
            this.steps = steps
        else
            this.steps = [steps]
        this.current = current
        this.boardParam = boardParam
        this.input = input
    }

    get state(): State<T> {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return this.steps[0]
    }

    clone(): Game<T> {
        // TODO
        // Функция должна вернуть копию объекта
        return this 
    }

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // В случае, если произовшла ошибка при чтении из input
        //  функция должна вывести предупреждение с помощью alert        
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        this.state.board.cells[index] = this.input.sym
        this.state.sym = this.input.sym
        this.input.move()
        GameVC.draw() 
        return true
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        return true  
    }
}