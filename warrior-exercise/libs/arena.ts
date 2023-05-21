import {Warrior} from "./warrior";

enum ActiveWarrior {
    First,
    Second,
}


export class Arena {
    private activeWarrior: ActiveWarrior = ActiveWarrior.Second;
    constructor(
        public warrior1 : Warrior,
        public warrior2: Warrior, // insead of if (!(warrior1 instanceof Warrior)) {
        // throw new Error('warrior1 must be an instance of Warrior class!');}
       ) {
        //
        //
        // this.warrior1 = warrior1;
        // this.warrior2 = warrior2;
        // this.activeWarrior = 2;
    }

    fight() {
        const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;

        const attackingHitPoints = attacker.getHitPoints();
        const attackedOldHp = attacked.getHp();
        const attackedNewHp = attackedOldHp - attackingHitPoints;

        console.log(attacker.getName(), 'is attacking', attacked.getName(), 'and how he has', attackedNewHp, 'hp');

        attacked.setHp(attackedNewHp);

        this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;
        /**
         if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
         */

        if (attackedNewHp <= 0) {
            console.log(attacked.getName(), 'goes to Valhalla');
            return attacker;
        }

        return null;
    }
}
