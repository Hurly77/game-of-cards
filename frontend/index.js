// // class player {
// // 	constructor(name, money, ratio) {
// // 		this.name = name;
// // 		this.money = money;
// // 		this.ratio = ratio;
// // 	}
// // }

// // let createPlayer = () => {

// // }

// // let deckOfCards = async () => {
// // 	const deck = await fetch('http://localhost:3000/decks/1');
// // 	const deck_1 = await deck.json();
// // 	return deck_1.data.attributes.cards;
// // };

// // let riffle = function(deck) {
// // 	let halfDeck = deck,
// // 		tmp = [],
// // 		half = Math.floor(halfDeck.length / 2),
// // 		h1 = halfDeck.slice(0, half),
// // 		h2 = halfDeck.slice(half, halfDeck.length);

// // 	for (let i = 0; i < half; i++) {
// // 		if (i % 2 == 1 || i == 0) {
// // 			tmp.push(h1[i]);
// // 			tmp.push(h2[i]);
// // 		} else {
// // 			tmp.push(h2[i]);
// // 			tmp.push(h1[i]);
// // 		}
// // 	}
// // 	return tmp;
// // };

let fc = (n) => {
	return n != 1 ? n * fc(n - 1) : 1;
};

let invFc = (n, f) => {
	if (n / f < 1) {return 'no inverse fact';}
	return n / f != 1 ? invFc(n / f, f + 1) : f;
};

let nCr = (n, r) => {
	return fc(n) / fc(n - r) / fc(r);
}

let add2 = (a) => {
	let a1 = [...a],
			a2 = [...a1],
			count = 0;
	for (const ind of a1) {
		for (let i = 0; i < a2.length; i++) {
			(a1[ind] + a2[i] == 21) ? (count += 1) : 0;
			a1.shift();
		}
	}
	return count;
};

// let testLog = (array) => {
// 	let v1 = [...array],
// 			v2 = [...v1],
// 			gn = 0;
// 			ln = 0;
// 			count = 0;

// 	while(i++ < 66){
// 		for (let i = 0; i < v1.length; i++) {

// 				for (; gn < v1.length; i++) {
				
					
// 				}
// 		}
// 	}
// 	return count 
// };
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// testLog(array)



// for (const i of v1) {
// 	console.log(v1[i])
// 	if (v1[i] + gn == 21){count += 1}
// } 
// let myR = (s, n, a) => {
// 	let n2 = a.slice(s, n)
// 	return n2.reduce((a, b) => (a + b))
// }
let even = n => n % 2 == 0 ? true : false;

let logo = (array) => {
	let a1 = [...array],
			even = [],
			odd = []
	for (let i = 0; i < a1.length; i++) {
		let n = a[i]
		even(n) ? even.push(n) : odd.push(n);
	}
	console.log(even, odd)
}