

export class Warrior {
    constructor(
        // change access modifiers to private, because we use methods in out appi
        private _name: string,
        private _hitPoints: number,
        private _hp: number)
    {}
    get name(): string {
        return this._name;
    }

    get hitPoints(): number {
        return this._hitPoints;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    levelUp(): void {
        this._hitPoints *= 1.1;
        this._hp *= 1.1;
    }
}
