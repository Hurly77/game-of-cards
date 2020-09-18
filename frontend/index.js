class player {
	constructor(name, money, ratio) {
		this.name = name;
		this.money = money;
		this.ratio = ratio;
	}
}

let createPlayer = () => {

}

let deckOfCards = async () => {
	const deck = await fetch('http://localhost:3000/decks/1');
	const deck_1 = await deck.json();
	return deck_1.data.attributes.cards;
};

let riffle = function(deck) {
	let halfDeck = deck,
		tmp = [],
		half = Math.floor(halfDeck.length / 2),
		h1 = halfDeck.slice(0, half),
		h2 = halfDeck.slice(half, halfDeck.length);

	for (let i = 0; i < half; i++) {
		if (i % 2 == 1 || i == 0) {
			tmp.push(h1[i]);
			tmp.push(h2[i]);
		} else {
			tmp.push(h2[i]);
			tmp.push(h1[i]);
		}
	}
	return tmp;
};

let test = () => {

}
// //recusive factorial 
// let fc = (n) => {
// 	return (n != 1) ? n * fc(n - 1) : 1;
// }

// let nCr = (n, r) => {
// 	return fc(n)/fc(n - r)/fc(r)
// }

let test2 = () => {
	curent = []
}
