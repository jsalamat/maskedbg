var fader = document.getElementById("fader");
var timer = setInterval(switcher, 3000);

function switcher() {
	fader.classList.toggle("hide");
};