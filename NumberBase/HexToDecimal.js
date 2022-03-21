window.addEventListener('load', () => {
    
    let hexInput = document.querySelector("#hexIn");
    let hexButton = document.querySelector("#hexBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","decimalOut");
    let body = document.querySelector(".subContent");

    hexButton.addEventListener("click", () => {
       
        let input = hexInput.value;
        let decimalValue = parseInt(input,16).toString(10);
        output.innerHTML = decimalValue;
        body.appendChild(output);

    })
})