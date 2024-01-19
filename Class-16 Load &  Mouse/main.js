 // -- DOM Content Loader - 1st DOM show than Content show --

document.addEventListener("DOMContentLoaded", (e) => {
	// alert("1st DOMContentLoaded than Content Show");
})


let track = document.querySelector("#track");

track.addEventListener("mousedown", (e) => {
	console.log(e.type);
})

track.addEventListener("mouseup", (e) => {
	console.log(e.type);
})