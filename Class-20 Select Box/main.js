const framework = document.querySelector("#framework");
const btn = document.querySelector("#btn");

btn.onclick = (e) => {
    e.preventDefault();
    const OptionValue = [].filter
    .call(framework.options, (option) => option.selected)
    .map((option) => option.text);

    let Output = document.querySelector("#output");
    Output.innerHTML = "Output is :"+OptionValue;
}