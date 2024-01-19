// // --- forEach() ---

// let a = ['Sohag', 'Orin', 'Tasnim', 'Sumaiya', 'Tanha'];

// a.forEach((values, index_num) => {
// 	document.write(index_num+ " : " + values +"</br>");
// });
	


// let menu = document.querySelector("#menu");
// let leng = ['Python', 'Javascript', 'Java', 'C++'];

// let fragment = document.createDocumentFragment();

// leng.forEach((language)=>{
// 	let li = document.createElement("li");
// 	li.textContent = language;
// 	fragment.appendChild(li);
// })

// menu.appendChild(fragment);

// 	// 2nd part

// let demo = document.querySelector('.demo');
// let lang = ['Java', 'Python', 'PHP', 'HTML', 'C#'];

// let fragments = document.createDocumentFragment();

// lang.forEach((languages)=>{
// 	let li = document.createElement("li");
// 	li.textContent = languages;
// 	fragments.appendChild(li);
// })
// demo.appendChild(fragments);

	// list-create-simple way

let menu = document.querySelector('#menu');
let lang = ['Python', 'Java', 'PHP', 'Js'];

let fregment = document.createDocumentFragment();

lang.forEach((language) => {
	let li = document.createElement("li");
	li.textContent = language;
	fregment.appendChild(li);
})

menu.appendChild(fregment);


let demo = document.querySelector('.demo');
let subject = ['Bangla', 'English', 'Math', 'ICT', 'Java Programming', 'Web Design & Development'];

let fregment_2 = document.createDocumentFragment();

subject.forEach((name) => {
	let li = document.createElement('li');
	li.innerHTML = name;
	fregment_2.appendChild(li);
})

demo.appendChild(fregment_2);

let example = document.querySelector('.example');

let course = ['Basic Computer', 'Web Design', 'Web Development', 'Graphic Design'];

fregment_3 = document.createDocumentFragment();

course.forEach((course) => {
	let li = document.createElement('li');
	li.innerHTML = course;
	fregment_3.appendChild(li);
})

example.appendChild(fregment_3);