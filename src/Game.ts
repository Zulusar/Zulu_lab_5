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
        return this.steps[this.current]
    }

    clone(): Game<T> {
        // TODO
        // Функция должна вернуть копию объекта
        let newSteps: State<T>[] = []
        newSteps.push(this.steps[this.current].clone())
        return new Game (newSteps, this.input, this.boardParam) 
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
        this.state.board.status()
        if (this.state.board.status() != "Идет игра"){
            return false
        }
        else{
            this.state.board.move(index, this.input.sym)
            this.steps.push(this.state.clone())
            this.input.move()
            this.toStep
            this.current++
            GameVC.draw() 
            return true
        }
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        if (this.steps.length<step) { //проверка на возможность возврата к ходу
            return false
        }
        else {
            this.steps[this.current] = this.steps[step].clone()
            if(step % 2 != 0) this.input.move()//подбор нужного символа в зависимости от step
            GameVC.draw()
            this.current == step //переписывание счетчика
            return true
        }        
    } 
}
