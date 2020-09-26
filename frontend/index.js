cardDeck = async (decks) => {
	let cardDeck = [];
	for (const e of decks) {
		const deck = await fetch(e);
		const deck_1 = await deck.json();
		cardDeck.push(deck_1.data.attributes.cards);
	}
	const deck_2 = await cardDeck.reduce((a, b) => a.concat(b));
	const deck_3 = shuffle(deck_2);
	return deck_3;
};

const riffle = function(deck){
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

const r2b = (array) => {
	let h1 = array.slice(0, array.length / 2),
		h2 = array.slice(array.length / 2);
	return riffle(h2.concat(h1));
};

const shuffle = (a) => {
	let shuffledDeck = r2b(a),
		ran = +Math.floor(Math.random() * 52),
		i = 0;
	while (i++ < ran) {
		shuffledDeck = r2b(shuffledDeck);
	}
	return shuffledDeck;
};

const shuffleCards = (n) => {
	let urls = new Deck(n),
		allDecks = urls.numOfDeck();
	return cardDeck(allDecks);
};

const Buttons = () => {
	let [hit, split, dd, stay] = document.querySelectorAll('button');
	document.addEventListener('click', (e) => {
		if (e.target == hit) {
			alert('hit has been clicked');
		}
		if (e.target == split) {
			alert('split has been clicked');
		}
		if (e.target == dd) {
			alert('Double Down has been clicked');
		}
		if (e.target == stay) {
			alert('stay has been clicked');
		}
	});
};

document.addEventListener('DOMContentLoaded', () => {
	console.log(shuffleCards(4));
	table();
	Buttons();
});
a = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];
