let pcInput = randInt(3) 	//1 = pierre, 2 = ciseaux, 3 = feuille
let userInput = prompt("Jouez à shifumi !","Pierre ? Feuille ? Ciseaux ?")

function randInt (max) {
	return Math.floor(Math.random() * max) + 1; //math.floor() arrondit à l'entier le plus bas, math.random() renvoie un chiffre x ∈ [0;1].
}

function shifumi(move) {
	if (move === "Pierre" || move == "pierre") {
			if(pcInput == 1) {
				console.log("L'ordinateur à fait pierre ! Egalité !")
			} else if (pcInput == 2) {
					console.log("L'ordinateur à fait ciseaux ! Vous avez gagné !")
			} else if (pcInput == 3) {
					console.log("L'ordinateur à fait feuille ! Vous avez perdu !")
			}
	}
	else if (move === "Ciseaux" || move == "ciseaux") {
			if(pcInput == 1) {
				console.log("L'ordinateur à fait pierre ! Vous avez perdu !")
			} else if (pcInput == 2) {
					console.log("L'ordinateur à fait ciseaux ! Egalité !")
			} else if (pcInput == 3) {
					console.log("L'ordinateur à fait feuille ! Vous avez gagné !")
			}
	}
	else if (move === "Feuille" || move == "feuille") {
			if(pcInput == 1) {
				console.log("L'ordinateur à fait pierre ! Vous avez gagné !")
			} else if (pcInput == 2) {
					console.log("L'ordinateur à fait ciseaux ! Vous avez perdu !")
			} else if (pcInput == 3) {
					console.log("L'ordinateur à fait feuille ! Egalité !")
			} 
	} 
	else if (move === "Puit" || move == "puit") {		//Pour des raisons de fair-play, on ne peut pas gagner avec le puit.
			console.log("L'ordinateur à fait feuille ! Vous avez perdu !")
			console.log("C'est quand même pas très glorieux de jouer avec un puit. En plus, vous avez perdu.")
	}
	else if (move === "Nuke" || move == "nuke") {
			console.log("Vous avez gagné... mais à quel prix ? \n  Bien que d'après le second protocole additionnel des Conventions de Genève, mis en place en 1977 et ratifié en janvier 1998 suite à une déclaration du ministre des affaires étrangères et du Commonwealth du Royaume-Uni, Tony Lloyd, l'interdiction de la destruction massive ne s'applique qu'aux armes conventionnelles et « n'a aucun effet », ne réglemente pas et « n'interdit pas l'utilisation des armes nucléaires », il faut réfléchir au coup moral d'un tel acte. \n Il serait bon d'éviter de détruire le monde à cause d'une partie de shifumi, vous ne pensez pas ?")			
	} 
	else {
		console.log("Ce coup n'est pas reconnu.")
	}
}
shifumi(userInput)