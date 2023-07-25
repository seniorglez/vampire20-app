export class Vampire {
    constructor(
        public hash?: string,
        public name?: string,
        public clan?: string,
        public generation?: number,
        public strength?: number,
        public dexterity?: number,
        public stamina?: number
    ) { }

    clone(): Vampire {
        return new Vampire(
            this.hash,
            this.name,
            this.clan,
            this.generation,
            this.strength,
            this.dexterity,
            this.stamina
        );
    }

}

