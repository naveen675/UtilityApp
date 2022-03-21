window.addEventListener('load', () => {
    
    let decimalInput = document.querySelector("#decimalIn");
    let decimalButton = document.querySelector("#decimalBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","HexOut");
    let body = document.querySelector(".subContent");

    decimalButton.addEventListener("click", () => {
       
        let input = decimalInput.value;
        let hexaValue = parseInt(input,10).toString(16);
        output.innerHTML = hexaValue;
        body.appendChild(output);

    })
})