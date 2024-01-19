let menu = document.querySelector("#menu");

let li = document.createElement("li");
li.textContent = "Home";

menu.insertBefore(li, menu.firstElementChild);

let demo = document.querySelector('.demo');

let ol_li = document.createElement("li");
ol_li.innerHTML = "Orange";

demo.insertBefore(ol_li, demo.firstElementChild);


	// --- append & prepend ---
let app = document.querySelector('#app');

// let name = ['Sohag', 'Emon', 'Ahad'];

// let DOM_script = name.map((names) => {
// 	let li = document.createElement("li");
// 	li.textContent = names;
// 	return li;
// });

let name = ['Sohag', 'Orin', 'Sumu', 'Foysal', 'Orin'];

let DOM_name = name.map((name) => {
	let li = document.createElement("li");
	li.innerHTML = name;
	return li;
})


app.append(...DOM_name);
app.append(...DOM_script); // ... must be use


let apps = document.querySelector("#apps");

let lang = ['Java', 'Python', 'Javascript', 'PHP'];

let detalis =lang.map((language) => {
	let li = document.createElement("li");
	li.innerHTML = language;
	return li;
});

apps.prepend(...detalis); // ... must be use