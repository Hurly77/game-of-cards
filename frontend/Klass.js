class Canvas {
	constructor(width, height) {
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');
	}
	stick() {
		let cDiv = document.querySelector('.stack');
		cDiv.appendChild(this.canvas);
	}
}

class Deck {
	constructor(n) {
		this.n = n;
	}

	numOfDeck() {
		const urls = [];
		for (let i = 1; i < this.n + 1; i++) {
			urls.push(`http://localhost:3000/decks/${i}`);
		}
		return urls;
	}
}

class Card {
	constructor(id, value, cardType, img) {
		this.id = id;
		this.value = value;
		this.cardType = cardType;
		this.img = img
	}
	ace() {
		return this.cardType == 'Ace' ? true : false;
	}
	one(bool){
		if(bool == true && ace == true){
			this.value = 1
		}
	}
}

class MakePlayer {
	constructor(name, bet, money, ratio, wins, games_played) {
		this.url = 'http://localhost:3000/players';
		this.id = null;
		this.name = name;
		this.bet = bet;
		this.money = money;
		this.ratio = ratio;
		this.wins = wins
		this.games_played = games_played
	}
	post() {
		fetch(this.url, {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				Accept         : 'application/json'
			},
			body    : JSON.stringify({
				name  : this.name,
				bet   : this.bet,
				money : this.name,
				ratio : this.ratio,
				wins  : this.wins,
				games_played : this.games_played
			})
		})
			.then(function(response){
				return response.json();
			})
			.then(function(object){
				addToOptions(object.name);
				stickTo(object)
				return object
			});
	}
}
