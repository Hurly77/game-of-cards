//classes
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
//player stuff
//card stuff
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
			ran =+ Math.floor(Math.random() * 52),
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

const table = () => {
	const jak = new Canvas(1000, 500);
	const ctx = jak.ctx;
	jak.stick()

	let roundedRect = (ctx, x, y, width, height, radius) => {
		ctx.beginPath();
		ctx.moveTo(x, y + radius);
		ctx.lineTo(x, y + height - radius);
		ctx.arcTo(x, y + height, x + radius, y + height, radius);
		ctx.lineTo(x + width - radius, y + height);
		ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
		ctx.lineTo(x + width, y + radius);
		ctx.arcTo(x + width, y, x + width - radius, y, radius);
		ctx.lineTo(x + radius, y);
		ctx.arcTo(x, y, x, y + radius, radius);
		ctx.stroke();
	}
	// outer table dim
	ctx.beginPath();
	ctx.arc(500, 0, 550, 0, Math.PI, false);
	ctx.closePath();
	g = ctx.createRadialGradient(500, 0, 600, 500, 90, 290);
	g.addColorStop(0.7, 'rgb(24, 26, 23, .1)');
	g.addColorStop(0.2, 'rgb(48, 51, 46, 1)');
	g.addColorStop(0.1, 'black');
	ctx.fillStyle = g;
	ctx.fill();
	ctx.save();
	//inner table style
	ctx.beginPath();
	ctx.arc(500, 0, 525, 0, Math.PI, false);
	ctx.closePath();
	g = ctx.createRadialGradient(500, 0, 480, 500, 90, 100);
	g.addColorStop(0.1, 'rgb(0, 0, 0, 1)');
	g.addColorStop(0.4, 'rgb(194, 0, 0, .4)');
	g.addColorStop(0.9, 'rgb(255, 0, 0, .24)');
	g.addColorStop(0, 'rgb(30, 45, 38, 1)');
	ctx.fillStyle = g;
	ctx.fill();
	ctx.save();
	
	//Images
	let img = new Image()
	let img2 = new Image()
	img.onload = function() {
		ctx.save()
		roundedRect(ctx, 796, 18, 78, 100, 10);
		for (let i = 0; i < 6; i+= 2) {
			ctx.drawImage(img, 800 + i, 25 - i);
			ctx.save()
			ctx.fill()
		}
		ctx.drawImage(img2, 400, 130, 225, 75);
		ctx.save()
	};
	img2.src = "images/small/Stranger-Things-Logo.png"
	img.src = "images/small/frontCard.jpg"

		roundedRect(ctx, 116, 23, 78, 100, 15);
		
		ctx.strokeStyle  = 'black'
		ctx.beginPath()
		ctx.arc(200, 230, 30, Math.PI*2, false);
		ctx.fillStyle = "rgb(54, 154, 247, .3)"
		ctx.fill()
		ctx.stroke()
		
		ctx.strokeStyle  = 'black'
		ctx.beginPath()
		ctx.arc(500, 378, 30, Math.PI*2, false);
		ctx.fillStyle = "rgb(54, 154, 247, .3)"
		ctx.fill()
		ctx.stroke()
		
		ctx.strokeStyle  = 'black'
		ctx.beginPath()
		ctx.arc(800, 230, 30, Math.PI*2, false);
		ctx.fillStyle = "rgb(34, 54, 299)"
		ctx.fill()
		ctx.stroke()	
		ctx.save();

 for (let i = 0; i < 350; i+= 35) {
 	ctx.strokeRect(350 + i, 3, 35 - i, 100);
 }

 ctx.beginPath();
 ctx.moveTo(260, 170);
 ctx.bezierCurveTo(260, 170, 500, 400, 720, 180);
 ctx.bezierCurveTo(720, 180, 780, 165, 750, 215);
 ctx.bezierCurveTo(750, 230, 503, 450, 230, 200);
 ctx.bezierCurveTo(230, 200, 210, 160, 260, 170,);
 ctx.fill()
 
 ctx.stroke()
 ctx.save();
};

document.addEventListener('DOMContentLoaded', () => {
	console.log(shuffleCards(4));
	table();
	Buttons();
});
a = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];
