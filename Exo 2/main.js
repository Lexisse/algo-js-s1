var a = 4
var b = 4
var c = 3

switch(a) {
	case b :
		console.log("égal à b")
		break;						//le point-virgule est plus nécessaire. La nouvelle version de JVS comprend tt seul la fin d'une ligne, mais c'est pas le cas de ts les langages.
	case c:
		console.log("égal à c")
		break;
	default :
		console.log("égal à rien")
}