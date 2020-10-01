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
const shuffleCards = async (n) => {
	let urls = new Deck(n),
		allDecks = urls.numOfDeck();
	return await cardDeck(allDecks);
};
///////////////////////////current Player Hand/////////////////////////////////////////
const cardValue = (array) => {
	let initialValue = 0;
	let sum = array.reduce(function(a, b){
		return a + b.value;
	}, initialValue);
	return sum;
};
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
	return obj;
};

const newPlayer = (value) => {
	p = new MakePlayer(value);
	p.post();
};

const findPlayer = (name) => {
	return playerData().then((data) => {
		for (const key in data) {
			if (data[key].attributes.name == name) {
				let player = data[key].attributes;
				player.id = parseInt(data[key].id);
				return stickTo(player);
			}
		}
	});
};

///////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
	table(), ofs();
	const [add, hit, dd, stay, wager] = document.querySelectorAll('button'),
		[textBox, wagerInp] = document.querySelectorAll('input');
	wager.disabled = true;
	wagerInp.disabled = true;
	let cardContainer = document.querySelector('.cards'),
		hud = document.querySelector('.hidden-hud'),
		list = document.querySelector('.player-select'),
		name = document.querySelector('select'),
		deck = shuffleCards(1),
		house = [],
		hand = [],
		player;

	const btnIO = (io) => {
		hit.disabled = io;
		dd.disabled = io;
		stay.disabled = io;
	};
	btnIO(true);

	const hide = () => {
		add.classList.replace('add-player', 'hidden');
		textBox.classList.replace('not', 'hidden');
		list.classList.replace('player-select', 'hidden');
		hud.classList.replace('hidden-hud', 'table');
		wager.disabled = false;
		wagerInp.disabled = false;
	};

	const showBet = () => {
		wager.classList.toggle('hidden-wager');
		wagerInp.classList.toggle('hidden-wager');
		btnIO(true);
	};

	const makeCard = async () => {
		return await deck.then(function(deck){
			let cc = deck.pop();
			return new Card(cc.id, cc.value, cc.card_type, cc.img);
		});
	};

	const hitX = async (n) => {
		for (let i = 0; i < n; i++) {
			const newCard = await makeCard(),
				card = document.createElement('div');
			card.setAttribute('class', 'card');
			cardContainer.appendChild(card);
			card.style.backgroundImage = `url(${newCard.img})`;
			hand.push(newCard);
		}
	};

	const ratio = () => {
		if(player.wins != 0){
			let n = player.wins/player.games_played
			console.log(n)
			let r = Math.round(n*100)/ 100;
			console.log(r)
			player.ratio = r;
		}
	};

	const win = (bool, bet) => {
		bool == true ? (player.wins += 1) : null;
		player.money += bet;
		player.games_played += 1;
		ratio();
		update(player);

		end();
	};

	const pair = () => {
		return hand[0].cardTpye === hand[1].cardTpye && hand.length == 2 ? true : false;
	};

	const end = () => {
		let div = document.querySelector('.cards');
		hand.length = 0;
		house.length = 0;
		house;
		while (div.firstChild) {
			div.removeChild(div.firstChild);
		}
		showBet();
	};

	const update = (player) => {
		let configObj = {
			method  : 'PUT',
			headers : {
				'Content-Type' : 'application/json',
				Accept         : 'application/json',
			},
			body    : JSON.stringify({
				id           : player.id,
				name         : player.name,
				bet          : player.bet,
				money        : player.money,
				ratio        : player.ratio,
				wins         : player.wins,
				games_player : player.games_played,
			}),
		};
		fetch(`http://localhost:3000/players/${player.id}`, configObj).then((r) => r.json()).then((data) => {
			data;
			stickTo(player);
		});
	};

	let eval = async () => {
		let bust = (n) => (n > 21 ? true : false),
			cVal = cardValue(hand),
			hVal = cardValue(house);
		while (hVal < 17) {
			let newCard = await makeCard();
			house.push(newCard);
			hVal = cardValue(house);
		}
		if (hVal < cVal && cVal <= 21) {
			alert(`You win!! the House got ${hVal}`);
			return win(true, player.bet * 1.5);
		}
		if (cVal == 21 && house.length == 2) {
			alert('BlackJack');
			return win(true, player.bet * 2.5);
		}
		if(hVal > 21 && cVal <=21){
			alert(`You win!! the House got ${hVal}`);
			return win(true, player.bet * 1.5);
		}
		if (bust(cVal)) {
			alert(`sorry, you bust, the House got ${hVal}`);
			win(false, -player.bet);
		} else {
			alert(`sorry House wins, the House got ${hVal}`);
			win(false, -player.bet);
		}
	};

	add.addEventListener('click', async function(){
		if (textBox.value == '' && name.value != '') {
			pl = name.value;
			player = await findPlayer(pl);
			hide();
		}
		if (name.value == '' && textBox.value != '') {
			pl = textBox.value;
			player = newPlayer(pl);
			hide();
		}
	});

	wager.addEventListener('click', (e) => {
		if (wagerInp.value <= player.money && wagerInp.value > 0) {
			player.bet = +wagerInp.value;
			showBet();
			btnIO(false);
			hitX(2);
		}
	});

	hit.addEventListener('click', () => {
		if (cardValue(hand) < 21 && cardValue(hand) != 0) {
			hitX(1);
		} else {
			eval();
		}
	});

	dd.addEventListener('click', () => {
		if (pair()) {
			hitX(1);
			if (cardValue == 21) {
				alert('YOU WON DOUBLES.... HIP, HIP, ARRAY!!!');
				win(true, player.bet * 4);
			} 
		}else {
			eval();
		}
	});

	stay.addEventListener('click', () => {
		eval();
	});
});
