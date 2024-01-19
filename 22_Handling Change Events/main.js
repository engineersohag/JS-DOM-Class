let message = document.querySelector('#message');
let result = document.querySelector('#result');

message.addEventListener("change", () => {
    result.textContent = message.value;
})