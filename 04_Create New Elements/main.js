// let div = document.createElement("div");
// div.id = "content"; // id add

// div.className = "Sohag_Class"; // class add

// div.innerHTML = "<p>This is p tag.</p>";

// let text = document.createTextNode("Inner text into the div"); // text adding
// div.appendChild(text);

// let h1 = document.createElement("h1");
// h1.textContent = "Inner text into h1 tag.";
// div.appendChild(h1);

// document.body.appendChild(div); // - show this div tag

// let ul = document.createElement("ul");
// ul.id = "menu";

// 	// 1st li 
// let li_1 = document.createElement("li");
// li_1.innerHTML = "Home";

// ul.appendChild(li_1);

// 	// 2nd li
// let li_2 = document.createElement("li");
// li_2.innerHTML = "About";

// ul.appendChild(li_2);

// 	// 3rd li
// let li_3 = document.createElement("li");
// li_3.innerHTML = "Service";

// ul.appendChild(li_3);

// document.body.appendChild(ul);

	// --- create div tag -------

let h2 = document.createElement("h2");

h2.innerHTML = "Hello h2 <br>";

document.body.appendChild(h2);

	// ----- Create ul list ------

let ul = document.createElement("ul");

	// 1st li create

let li_1 = document.createElement("li");
li_1.innerHTML = "Basic Computer";

ul.appendChild(li_1);

	// 2nd li create

let li_2 = document.createElement("li");
li_2.innerHTML = "Web design";

ul.appendChild(li_2);

	// 3rd li create

let li_3 = document.createElement("li");
li_3.innerHTML = "Web Development";

ul.appendChild(li_3)

document.body.appendChild(ul);



let div = document.createElement("div");
div.id = "menu";

let p = document.createElement("p");
p.textContent = "This is p tag";

div.appendChild(p);

document.body.appendChild(div);

// let menu = document.querySelector('.list-menu');

// function createMenu(name) {
// 	let li = document.createElement("li");
// 	li.innerHTML = name;
// 	return li;
// }

// menu.appendChild(createMenu("Sohag"));
// menu.appendChild(createMenu("Arman"));
// menu.appendChild(createMenu("Jamal"));

let menu = document.querySelector('.list-menu');

function list_menu(item) {
	let li = document.createElement("li");
	li.innerHTML = item;
	return li;
}

menu.appendChild(list_menu("Apple"));
menu.appendChild(list_menu("Mango"));
menu.appendChild(list_menu("Banana"));
menu.appendChild(list_menu("Orange"));