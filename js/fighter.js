class Fighter {

    constructor(name) {
        this.name = name
        this.hp = 0
        this.dmgMin = 0
        this.dmgMax = 1
        this.attackRatio = 1

    }

    getDamage(dmg) {
        this.hp -= dmg
        if (this.hp < 0)
            this.hp = 0
    }

    attack() {
        return Math.ceil(getRandomInt(this.dmgMin, this.dmgMax) * this.attackRatio)
    }

    isAlive() {
        return this.hp > 0;
    }
}
