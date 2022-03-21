window.addEventListener('load', () => {
    
    let octaInput = document.querySelector("#octaIn");
    let octaButton = document.querySelector("#octaBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","hexOut");
    let body = document.querySelector(".subContent");

    octaButton.addEventListener("click", () => {
       
        let input = octaInput.value;
        let hexaValue = parseInt(input,8).toString(16);
        output.innerHTML = hexaValue;
        body.appendChild(output);

    })
})