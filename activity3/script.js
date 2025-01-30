function showTime() {
	document.getElementById('BSIT').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);