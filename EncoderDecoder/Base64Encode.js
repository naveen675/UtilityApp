window.addEventListener("load", () => {

    let encodeInput = document.querySelector("#base64EncodIn");
    let encodeOutput = document.querySelector("#base64EncodeOut");
    let encodeButton = document.querySelector("#base64EncodeBtn");

    encodeButton.addEventListener("click", () =>{

        let input = encodeInput.value;
        let encodedValue = btoa(input);
        encodeOutput.value = encodedValue;
    })
})