let btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
	alert("Button was Clicked");
});

// function clicked (){
// 	alert("The button was clicked");
// }

let btns = document.querySelector(".btn");

btns.onclick = function (){
	alert("This Message From DOM 0 label Handler");
}

let h4 = document.querySelector("h4");

// document.addEventListener("DOMContentLoaded", (e) => {
// 	alert("DOM is Fully Loaded");
// })

// addEventListener("load", () => {
// 	alert("The page fully loaded");
// })

// addEventListener("beforeunload", (e) => {
// 	e.preventDefault();
// 	e.returnValue = '';
// })

addEventListener("unload", () => {
	
})