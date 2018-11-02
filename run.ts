class Board {
    size : number;
    constructor (size: number){
        this.size = size;
    }

    create(){
        console.log("   | A | B | C | D |\n"
                   +" 1 |   |   |   |   |\n"
                   +" 2 |   |   |   |   |\n"
                   +" 3 |   |   |   |   |\n"
                   +" 4 |   |   |   |   |");
    }
};


let sadsad = new Board(3);

myBoard.create();