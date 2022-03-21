window.addEventListener('load', () => {
    
    let binaryInput = document.querySelector("#binaryIn");
    let binaryButton = document.querySelector("#binaryBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","octaOut");
    let body = document.querySelector(".subContent");

    binaryButton.addEventListener("click", () => {
       
        let input = binaryInput.value;
        let octaValue = parseInt(input,2).toString(8);
        output.innerHTML = octaValue;
        body.appendChild(output);

    })
})