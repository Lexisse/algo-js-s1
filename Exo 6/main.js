let names = []
names.push("Vincent","Paul","Arthur")

//for (let i = 0; i < names.length; i++) { 
//	names[i] = names[i] + " va à la pêche"
//	console.log(names[i])
//}

names.forEach((element) => {
 	element += " va à la pêche"
	console.log(element)
})