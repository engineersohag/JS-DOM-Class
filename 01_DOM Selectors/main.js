/* --- ID call -- 
let id_1 = document.getElementById('id_1');

id_1.innerHTML = "Hello Word!"; --- */

/* --- Class Name Call --
let class_1 = document.getElementsByClassName('class_1')[0]; // [0] - is index number
let class_1 = document.getElementsByClassName('class_1')[1];
let class_1 = document.getElementsByClassName('class_1')[2];
console.log(class_1);

class_1.innerHTML = "Hello, Sohag Hosen."; --- */

/* --- Name Attibute Class --  
let name = document.getElementsByName("name")[0]; //  [0] - is index number
name.innerHTML = "This is Name Attibute.";-- */


/* --- Tag Name Call -- 
let tag_h1 = document.getElementsByTagName("h1")[0];

tag_h1.innerHTML = "Tag Select by tag name"; --- */


/* --- querySelector call -- 

let q_select = document.querySelector(".cass_2"); // Class select
let q_select = document.querySelector("#id_2");		// Id select
let q_select = document.querySelector("h2");		// Tag select

q_select.innerHTML = "Hello Word"; 	--- */



/* --- query selector all --- -- */

let q_select_all = document.querySelectorAll("h2")[0]; // [0] - index number

q_select_all.innerHTML = "Hello Word"; 
