var settings = require('Storage').readJSON("binaryclk.json", true) || {};
var full = settings.fullscreen || false;
delete settings; 

function draw() {
	var dt = new Date();
	var h = dt.getHours(), m = dt.getMinutes();
	const t = [];
	t[0] = Math.floor(h/10);
	t[1] = Math.floor(h%10);
	t[2] = Math.floor(m/10);
	t[3] = Math.floor(m%10);

	g.reset();
	g.clearRect(Bangle.appRect);

	let i = 0;
	if (full) {
		const gap = 12;
		const mgn = 0;
	} else {
		const gap = 8;
		const mgn = 20;
	}
	const sq = 29;
	const pos = sq + gap;

	for (let r = 3; r >= 0; r--) {
		for (let c = 0; c < 4; c++) {
			if (t[c] & Math.pow(2, r)) {
				g.fillRect(mgn/2 + gap + c * pos, mgn + gap + i * pos, mgn/2 + gap + c * pos + sq, mgn + gap + i * pos + sq);
			} else {
				g.drawRect(mgn/2 + gap + c * pos, mgn + gap + i * pos, mgn/2 + gap + c * pos + sq, mgn + gap + i * pos + sq);
			}
		}
		i++;
	}
	g.clearRect(mgn/2 + gap, mgn + gap, mgn/2 + gap + sq, mgn + 2 * gap + 2 * sq);
	g.clearRect(mgn/2 + 3 * gap + 2 * sq, mgn + gap, mgn/2 + 3 * gap + 3 * sq, mgn + gap + sq);
}

g.clear();
draw();
var secondInterval = setInterval(draw, 60000);
Bangle.setUI("clock");
if (!full) {
	Bangle.loadWidgets();
	Bangle.drawWidgets();
} 
