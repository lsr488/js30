const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90; // seconds/60 is the percentage of seconds around the clockface, 360 is the whole circle, 90 is the origin-offset;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	let hours = now.getHours();
	// console.log(hours);
	if(hours > 12) {
		hours = hours - 12;
	}
	// console.log(hours);
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.width = `30%`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg) translate(-50px, -30px)`;


	// console.log(now);
}

setInterval(setDate, 1000);

