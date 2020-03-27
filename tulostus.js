const tulostaTahtia = (maara) => {
	let string = "";
	for(let i=0; i<maara; i++) {
		string = string.concat("*");
		
		if(i != i-1) {
			string = string.concat(" ");
		}
	}
	console.log(string);
}


const tulostaTulos = (tulos) => {
	
	let string = "-".repeat(String(tulos).length);
	console.log(string);
	console.log(tulos);
	console.log(string);
}

module.exports = {
	tulostaTahtia,
	tulostaTulos
}