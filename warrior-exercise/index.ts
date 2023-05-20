import {Warrior, Arena} from './types/index';



const fighter1 = new Warrior('Kicia', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2,2);

let winner;
do {
    winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.getName(), 'is a winner!');
