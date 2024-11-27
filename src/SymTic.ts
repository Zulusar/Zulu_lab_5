import { Sym } from "./Sym"

export class SymTic extends Sym<GameTic> {

    override checkSym(sym: string): boolean {
        // TODO
        // Вызыват checkSym родителя и 
        //  дополнительно проверяет на то, 
        //  что символ один из _X0
        let result = true
        try{
            super.checkSym(sym)
        }
        catch(SymError) {
            return result = false
        }
        return result
    }

}