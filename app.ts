import {TicTacGame, BoxStatus} from './TicTacGame';

const readline = require('readline');


let tictac = new TicTacGame(3);

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

tictac.draw();


(function nextMove(){
    rl.question('Player '+tictac.nextPlayer()+' position:', (answer:number[])=>{
        try{
            tictac.go(answer[1],answer[0]);
        }catch(e){
            console.log('ERROR: '+e);
        }
        if(!tictac.gameOver()){ 
            nextMove();
        }else {
            rl.close();
            console.log('Game Over! '+tictac.winner+' wins');
        }     
    });
})();

