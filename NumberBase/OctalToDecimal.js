window.addEventListener('load', () => {
    
    let octaInput = document.querySelector("#octaIn");
    let octaButton = document.querySelector("#octaBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","decimalOut");
    let body = document.querySelector(".subContent");

    octaButton.addEventListener("click", () => {
       
        let input = octaInput.value;
        let decimalValue = parseInt(input,8).toString(10);
        output.innerHTML = decimalValue;
        body.appendChild(output);

    })
})