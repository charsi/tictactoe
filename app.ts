import {TicTacGame, BoxStatus} from './TicTacGame';

const readline = require('readline');


let tictac = new TicTacGame(3);

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

tictac.draw();

while(!tictac.finished()){ // game still on
    rl.prompt('enter position:', (answer:number[])=>{
        tictac.go(answer[0],answer[1],"X");
        rl.close();
    });
}

//tictac.go(1,1,"X");

//tictac.go(1,0,"O");
