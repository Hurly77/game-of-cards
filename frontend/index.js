///////////////////////Below is a simulation of how a dealer would shuffle////////////////////////////////////
const cardDeck = async (decks) => {
	let cardDeck = [];
	for (const e of decks) {
		const deck = await fetch(e);
		const deck_1 = await deck.json();
		cardDeck.push(deck_1.data.attributes.cards);
	}
	const deck_2 = await cardDeck.reduce((a, b) => a.concat(b));
	const deck_3 = wash(deck_2);
	return deck_3;
};
////////////////this is called riffle, riffle Box riffle//////////////////////////////////
const riffle = (deck) => {
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
//////////r= riffle*2////Box///////
const r2b = (array) => {
	let h1 = array.slice(0, array.length / 2),
		h2 = array.slice(array.length / 2);
	return riffle(h2.concat(h1));
};
///////////This is washing the deck berfore shuffle////////////////////////
const wash = (a) => {
	let shuffledDeck = r2b(a),
		ran = +Math.floor(Math.random() * 52),
		i = 0;
	while (i++ < ran) {
		shuffledDeck = r2b(shuffledDeck);
	}
	return shuffledDeck;
};
////////////////final stage pusts it all together///////////////////////
const shuffleCards = (n) => {
	let urls = new Deck(n),
		allDecks = urls.numOfDeck();
	return cardDeck(allDecks);
};
///////////////////////////Updates Card array/////////////////////////////////////////

/////////////////////Below Is all game Functionality////////////////////////////////////////////
const playerData = async () => {
	const r = await fetch('http://localhost:3000/players');
	const r_1 = await r.json();
	return r_1.data;
};

const all = async () => {
	const data = await playerData();
	let plName = [];
	for (const key in data) {
		plName.push(data[key].attributes.name);
	}
	return plName;
};

const ofs = () => {
	all().then((players) => {
		for (const e of players) {
			addToOptions(e);
		}
	});
};

const addToOptions = (el) => {
	if (el != '') {
		let option = document.createElement('option'),
			list = document.querySelector('select');
		option.innerText = el;
		list.appendChild(option);
	}
};

let stickTo = (obj) => {
	let th = document.querySelector('th'),
		[t1, t2, t3] = document.querySelectorAll('td');
	th.innerText = `${obj.name}`;
	t1.innerText = `bet: ${obj.bet}`;
	t2.innerText = `money: ${obj.money}`;
	t3.innerText = `ratio: ${obj.ratio}`;
};

const newPlayer = () => {
	let value = document.querySelector('input').value;
	p = new MakePlayer(value);
	p.post();
	return p;
};

const findPlayer = (name) => {
	return playerData().then((data) => {
		for (const key in data) {
			if (data[key].attributes.name == name) {
				let player = data[key].attributes;
				stickTo(player);
				return player
			}
		}
	})
}

///////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
	table(), ofs();
	let player;
	const [start, add, pick, hit, split, dd, stay, wager] = document.querySelectorAll('button')
	const [textBox, wagerInp] = document.querySelectorAll('input')
	hit.disabled = true
	const list = document.querySelector('.player-select'),
		name = document.querySelector('select');
		hand = [],
		house = [],
		discard = [],
		deck = shuffleCards(1)

	document.addEventListener('click', function (e) {
		e.preventDefault()
		let player = findPlayer(name.value)
		if (e.target == add) {
			add.classList.replace('add-player', 'hidden');
			textBox.classList.replace('not', 'hidden');
			list.classList.replace('player-select', 'hidden');
			start.classList.replace('hidden', 'start-game');
			pick.classList.replace('player', 'hidden');
			let player = newPlayer(name.value);
			return player
		}
		if (e.target == pick) {
			pick.classList.replace('player', 'hidden');
			start.classList.replace('hidden', 'start-game');
			add.classList.replace('add-player', 'hidden');
			textBox.classList.replace('not', 'hidden');
			list.classList.replace('player-select', 'hidden');
			let player = findPlayer(name.value);
			return player.then((obj) => { return obj })
		}
		if (e.target == start) {
			hud = document.querySelector('.hidden-hud');
			hud.classList.replace('hidden-hud', 'table');
			start.classList.replace('start-game', 'hidden');
		}
		if (e.target == wager) {
			hit.disabled = false
			player.then((obj) => {
				if (obj.money >= parseInt(wagerInp.value)) {
					obj.money -= parseInt(wagerInp.value)
					wager.classList.replace('wager-btn', 'hidden-wager');
					wagerInp.classList.replace('bet-bar', 'hidden-wager');
					hand.push(hitX(2, deck)) 
					stickTo(obj)
					return obj
				}
			})
		}
		if(e.target == hit){
			hitX(1, deck)
		}
		if(e.target == split){

		}
		if(e.target == dd){

		}
		if(e.tartget == stay){
			house()
		}
	});

	let hitX = (n, array) => {
		let cardContainer = document.querySelector('.cards');
		let tmp = []
		for (let i = 0; i < n; i++) {
			const card = document.createElement('div');
			card.setAttribute('class', 'card');
			cardContainer.appendChild(card);
			array.then((cards) => {
				let pullCard = cards.pop();
				card.style.backgroundImage = `url(${pullCard.img})`;
				tmp.push(pullCard);
			});
		}
		return tmp;
	};

	let handValue = (hand) => {
		for (let i = 0; i < hand.length; i++) {
			hand.reduce((a, b) => {
				return a + b;
			}, (i = 0));
		}
	};

	const reycle = (discard) => {
		return shuffleCards(discard);
	};

	const House = (house) => {
		i = 0;
		while (handValue(house) < 17) {
			house.push(hitX(1));
			i++;
		}
		return handValue(house);
	};

	const double = (ph) => {
		if (player.money * 2 > !player.bet) {
			player.bet + player.bet;
			ph.push(hitX(1));
			stickTo(player);
			return ph;
		}
		//double you original wager + extra card + stand// meaning you can't hit
	};

	let stayX = (hand, house) => {
		if (bust(house)) {
			blackJack(hand);
		} else {
			alert('house wins');
		}
	};

	const blackJack = (hand, house) => {
		if (handValue(hand) == 21) {
			alert('blackJack');
			player.bet * 1.5 + player.money;
			end();
		}
		if (house > hand) {
			alert('house wins');
			end();
		}
		//end()
	};

	const end = (player) => {
		let configObj = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				name: player.name,
				bet: player.bet,
				money: player.money,
				ratio: player.ratio
			})
		};
		fetch(`http://localhost:3000/players/${player.id}`, configObj).then((r) => r.json()).then((data) => data)		//update
	};

});