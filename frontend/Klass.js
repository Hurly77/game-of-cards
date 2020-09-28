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

class Game {
	
}

class MakePlayer {
	constructor(name, bet, money, ratio) {
		this.url = 'http://localhost:3000/players';
		this.name = name;
		this.bet = bet;
		this.money = money;
		this.ratio = ratio;
	}
	post() {
		fetch(this.url, {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				Accept       : 'application/json'
			},
			body  	 : JSON.stringify({
				name  : this.name,
				bet   : this.bet,
				money : this.name,
				ratio : this.ratio
			})
		})
			.then(function(response){
				return response.json();
			})
			.then(function(object){
				console.log(object);
				stickTo(object);
				addToOptions(object.name);
			});
	}
}
