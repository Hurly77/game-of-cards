class Canvas {
	constructor(width, height) {
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');
	}
	stick(){
		let cDiv = document.querySelector('.stack')
		cDiv.appendChild(this.canvas)
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

class Player {
	constructor(name, money, ratio) {
		this.name = name;
		this.money = money;
		this.ratio = ratio;
	}
	getByName() {}
}