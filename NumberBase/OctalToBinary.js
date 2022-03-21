window.addEventListener('load', () => {
    
    let octaInput = document.querySelector("#octaIn");
    let octaButton = document.querySelector("#octaBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","binaryOut");
    let body = document.querySelector(".subContent");

    octaButton.addEventListener("click", () => {
       
        let input = octaInput.value;
        let binaryValue = parseInt(input,8).toString(2);
        output.innerHTML = binaryValue;
        body.appendChild(output);

    })
})