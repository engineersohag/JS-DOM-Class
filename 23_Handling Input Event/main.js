let message = document.querySelector('#message');
let result = document.querySelector('#result');

message.addEventListener("input", () => {
    result.textContent = message.value;
})