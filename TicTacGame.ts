// one character only please

const PLAYER_A_MARK = "X";
const PLAYER_B_MARK = "O";
const EMPTY_MARK = " ";

export type BoxStatus = typeof EMPTY_MARK | typeof PLAYER_A_MARK | typeof PLAYER_B_MARK;

export class TicTacGame {
    size : number;
    board : BoxStatus[][];
    lastPlayer : BoxStatus;
    winner : BoxStatus = EMPTY_MARK;

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
        this.lastPlayer = EMPTY_MARK;
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

    go(hIndex:number, vIndex:number){
        if(this.board[hIndex][vIndex]!==EMPTY_MARK){
            throw "that box has already been filled";
        }
        let mark:BoxStatus;
        if(this.lastPlayer===EMPTY_MARK){
            mark = PLAYER_A_MARK;
        }else mark = this.nextPlayer();
        this.lastPlayer = mark;
        this.board[hIndex][vIndex] = mark;
        this.draw();
    }

    nextPlayer(): BoxStatus{
        return (this.lastPlayer===PLAYER_A_MARK)? PLAYER_B_MARK : PLAYER_A_MARK;
    }

    verticalWin():boolean{
        return false;
    }

    diagonalWin():boolean{
        return false;
    }


    horizontalWin():boolean{
        let win : boolean = false;
        for(let i=0; i<this.board.length; i++){
            let row : BoxStatus[] = this.board[i];
            for(let j=0; j<row.length; j++){
                let player : BoxStatus = row[0];
                if (player!==EMPTY_MARK && row.every((p: BoxStatus)=>{return p===player})){
                    this.winner = player;
                    win = true;
                }
            }
        }
        return win;
    }

    gameOver():boolean{
        if(this.horizontalWin() || this.verticalWin() || this.diagonalWin()){
            return true;
        }
        return false;
    }
};


