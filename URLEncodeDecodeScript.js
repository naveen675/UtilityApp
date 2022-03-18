window.addEventListener('load',() => {

    
    let encodeButton = document.querySelector("#UrlEncoderBtn");
    let decodeButton = document.querySelector("#UrlDecoderBtn");
    let encodeDecodeInput = document.querySelector("#urlEncodeDecodeIn");
    let encodeDecodeOutput = document.querySelector("#urlEncodeDecodeOut");

    encodeButton.addEventListener('click',() => {
        
        let input = encodeDecodeInput.value;
        let encodedValue = encodeURIComponent(input);
        encodeDecodeOutput.value = encodedValue;
    })

    decodeButton.addEventListener('click', () => {

        let input = encodeDecodeInput.value;
        
        let decodedValue = decodeURIComponent(input);
        console.log(decodedValue);
        encodeDecodeOutput.value = decodedValue;
    })


})