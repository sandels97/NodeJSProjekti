const tulostin = require('./tulostus')

const tulostaNelio = (sivu, tulostin) => {
	for(let i=0; i < sivu;  i++) {
		tulostin.tulostaTahtia(sivu);
	}
}

const tulostaSuorakulmio = (leveys, korkeus, tulostin) => {
	for(let i=0; i < korkeus;  i++) {
		tulostin.tulostaTahtia(leveys);
	}
}

const tulostaKolmio = (korkeus, tulostin) => {
	for(let i=0; i < korkeus;  i++) {
		tulostin.tulostaTahtia(i+1);
	}
}

const lukusarjanSumma = (n) => {
	let summa = 0;
	for(let i=0; i < n;  i++) {
		summa += i + 1;
	}
	return summa;
}

const kertoma = (n) => {
	let tulos = 1;
	for(let i=2; i <= n;  i++) {
		tulos *= i;
	}
	return tulos;
}

/*tulostaNelio(4, tulostin);
tulostaSuorakulmio(3,5,tulostin);
tulostaKolmio(5, tulostin);
tulostin.tulostaTulos(lukusarjanSumma(100));
tulostin.tulostaTulos(kertoma(10));*/

module.exports = {
	tulostaNelio,
	tulostaSuorakulmio,
	tulostaKolmio,
	lukusarjanSumma,
	kertoma
}