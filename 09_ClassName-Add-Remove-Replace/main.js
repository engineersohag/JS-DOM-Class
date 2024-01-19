// let p = document.querySelector("p");
// p.className = "sohag";

// console.log(p.className);

// let h2 = document.querySelector("h2");

// h2.classList.add("text");
// h2.classList.add("h2Tag");

// h2.classList.remove("text");

// // -- replace class --

// h2.classList.replace("h2Tag", "hello");

// // -- width and height --

// let div = document.querySelector("div");
// // let width = div.offsetWidth; // -- border padding adjust width
// let width = div.clientWidth;	// without border adjust width

// // let height = div.offsetHeight;
// let height = div.clientHeight;

// console.log(width +" "+ height);


let h2 = document.querySelector('h2');


function clickMe1() {
	h2.classList.add('text');
}

function clickMe2() {
	h2.classList.replace('text', 'demo');
}

function clickMe3() {
	h2.classList.replace('text', 'demo');
	h2.classList.remove('demo');
}