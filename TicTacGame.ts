// one character only please

const PLAYER_A_MARK = 'X';
const PLAYER_B_MARK = 'O';
const EMPTY_MARK = ' ';

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
                row.push(EMPTY_MARK);
            }
            this.board.push(row);
        }
        this.lastPlayer = EMPTY_MARK;
    }

    draw(){
        let str : string[] = [];
        str.push('   |');
        for(let i=0; i<this.size; i++){
            str.push(' '+i.toString()+' |');//header
        }
        str.push("\n");
        for(let x=0; x<this.size; x++){
            str.push(' '+x.toString()+' |'); //rows
            for(let y=0; y<this.size; y++){
                let boxMark =  this.board[x][y];
                str.push(' '+boxMark+' |'); //columns
            }
            str.push('\n');
        }
        console.log(str.join(''));
    }

    go(hIndex:number, vIndex:number){
        if(this.gameOver()){
            throw 'this game already ended';
        }
        if(this.board[vIndex][hIndex]!==EMPTY_MARK){
            throw 'that box has already been filled';
        }
        let mark:BoxStatus;
        if(this.lastPlayer===EMPTY_MARK){
            mark = PLAYER_A_MARK;
        }else mark = this.nextPlayer();
        this.lastPlayer = mark;
        this.board[vIndex][hIndex] = mark;
        this.draw();
    }

    nextPlayer(): BoxStatus{
        return (this.lastPlayer===PLAYER_A_MARK)? PLAYER_B_MARK : PLAYER_A_MARK;
    }

    private verticalWin():boolean{
        let win : boolean = false;
        for(let i=0; i<this.size; i++){
        let column : BoxStatus[] = [];
            for(let j=0; j<this.size; j++){
                column.push(this.board[j][i]);
            }
            let player : BoxStatus = column[0];
            if (player!==EMPTY_MARK && column.every((p: BoxStatus)=>{return p===player})){
                this.winner = player;
                win = true;
            }
        }
        return win;
    }

    private horizontalWin():boolean{
        let win : boolean = false;
        for(let i=0; i<this.size; i++){
            let row : BoxStatus[] = this.board[i];
            let player : BoxStatus = row[0];
            if (player!==EMPTY_MARK && row.every((p: BoxStatus)=>{return p===player})){
                this.winner = player;
                win = true;
            }
        }
        return win;
    }

    private diagonalWin():boolean{
        let win : boolean = false;
        let diagonalvaluesA : BoxStatus[] = [];
        for(let i=0; i<this.size; i++){
            diagonalvaluesA.push(this.board[i][i]);
        }
        let player : BoxStatus = diagonalvaluesA[0];
        if (player!==EMPTY_MARK && diagonalvaluesA.every((p: BoxStatus)=>{return p===player})){
            this.winner = player;
            win = true;
        }
        if(!win){
            let diagonalvaluesB : BoxStatus[] = [];
            for(let i=0; i<this.size; i++){
                diagonalvaluesB.push(this.board[this.size-1-i][i]);
            }
            player = diagonalvaluesB[0];
            if (player!==EMPTY_MARK && diagonalvaluesB.every((p: BoxStatus)=>{return p===player})){
                this.winner = player;
                win = true;
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


