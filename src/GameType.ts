interface GameType{
    blank: string
}

interface GameTic extends GameType {
    x: string
    o: string
}


interface GameBalda extends GameType {
    symbol: string
}