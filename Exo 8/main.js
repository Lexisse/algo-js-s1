class Pokemon {
	constructor(name,attack,defense,hp,luck) {
		this.name = name
		this.atk = attack
		this.def = defense
		this.hp = hp
		this.luck = luck
	}

	getLife() {
		if (this.hp < 0) {
			this.hp = 0
		}
		console.log(this.name + " a " + this.hp + " points de vie restants.")
	}

	isLucky() {
		if (Math.random() >= this.luck) {		//ou return (Math.random() <= this.luck)
			return false
		}
		return true
	}
}

function bagar(pok1,pok2) {
	while (pok1.hp > 0 && pok2.hp > 0) {
		dmg1 = pok1.atk - pok2.def
		dmg2 = pok2.atk - pok1.def
		if (dmg1 <= 0) {
			dmg1 = 1
		}
		if (dmg2 <= 0) {
			dmg2 = 1
		}
		console.log(pok1.name + " attaque !")
		if (pok1.isLucky() === true) {
			pok2.hp -= dmg1
			console.log(pok2.name + " a perdu " + dmg1 + " points de vie." )
			pok2.getLife()
			if (pok2.hp <= 0) {
				console.log(pok2.name + " est K.O ! " + pok1.name + " a gagné !")
				break;
			}
		} else {
			console.log("L'attaque de " + pok1.name + " a raté !") 
			}
		console.log(pok2.name + " attaque !")
		if (pok2.isLucky() === true) {
			pok1.hp -= dmg2
			console.log(pok1.name + " a perdu " + dmg2 + " points de vie." )
			pok1.getLife()
			if (pok1.hp <= 0) {
				console.log(pok1.name + " est K.O ! " + pok2.name + " a gagné !")
				break;
			} else {
			console.log("L'attaque de " + pok2.name + " a raté !")
		}
	}
}
}

let deceptionSurprise = new Pokemon("Chenipan", 100000, 0, 5, 0.01)
let apocalypse = new Pokemon("Arceus", 2000, 2000, 1500, 1.0)
let normie = new Pokemon("Reptincel", 130, 70, 104, 0.6)
let hole = new Pokemon("Spiritomb", 115, 95, 96, 0.65)
let groBalour = new Pokemon("Ronflex", 100, 110, 200, 0.8)

bagar(deceptionSurprise, apocalypse)
bagar(normie,groBalour)