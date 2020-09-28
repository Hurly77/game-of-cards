let roundedRect = (ctx, x, y, width, height, radius) => {
	ctx.beginPath();
	ctx.moveTo(x, y + radius);
	ctx.lineTo(x, y + height - radius);
	ctx.arcTo(x, y + height, x + radius, y + height, radius);
	ctx.lineTo(x + width - radius, y + height);
	ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
	ctx.lineTo(x + width, y + radius);
	ctx.arcTo(x + width, y, x + width - radius, y, radius);
	ctx.lineTo(x + radius, y);
	ctx.arcTo(x, y, x, y + radius, radius);
	ctx.stroke();
};

let drawRotatedImg = (ctx, img, x, y, w, h, rotate) => {
	let hlfW = w / 2;
	let hlfH = h / 2;

	ctx.save();

	ctx.translate(x + hlfW, y + hlfH);
	ctx.rotate(rotate);
	ctx.drawImage(img, -hlfW, -hlfH, w, h);
};

let draw = (ctx, img, x, y, w, h) => {
	if (!img.complete) {
		setTimeout(function(){
			draw(ctx, img);
		}, 50);
	}
	img.onload = function(){
		ctx.drawImage(img, x, y, w, h);
	};
};

let gridY = (ctx) => {
	for (let i = 0; i < 1000; i += 100) {
		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.moveTo(i, 0);
		ctx.lineTo(i, 500);
		ctx.stroke();
	}
};

let gridX = (ctx) => {
	for (let i = 0; i < 1000; i += 100) {
		ctx.beginPath();
		ctx.strokeStyle = 'grey';
		ctx.moveTo(0, i);
		ctx.lineTo(1000, i);
		ctx.stroke();
	}
};

const table = () => {
	const jak = new Canvas(1000, 500);
	const ctx = jak.ctx;
	jak.stick();
	// gridY(ctx);
	// gridX(ctx);
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
	let img = new Image();
	let img2 = new Image();
	let cA = [];
	img.onload = function(){
		ctx.save();
		ctx.fillStyle = 'rgb(20, 150, 200, .5)';
		roundedRect(ctx, 761, 18, 78, 100, 10);
		ctx.fill();
		for (let i = 0; i < 12; i++) {
			let e = ctx.drawImage(img, i % 2 == 0 ? 765 + i * 0.85 : 765 + i * 0.85 - 1, 25 - i / 2);
			ctx.shadowBlur = 4;
			ctx.shadowOffsetX = 10;
			ctx.shadowColor = 'black';
			cA.push(e);
		}
		ctx.restore();
	};
	img.src = 'images/small/frontCard.jpg';

	draw(ctx, img2, 350, 130, 300, 115);
	img2.src = 'images/small/Stranger-Things-Logo.png';
	//discard
	roundedRect(ctx, 161, 18, 78, 100, 10);

	// seats
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.arc(200, 230, 30, Math.PI * 2, false);
	ctx.fillStyle = 'rgb(54, 154, 247, .3)';
	ctx.fill();
	ctx.stroke();

	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.arc(500, 370, 30, Math.PI * 2, false);
	ctx.fillStyle = 'rgb(54, 154, 247, .3)';
	ctx.fill();
	ctx.stroke();

	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.arc(800, 230, 30, Math.PI * 2, false);
	ctx.fillStyle = 'rgb(34, 54, 299,)';
	ctx.fill();
	ctx.stroke();
	ctx.save();

	//chipsHolder Bg
	for (let i = 0; i < 385; i += 35) {
		g = ctx.createLinearGradient(321 + i*1.1, 0, 323 + i*1.1, 0);
		g.addColorStop(0, 'rgb(23, 23, 23)');
		g.addColorStop(1, 'rgb(0, 0, 0)');
		g.addColorStop(.1, 'rgb(33, 33, 33)');
		ctx.fillStyle = g;
		ctx.fillRect(320 + i*1.1, 3, 5, 94);
	}
	ctx.fillRect(320, 96, 390, 4);
	ctx.restore()


	// chip holder
	for (let i = 0; i < 350; i += 35) {
		g = ctx.createLinearGradient(325+i*1.1, 0, 350+i*1.1, 0);
		g.addColorStop(1, 'rgb(53, 53, 56)')
		g.addColorStop(.2, 'black');
		g.addColorStop(.7, 'rgb(5, 5, 5)');	
		g.addColorStop(0, 'rgb(53, 53, 56)');
		ctx.fillStyle = g;
		ctx.fillRect(325 + i*1.1, 3, 35, 94);
	}
	ctx.restore();
	ctx.save();

	//chips
	for (let i = 330; i < 700; i+= 38.5) {
		let rgb = () =>Math.floor(Math.random()* 255) 
		let y = Math.floor(Math.random()* 70 +20)
		let fill = `rgb(${rgb()}, ${rgb()}, ${rgb()})`
		ctx.fillStyle = fill
		ctx.fillRect(i, 3, 30, y)
		for (let j = 3; j < y; j+=5) {
			ctx.moveTo(i, j)
			ctx.lineTo(i+ 30, j)
			ctx.stroke()
			ctx.fillStyle = 'white'
			let stripe = () => Math.floor(Math.random()* 20)
			ctx.fillRect(i + stripe(), j, 10, 5)
		}
		ctx.fillStyle = fill
		ctx.beginPath();
		ctx.moveTo(i,y+2);
		ctx.quadraticCurveTo(i + 20, y + 8, i + 30, y+2);
		ctx.stroke();
		ctx.closePath()
		ctx.fill()
	}
	

	//table sticker
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 25, 36, .7)';
	ctx.moveTo(500, 300);
	ctx.lineTo(300, 200);
	ctx.arcTo(200, 150, 300, 125, 37.5); 
	ctx.lineTo(500, 125);
	ctx.arcTo(800, 125, 700, 200, 37.5);
	ctx.lineTo(500, 300);
	ctx.stroke();
	ctx.fill();
	ctx.save();

	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 25, 36)';
	ctx.moveTo(695, 125);
	ctx.arcTo(800, 175, 600, 260, 36);
	ctx.lineTo(550, 300);
	ctx.lineTo(500, 300);
	ctx.lineTo(700, 198);
	ctx.arcTo(800, 125, 695, 125, 36);
	ctx.lineTo(690, 125);
	ctx.stroke();
	ctx.fill();
	ctx.restore();
};
