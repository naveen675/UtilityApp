window.addEventListener('load', () => {
    
    let decimalInput = document.querySelector("#decimalIn");
    let decimalButton = document.querySelector("#decimalBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","binaryOut");
    let body = document.querySelector(".subContent");

    decimalButton.addEventListener("click", () => {
       
        let input = decimalInput.value;
        let binaryValue = parseInt(input,10).toString(2);
        output.innerHTML = binaryValue;
        body.appendChild(output);

    })
})