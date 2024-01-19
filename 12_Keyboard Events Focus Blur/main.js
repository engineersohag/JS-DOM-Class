let message = document.querySelector('#message');
let message_class = document.querySelector('.message');
let out = document.querySelector("h5");

message.addEventListener("keyup", (e) => {
	console.log(e.type);
})

message.addEventListener("keydown", (e) => {
	console.log(e.type);
})

message.addEventListener("keypress", (e) => {
	console.log(e.type);
})

	// click key check

message.addEventListener("keypress", (e) => {
	console.log(e.key);
})


		// some Home Word

message_class.addEventListener("keypress", (a) => {
	let currentOutput = out.innerHTML;
    
    let newOutput = currentOutput + event.key;
    
    out.innerHTML = newOutput;
})


		// Js DOM Focus & Blur Event

let myInput = document.querySelector("#myInput");

myInput.addEventListener("focus", (c) => {
	// console.log("focused");
	c.target.style.background = "green",
	c.target.style.color = "yellow";
})

myInput.addEventListener("blur", (c) => {
	// console.log("focused");
	c.target.style.background = "red",
	c.target.style.color = "#098";
})