const PLAYER_A_MARK = "X";
const PLAYER_B_MARK = "O";
const EMPTY_MARK = " ";

export type BoxStatus = typeof EMPTY_MARK | typeof PLAYER_A_MARK | typeof PLAYER_B_MARK;

export class TicTacGame {
    size : number;
    board : BoxStatus[][];
    lastPlayer : BoxStatus;

    constructor(size : number){
        this.size = size;
        this.board =  [];
        for(let i=0;i<this.size;i++){
            let row : BoxStatus[] = [];
            for(let j=0;j<this.size;j++){
                row.push(" ");
            }
            this.board.push(row);
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
                let boxMark =  this.board[x][y];
                str.push(" "+boxMark+" |"); //columns
            }
            str.push("\n");
        }
        console.log(str.join(""));
    }

    go(hIndex:number, vIndex:number, mark: BoxStatus){
        if(mark === " "){
            throw '\''+EMPTY_MARK+'\' is not a valid mark';
        }
        if(mark == this.lastPlayer){
            throw "same player can't go again";
        }
        if(this.board[hIndex][vIndex]!==EMPTY_MARK){
            throw "that box has already been filled";
        }
        this.board[hIndex][vIndex] = mark;
        this.draw();
    }

    nextPlayer(){
        if(this.lastPlayer===PLAYER_A_MARK){
            return PLAYER_B_MARK;
        }
    }

    finished(){
        return false;
    }
};


