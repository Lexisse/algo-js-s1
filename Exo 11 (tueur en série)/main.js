let prenom = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane", "Oscar",
			  "Esecchiel","Abraham", "Joseph", "Ornicar", "Jack", "John", "Josh", "Balthazar", "Fabrice", "Andromède", "Fauna",
			  "Azazel", "Rudolf", "Mickey", "Défibrilateur", "X Æ A-XII", "Griffith", "Exa Dark Sideræl", "Marine", "Mumei",
			  "Alice", "Keanay", "Gaêtan", "Thomas", "Alexy", "Louis", "Ilyess", "Clément", "Florian", "Maxence", "Bumblebee",
			  "Lorryne", "Coraline", "Evangéline", "Ines", "Hillary", "Clémence" , "Juliette", "Swcharzenegger", "Eric", "Baelz",
			  "Spooder-man","Emmanuel","Sylvain","Luffy","Speedwagon","Sangoku","Ichigo","Gura", "Enna", "Millie", "Nerissa"]

let characteristics = ["nerd","guerrier","blondasse","aviateur","ouvrier du btp", "comptable","contrôleur SNCF","chômeur",
					   "multimilliardaire","fauché","divin","bretteur", "pacifique", "élève", "cannibale", "sous-caféine", 
					   "incompétent","inhumain","stellaire","invincible","lumineux", "passif-agressif", "plante verte",
					   "magnifique","table basse","table haute","déséquilibré","malade mental","mentalement dérangé", "ivre",
					   "mesuré","e-girl","e-boy", "dealer", "voleur", "royal", "kamikaze","bouffeur de cailloux","remarquable",
					   "dépressif","heureux","pervers narcissique","sadique","malade","en bonne santé","volant","héroîque",
					   "tractopellaire","qui n'a pas la lumière à tous les étages","table médium","travailleur IKEA",
					   "amateur de boulettes de viande IKEA","triton","sirène","émissaire de la table","génialement intelligent",
					   "fan d'Emistral Gagnant","roi des pirates","sapé comme jamais","partenaire particulier","unijambiste",
					   "manchot","waifu","husbando","aveugle","bonne vue","ambidextre","youtubeur minecraft","vtuber",
					   "stand-user","moldu","simp","gigachad","joueur LoL","sorcier","sorcelleur","bamboozled","aigri"] 
					   // J'en ai mis plein pour plus de variété, mais ça n'a aucun impact sur le jeu en soit.

function randInt(max) {
	return Math.floor(Math.random() * max); //math.floor() arrondit à l'entier le plus bas, math.random() renvoie un chiffre x ∈ ]0;1[.
}
class Killer {
	constructor(name,hp) {
		this.name = name
		this.hp = hp
	}

	getHp() {
		if (this.hp < 0) {
			this.hp = 0
		}
		console.log("Il reste au tueur " + this.hp + " points de vie.")
	}
}

class Survivor {
	constructor() {
		this.name = prenom[randInt(prenom.length)]
		this.chara = characteristics[randInt(characteristics.length)]
	}

	getCharaSheet() {
		console.log("Nom : " + this.name + ", Caractéristique : " + this.chara + ".")
	}
}

function sessionSurvie(tueur,surLi) {
	let deadList = []
	console.log("Les survivants sont les suivants : \n") 
	surLi.forEach((element) => element.getCharaSheet())
	console.log("\nLe tueur est " + tueur.name + ". Il a " + tueur.hp + " points de vie. Bon courage ! ")
	console.log("\n")
	while (tueur.hp > 0 && (surLi.length > 0)) {
		let target = randInt(surLi.length)
		let surviName = surLi[target].name
		console.log("\n")	//Pour plus de lisibilité, je sépare chaque tour par au saut d'une ligne
		console.log("Jason attaque " + surviName + "!")
		let suspense = randInt(3) //si c'est 0 le survivant meurt, 1 il survit et inflige 10 dégats, et 2 il inflige 15 dégats mais meurt.  Randint renvoie un chiffre entre 0 et 2 ici.
		if (suspense == 0) {
			console.log(tueur.name + " a mis fin aux jours de " + surviName + ".")
			deadList.push(surviName)
			surLi.splice(target,1)
			if (surLi.length == 1) {
				console.log("Il reste 1 survivant.")	//Condition spéciale, parce qu' "1 survivant" ne prend pas de s. Pour ce qui est de 0, c'est moins clair, alors j'ai laissé le pluriel
			} else {
				console.log("Il reste " + surLi.length + " survivants.")
			}
		} 
		if (suspense == 1) {
			tueur.hp -= 10
			console.log(surviName + " a esquivé l'attaque de " + tueur.name +", et lui à infligé 10 points de dégats !")
			tueur.getHp()
		}
		if (suspense == 2) {
			tueur.hp -= 15
			console.log(tueur.name + " a mis fin aux jours de " + surviName + ".\n Avant sa mort, " + surviName + " a réussi à lui infliger 15 points de dégats !")
			tueur.getHp()
			deadList.push(surviName)
			surLi.splice(target,1)
			if (surLi.length == 1) {
				console.log("Il reste 1 survivant.")	
			} else {
				console.log("Il reste " + surLi.length + " survivants.")
			}
		}
	}
	if (surLi.length > 0) {
		console.log("\n Les survivants ont gagné !")
		deadList.push(tueur.name + " (tueur)")
		if (surLi.length < 5) {
			console.log("... Malheureusement, il semble que certains d'entre eux n'ont pas survécus.")
			console.log("Les morts sont les suivants, dans l'ordre dans lesquels ils ont été tués. :")
		} else {
			console.log("De plus, tous les survivants ont survécus ! Le seul décès est donc celui de : ")
		}
	} else {
		console.log("\n" + tueur.name + " a gagné, après avoir éliminé les cinq survivants.")
		console.log("Les morts sont les suivants, dans l'ordre dans lesquels ils ont été tués. :")
	}
	deadList.forEach((element) => console.log(element))
	if (deadList[0].charAt(deadList[0].length - 7) == "(" && deadList[0].charAt(deadList[0].length - 1) == ")") {	//L'idée est d'aller à l'index -1 et -7 du premier élément (car '(tueur)' termine le nom du tueur dans deadList). Donc, si le tueur est le seul élément de deadList, la condition sera vérifiée.
		console.log("Et ce n'est clairement pas à déplorer.")
	}
}

killer = new Killer("Jason", 100)
var surv1 = new Survivor()
var surv2 = new Survivor()
var surv3 = new Survivor()
var surv4 = new Survivor()
var surv5 = new Survivor()
var surviList = [surv1,surv2,surv3,surv4,surv5]
sessionSurvie(killer,surviList)