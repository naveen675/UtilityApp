window.addEventListener('load', () => {
    
    let binaryInput = document.querySelector("#binaryIn");
    let binaryButton = document.querySelector("#binaryBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","hexOut");
    let body = document.querySelector(".subContent");

    binaryButton.addEventListener("click", () => {
       
        let input = binaryInput.value;
        let hexValue = parseInt(input,2).toString(16);
        output.innerHTML = hexValue;
        body.appendChild(output);

    })
})