window.addEventListener("load", () => {

    let meterInput = document.querySelector("#meterIn");
    let converionButton = document.querySelector("#conversionBtn");
    let output = document.createElement("h3");
    output.setAttribute("id", "kilometerOut");
    let body = document.querySelector(".subContent");

    converionButton.addEventListener("click", () => {

        let input = meterInput.value;
        output.innerHTML = input/1000 + "Km";

        body.appendChild(output);
    })
})