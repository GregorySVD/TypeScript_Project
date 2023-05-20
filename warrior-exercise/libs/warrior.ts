import {SingleWarrior} from "../types";

export class Warrior implements SingleWarrior {
    constructor(public name: string, public hitPoints: number, public hp: number) {
    }
    setHp(hp : number) {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }

    getHitPoints() {
        return this.hitPoints;
    }

    getName() {
        return this.name;
    }

    levelUp() {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}
