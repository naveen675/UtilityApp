window.addEventListener('load', () => {
    
    let binaryInput = document.querySelector("#binaryIn");
    let binaryButton = document.querySelector("#binaryBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","decimalOut");
    let body = document.querySelector(".subContent");

    binaryButton.addEventListener("click", () => {
       
        let input = binaryInput.value;
        let decimalValue = parseInt(input,2).toString(10);
        output.innerHTML = decimalValue;
        body.appendChild(output);

    })
})