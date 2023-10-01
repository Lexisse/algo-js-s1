let musicList = ["Le temps des tempêtes (Sarcozy)", 
				"René la Taupe (René la Taupe)", 
				"Ladybug opening song (Kaaris)",  
				"Toccota et fugue en ré mineur (Jean-Sébastien Bach)",
				"Anissa (Wejdene)"]	

function randInt(max) {
	return Math.floor(Math.random() * max); //math.floor() arrondit à l'entier le plus bas, math.random() renvoie un chiffre x ∈ ]0;1[.
}			

class Depressif {
	constructor(name,sanity,redLightCount) {
		this.name = name
		this.sanity = sanity
		this.redLightCount = redLightCount		//Une fois a 30, il explose !
		this.maxSanity = sanity
	}

	trajet(liste) {
		while (this.sanity > 0 && this.redLightCount < 30) {
			let musicChoice = liste[randInt(5)]
			this.redLightCount ++
			console.log(this.name + " est arrivé au feu numéro " + this.redLightCount + ".")
			console.log("La musique à la radio est " + musicChoice + ".")
			if (musicChoice == "Anissa (Wejdene)") {
				this.sanity -= 1
				console.log(this.name + " perd 1 de santé mentale. Il lui reste " + this.sanity + " de santé mentale.")
			}
		}
		if (this.sanity <= 0) {
			let missingLight = 30 - this.redLightCount
			console.log(this.name + " a perdu toute sa santé mentale. Il a explosé. Il lui restait " + missingLight + " feux à passer.")
		} else {
			let change = this.maxSanity - this.sanity
			console.log(this.name + " est arrivé à destination ! Cela lui a pris " + change + " changements.")
		}
}
}

John = new Depressif("John",10,0)

John.trajet(musicList)