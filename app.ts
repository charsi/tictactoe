const readline = require('readline');
import {Board, BoxStatus} from './Board';

let tictac = new Board();

tictac.draw();

tictac.go(1,1,"X");

tictac.go(1,0,"O");
