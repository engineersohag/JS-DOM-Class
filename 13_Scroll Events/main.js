// window.onscroll = () => {
// 	// console.log("scrolled");
// 	alert("Your window is scrolled")
// }


// window.addEventListener("scroll", () => {
// 	console.log("scrolled");
// })

let scroller = 0;

window.addEventListener("scroll", () => {
	let new_scroller = window.scrollOffset || document.documentElement.scrollTop ;

	if(new_scroller > scroller){
		console.log("scroll is down");
	}else{
		console.log("scroll is up");
	}

	scroller = new_scroller;
})