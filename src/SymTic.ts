import { Sym } from "./Sym"

export class SymTic extends Sym<GameTic> {

    override checkSym(sym: string): boolean {
        // TODO
        // Вызыват checkSym родителя и 
        //  дополнительно проверяет на то, 
        //  что символ один из _X0
        
        super.checkSym(sym)
        if(sym != "_"){
            super.checkSym(sym) == false
            return false
        }
        else return true
            //return true
    }

}