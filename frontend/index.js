// document.addEventListener('DOMContentLoaded', () => {});
// class Deck {
// 	constructor(url) {
// 		this.url = url;
// 		this.decksPromise = fetch(url).then((r) => r.json()).then(function(obj) {
// 			return obj.data;
// 		});
// 	}
// }

// class Deal extends Deck {
// 	constructor(array) {
// 		this.array = array;
// 	}
// 	shuffle() {
// 		let i = 0,
// 			j = 0,
// 			tmp = null;
// 		for (i = this.array.length - 1; i > 0; i -= 1) {
// 			j = Math.flo;
// 		}
// 	}
// }

// class Game {
// 	constructor() {}
// }

// class House {}
// function shuffle(array) {
// 	let a1 = array,
// 		a2 = a1.splice(0, Math.ceil(array.length / 2));

// 	let shuffled = (h1, h2) => {
// 		return [].concat.apply([], h1.map((i, ind) => [ i, h2[ind] ]));
// 	};
// 	return shuffled(a1, a2);
// }
// let array2 = array.splice(0, Math.ceil(array.length / 2));

let riffle = function(deck) {
	if (deck.length > 52) {
		return alert('there are to many cards');
	}

  let cutDeck = deck;
  let tmp = []
  // (half = Math.floor(cutDeck.length / 2)), (i = 0), (j = 0), (tmp = []);
//   let h1 = cutDeck.slice(0, half), h2 = cutDeck.slice(half, cutDeck.length);
// console.log(h1, h2)
  
	for (let i = 1; i < cutDeck.length; i++) {
    if (i % 2 == 1){
      
      tmp.push(h1[i])
    }else{
      h1[i] = h1[i - 1]
      tmp.push(h1[i])
    }
  }
  console.log(cutDeck)
  return tmp
};
let deck = 
riffle(deck)
["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
