
class Fighter{

    constructor() {
        this.hp = 0
        this.dmgMin = 0
        this.dmgMax = 1
        this.attackRatio = 1

    }
    attack (){
        return getRandomInt(this.dmgMin, this.dmgMax) * this.attackRatio
    }
    isAlive(){
return this.hp >0;

}
}



class Game{
    constructor() {
        this.round = 0
        this.armor = 0
        this.difficulty = 0
        this.weapon = 0
        this.dragon = new Fighter()
        this.player = new Fighter()
        this.setDifficulty()
        this.setWeapon()
        this.setArmor()
        this.initHtml = ""
        this.coreHtml = ""
        this.winnerHtml = ""
    }

    loop(){
        while (this.dragon.isAlive() && this.player.isAlive()){
            this.round += 1
            let playerStart = Math.random() < 0.5;
            console.log('ROUND', this.round)
            if (playerStart){
               this.playerAttack()
                    
                

            }
            else{
               this.dragonAttack()
                    
              
            }
        }
        console.log(this.round , this.player.hp , this.dragon.hp)
        this.showGameWinner()
        return this.player.hp > 0
    }

    dragonAttack(){
        let dmg= this.dragon.attack()
        console.log("dragon attack dmg", dmg)
        this.player.hp -= dmg
        return this.player.hp > 0
    }

    playerAttack(){
        let dmg= this.player.attack()
        console.log("player Attack dmg", dmg)
        this.dragon.hp -= dmg
        return this.dragon.hp > 0
    }

    setDifficulty() {
        this.difficulty = getInteger("Niveau de difficulté ?\n1. Facile - 2.Normal - 3.Difficile", 1, 3)
        if (this.difficulty === 1){
            this.dragon.hp = getRandomInt(150,200);
            this.dragon.dmgMin = 10
            this.dragon.dmgMax = 20
            this.player.hp = getRandomInt(200,250);
            this.player.dmgMin = 25
            this.player.dmgMax = 30
        }
        else if (this.difficulty === 2){
            this.dragon.hp = getRandomInt(200,250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(200,250);
            this.player.dmgMin = 15
            this.player.dmgMax = 20
        }
        else if (this.difficulty === 3){
            this.dragon.hp = getRandomInt(200,250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(150,200);
            this.player.dmgMin = 5
            this.player.dmgMax = 10
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

    showGameWinner() {
        document.querySelector('#game').innerHTML = this.winnerHtml + this.initHtml + this.coreHtml
    }
}

let game = new Game()
game.loop()
game.showGameWinner()


