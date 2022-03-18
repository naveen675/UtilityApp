window.addEventListener("load", () => {
    
    let decodeInput = document.querySelector("#base64DecodeIn");
    let body = document.querySelector(".content");
    let decodeButton = document.querySelector("#Base64DecodeBtn");
    let output = document.createElement("textarea");
    output.setAttribute("id","base64DecodeOut");

    decodeButton.addEventListener("click", () => {

        output.remove();
        let input = decodeInput.value;
        let decodedValue = atob(input);
        output.value = decodedValue;
        body.appendChild(output);
        
    })


})