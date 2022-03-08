window.addEventListener('load', ()=> {

    let urlEncoder = document.querySelector('#UrlEncoder');
    let urlDecoder = document.querySelector('#UrlDecoder');
    let urlEncodeDecodeInput = document.querySelector('#urlEncodeDecodeIn');
    let urlEncodeDecodeOutput = document.querySelector('#urlEncodeDecodeOut');

    urlEncoder.addEventListener('click', event => {
        let encodeValue = encodeURIComponent(urlEncodeDecodeIn.value);
        urlEncodeDecodeOutput.innerHTML=encodeValue;    
    })

    urlDecoder.addEventListener('click',event => {

        let decodeValue = decodeURIComponent(urlEncodeDecodeInput.value);
        urlEncodeDecodeOutput.innerHTML=decodeValue
    })


    let base64EncodeInput = document.querySelector('.base64EncodeIn');
    let base64Encod = document.querySelector('.base64Encode');

    base64Encod.addEventListener('click', event => {

        let input = base64EncodeInput.innerHTML;
        let encodedValue = Buffer.from(input).toString('base64');

        let output = document.createElement('textarea');
        output.setAttribute('id','base64EncodeOut');
        output.innerHTML = encodedValue;
        document.body.appendChild(output);

    })
})