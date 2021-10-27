
class Fighter{

    constructor() {
        this.hp = 0
        this.dmgMin = 0
        this.dmgMax = 1
        this.attackRatio = 1

    }
}



class Game{
    constructor() {
        this.round = 0
        this.dragon = new Fighter()
        this.player = new Fighter()
        this.setDifficulty()
        this.setWeapon()
        this.setArmor()
    }

    play(){
        while (this.dragon.hp > 0 || this.player.hp > 0){
            let playerStart = Math.random() < 0.5;
            if (playerStart){
                if(! this.dragonAttack()){
                    return false
                }
            }
            else{
                if(! this.playerAttack()){
                    return true
                }
            }
        }
        return this.player.hp > 0
    }

    dragonAttack(){
        this.player.hp -= getRandomInt(this.dragon.dmgMin, this.dragon.dmgMax) * this.dragon.attackRatio
        return this.player.hp > 0
    }

    playerAttack(){
        this.dragon.hp -= getRandomInt(this.player.dmgMin, this.player.dmgMax) * this.player.attackRatio
        return this.dragon.hp > 0
    }

    setDifficulty() {
        this.difficulty = getInteger("Niveau de difficulté ?\n1. Facile - 2.Normal - 3.Difficile", 1, 3)
        if (this.difficulty === 1){
            this.dragon.hp = getRandomInt(150,200);
            this.dragon.dmgMin = 10
            this.dragon.dmgMax = 20
            this.player.hp = getRandomInt(200,250);
            this.player.damageMin = 25
            this.player.damageMax = 30
        }
        else if (this.difficulty === 2){
            this.dragon.hp = getRandomInt(200,250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(200,250);
            this.player.damageMin = 15
            this.player.damageMax = 20
        }
        else if (this.difficulty === 3){
            this.dragon.hp = getRandomInt(200,250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(150,200);
            this.player.damageMin = 5
            this.player.damageMax = 10
        }
    }

    setWeapon() {
        this.weapon =  getInteger("Épée ?\n1. Bois - 2.Acier - 3.Excalibur", 1,3)
        if (this.weapon === 1){
            this.player.attackRatio = 0.5
        }
        else if (this.weapon === 2){
            this.player.attackRatio = 1
        }
        else if (this.weapon === 3){
            this.player.attackRatio = 1.5
        }

    }

    setArmor() {
        this.armor =  getInteger("Armure ?\n 1.Cuivre - 2.Fer - 3.Magique", 1,3)
        if (this.weapon === 1){
            this.dragon.attackRatio = 1
        }
        else if (this.weapon === 2){
            this.dragon.attackRatio = 0.75
        }
        else if (this.weapon === 3){
            this.dragon.attackRatio = 0.5
        }
    }
}

let game = new Game()
game.play()


