class Board {
    size : number;
    table : BoxStatus[][];
    lastPlayer : BoxStatus;

    constructor (){
        this.size = 3;
        this.table =  [];
        for(let i=0;i<this.size;i++){
            let row : BoxStatus[] = [];
            for(let j=0;j<this.size;j++){
                row.push(" ");
            }
            this.table.push(row);
        }
        this.lastPlayer = " ";
    }

    draw(){
        let str : string[] = [];
        str.push("   |");
        for(let i=0; i<this.size; i++){
            str.push(" "+i.toString()+" |");//header
        }
        str.push("\n");
        for(let x=0; x<this.size; x++){
            str.push(" "+x.toString()+" |"); //rows
            for(let y=0; y<this.size; y++){ 
                str.push(" "+this.table[x][y]+" |"); //columns
            }
            str.push("\n");
        }
        console.log(str.join(""));
    }

    go(hIndex:number, vIndex:number, mark: BoxStatus){
        if(mark == this.lastPlayer){
            throw "same player can't go again";
        }
        if(this.table[hIndex][vIndex]!==" "){
            throw "that box has already been filled";
        }
        this.table[hIndex][vIndex] = mark;
        this.draw();
    }
};

type BoxStatus = " " | "X" | "O";

let tictac = new Board();

tictac.draw();

tictac.go(1,1,"X");

tictac.go(1,0,"O");
