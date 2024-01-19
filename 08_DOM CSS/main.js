// let div = document.querySelector("div");
// div.id = "menu";

let btn = document.querySelector("#btn");
if(btn){
	// btn.setAttribute("name", "sohag");
	// let target = btn.getAttribute("target");
	// console.log(target);
	btn.removeAttribute("target");
	console.log(btn.hasAttribute("target"));
}

		// DOM style 

let menu = document.querySelector("#menu");

	// -- DOM inline CSS --
menu.style.background = "green";
menu.style.width = "200px";
menu.style.height = "200px";
menu.style.color = "#fff";
menu.style.padding = "30px";


	// -- Get computed Style --

let text = document.querySelector("#text");
let style = getComputedStyle(text, "::first-letter");

console.log(style.fontSize);