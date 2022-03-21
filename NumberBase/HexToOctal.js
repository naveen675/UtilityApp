window.addEventListener('load', () => {
    
    let hexInput = document.querySelector("#hexIn");
    let hexButton = document.querySelector("#hexBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","octalOut");
    let body = document.querySelector(".subContent");

    hexButton.addEventListener("click", () => {
       
        let input = hexInput.value;
        let octalValue = parseInt(input,16).toString(8);
        output.innerHTML = octalValue;
        body.appendChild(output);

    })
})