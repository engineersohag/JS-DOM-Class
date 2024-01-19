const Framework = document.querySelector("#lang");
const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const removebtn = document.querySelector('#btnRemove');

btnAdd.onclick = (e) => {
	e.preventDefault();

	if(Framework.value == ''){
		alert("please add any name");
	}

	const option = new Option(Framework.value);
	list.add(option);

	Framework.value = "";
}



removebtn.onclick = (e) => {
	e.preventDefault();

// -------- Select value -------

let Selected = [];
for (let i = 0; i < list.options.length; i++){
	Selected[i] = list.options[i].selected;
}

	let index = list.options.length;

	while(index--){
		if(Selected[index]){
			list.remove(index);
		}
	}
}