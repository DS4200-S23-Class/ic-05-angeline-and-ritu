// JavaScript file for ic-05

counter = 0;

function buttonClicked() {
	console.log('button was clicked!');
	counter += 1;

	let buttonDiv = document.getElementById("button-counter");

	buttonDiv.innerHTML = counter;
}