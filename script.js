window.addEventListener('load',()=>{

    let urlEncod = document.querySelector("#UrlEncoder");
    let urlDecod = document.querySelector("#UrlDecoder");
    let urlEncodeDecodeInput = document.querySelector("#urlEncodeDecodeIn");
    let urlEncodeDecodeOutput = document.querySelector("#urlEncodeDecodeOut");
    let base64EncodeInput = document.querySelector("#base64EncodeIn");
    let base64Encod = document.querySelector("#base64Encode");
    let base64EncodeOutput = document.querySelector("#base64EncodeOut");
    let base64DecodeInput = document.querySelector("#base64DecodeIn");
    let base64Decod = document.querySelector("#Base64Decode");
    let base64DecodeOutput = document.querySelector("#base64DecodeOut");

    
    

    // console.log(base64Decod);
    base64Decod.addEventListener('click', () => {

        let baseInput = base64DecodeInput.value;
        let baseDecodedValue = atob(baseInput);
        base64DecodeOutput.value = baseDecodedValue;    
    })
   // console.log(base64Decod);
    
    // urlEncod.addEventListener('click', () => {

    //     let encodeValue = encodeURIComponent(urlEncodeDecodeInput.value);
    //     console.log(encodeValue);
    //     urlEncodeDecodeOutput.innerHTML=encodeValue;  
        
    // })

    urlDecod.addEventListener('click', event => {

        let decodeValue = decodeURIComponent(urlEncodeDecodeInput.value);
        console.log(decodeValue);
        urlEncodeDecodeOutput.innerHTML=decodeValue;
    })



    base64Encod.addEventListener('click', event => {

        let baseInput = base64EncodeInput.value;
        let baseEncodedValue = btoa(baseInput);
        base64EncodeOutput.value = baseEncodedValue;    

    })

    base64Decod.addEventListener('click', event => {

        let baseInput = base64DecodeInput.value;
        let baseDecodedValue = atob(baseInput);
        base64DecodeOutput.value = baseDecodedValue;    
    })

    


})