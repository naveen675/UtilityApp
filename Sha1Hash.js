
window.addEventListener("load", () => {

    let sha1Input = document.querySelector("#sha1In");
    let sha1Button = document.querySelector("#sha1Btn");
    let output = document.createElement("textarea");
    let body = document.querySelector(".conversion");
    output.setAttribute("id","sha1Out");


    sha1Button.addEventListener("click", () => {

        output.remove();
        let input = sha1Input.value;
        let generatedValue = CryptoJS.AES.encrypt(input, "sha-1");
        output.value = generatedValue;
        body.appendChild(output);
    })
})