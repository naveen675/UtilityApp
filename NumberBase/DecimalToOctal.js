window.addEventListener('load', () => {
    
    let decimalInput = document.querySelector("#decimalIn");
    let decimalButton = document.querySelector("#decimalBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","OctaOut");
    let body = document.querySelector(".subContent");

    decimalButton.addEventListener("click", () => {
       
        let input = decimalInput.value;
        let octaValue = parseInt(input,10).toString(8);
        output.innerHTML = octaValue;
        body.appendChild(output);

    })
})