let demo = document.querySelector("#demo");

demo.insertAdjacentHTML("beforebegin", "<h3>Go out</h3>");
demo.insertAdjacentHTML("afterbegin", "<h3>Go in</h3>");
demo.insertAdjacentHTML("afterend", "<h3>After end</h3>");
demo.insertAdjacentHTML("beforeend", "<h3>beforeend</h3>");


// ---- Replace, Clone, Remove ----

let menu = document.querySelector("#menu");

let li = document.createElement("li");
li.textContent = "Home";

menu.replaceChild(li, menu.firstElementChild);

menu.removeChild(menu.lastElementChild);

// cole node

let cloneNode = menu.cloneNode(true);
cloneNode.id = "CloneID";

document.body.appendChild(cloneNode);