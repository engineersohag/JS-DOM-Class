const group = document.querySelector('.group');
const result = document.querySelector('.result');

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

group.innerHTML = sizes.map((size) =>`<div>
		<input type="radio" id="${size}" value="${size}" name="size">
		<label for="${size}">${size}</label>
	</div>`
).join(" ");

	// ----- Radio BTN Select -----
const RadioButton = document.querySelectorAll("input");

for(const radioBTN of RadioButton){
	radioBTN.addEventListener("change", ShowOutout)
}


function ShowOutout(e){
	console.log(e);

	if(this.checked) {
		result.innerHTML = `"You Selected" ${this.value}`;
	}
}