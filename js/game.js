class Game {
    constructor() {
        this.round = 0
        this.armor = 0
        this.difficulty = 0
        this.weapon = 0
        this.dragon = new Fighter("dragon")
        this.player = new Fighter("knight")
        this.setDifficulty()
        this.setWeapon()
        this.setArmor()
        this.initHtml = "<h3>Points de vie de départ</h3>" + this.generateTableRound()
        this.coreHtml = ""
        this.winnerHtml = ""
    }


    generateTableRound() {

        let result = "<table><thead><tr>" +
            "<th>Personnage</th>" +
            "<th>PV</th>" +
            "</tr></thead>"
        result += "<tr>" +
            "<td>" + this.player.name + "</td>" +
            "<td>" + this.player.hp + "</td>" +
            "</tr>"
        result += "<tr>" +
            "<td>" + this.dragon.name + "</td>" +
            "<td>" + this.dragon.hp + "</td>" +
            "</tr>"
        return result + "<table>"

    }

    loop() {
        while (this.dragon.isAlive() && this.player.isAlive()) {
            this.round += 1
            this.coreHtml += "<h3>---- Tour n°" + this.round + " ----</h3>"
            let playerStart = Math.random() < 0.5;
            console.log('ROUND', this.round)
            if (playerStart) {
                this.playerAttack()

            } else {
                this.dragonAttack()
            }
            this.coreHtml += this.generateTableRound()
        }
        this.showGameWinner()
        return this.player.hp > 0
    }


    dragonAttack() {
        let dmg = this.dragon.attack()
        console.log("dragon attack dmg", dmg)
        this.player.getDamage(dmg)
        this.coreHtml += "<p>Le dragon est plus rapide et vous brule ,il vous eneleve " + dmg + " PV</p>"
    }

    playerAttack() {
        let dmg = this.player.attack()
        console.log("player Attack dmg", dmg)
        this.dragon.getDamage(dmg)
        this.coreHtml += "<p>Vous êtes plus rapide et frappez le dragon, vous lui enlevez " + dmg + " PV</p>"

    }

    setDifficulty() {
        this.difficulty = getInt("Niveau de difficulté ?\n1. Facile - 2.Normal - 3.Difficile", 1, 3)
        if (this.difficulty === 1) {
            this.dragon.hp = getRandomInt(150, 200);
            this.dragon.dmgMin = 10
            this.dragon.dmgMax = 20
            this.player.hp = getRandomInt(200, 250);
            this.player.dmgMin = 25
            this.player.dmgMax = 30
        } else if (this.difficulty === 2) {
            this.dragon.hp = getRandomInt(200, 250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(200, 250);
            this.player.dmgMin = 15
            this.player.dmgMax = 20
        } else if (this.difficulty === 3) {
            this.dragon.hp = getRandomInt(200, 250);
            this.dragon.dmgMin = 20
            this.dragon.dmgMax = 30
            this.player.hp = getRandomInt(150, 200);
            this.player.dmgMin = 5
            this.player.dmgMax = 10
        }
    }

    setWeapon() {
        this.weapon = getInt("Épée ?\n1. Bois - 2.Acier - 3.Excalibur", 1, 3)
        if (this.weapon === 1) {
            this.player.attackRatio = 0.5
        } else if (this.weapon === 2) {
            this.player.attackRatio = 1
        } else if (this.weapon === 3) {
            this.player.attackRatio = 1.5
        }

    }

    setArmor() {
        this.armor = getInt("Armure ?\n 1.Cuivre - 2.Fer - 3.Magique", 1, 3)
        if (this.weapon === 1) {
            this.dragon.attackRatio = 1
        } else if (this.weapon === 2) {
            this.dragon.attackRatio = 0.75
        } else if (this.weapon === 3) {
            this.dragon.attackRatio = 0.5
        }
    }

    showGameWinner() {
        this.winnerHtml = "<div class=\"winner-div\">";
        if (this.player.isAlive()) {
            this.winnerHtml += "<img alt=\"dragon\" src=\"img/dragon.png\" class=\"winner-img\"/>" +
                " <h3 class=\"text-center\">Vous avez gagner , vous êtes vraiment fort !</h3>" +
                "<p class=\"text-center\"> il vous restait " + this.player.hp + " PV </p>"

        } else {
            this.winnerHtml += "<img alt=\"chevalier\" src=\"img/knight.png\" class=\"winner-img\"/>" +
                "<h3 class=\"text-center\">Vous avez perdu , vous avez été carboniser !</h3>" +
                "<p class=\"text-center\"> il restait " + this.dragon.hp + " PV  au dragon</p>"
        }
        this.winnerHtml += "</div>"
        document.querySelector('#game').innerHTML = this.winnerHtml + this.initHtml + this.coreHtml
    }
}
