	// DOM 2 Level Hendler
let btn = document.querySelector('#btn');
let text = document.querySelector('.text');

btn.addEventListener("click", () => {
	text.innerHTML = "Hello World!";
	text.style.color = "red";
})

	// 0 Level Event Hendler 
let clicked = document.querySelector('#clicked');
clicked.onclick = function() {
	alert("This Message from Zero (0) level Hendler");
}

