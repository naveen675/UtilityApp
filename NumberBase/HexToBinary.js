window.addEventListener('load', () => {
    
    let hexInput = document.querySelector("#hexIn");
    let hexButton = document.querySelector("#hexBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","binaryOut");
    let body = document.querySelector(".subContent");

    hexButton.addEventListener("click", () => {
       
        let input = hexInput.value;
        let binaryValue = parseInt(input,16).toString(2);
        output.innerHTML = binaryValue;
        body.appendChild(output);

    })
})