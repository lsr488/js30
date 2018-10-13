function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	console.log(hours + ":" + minutes  + ":" + seconds);
}

setInterval(setDate, 1000);

