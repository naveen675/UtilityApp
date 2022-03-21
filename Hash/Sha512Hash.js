
window.addEventListener("load", () => {

    let sha512Input = document.querySelector("#sha512In");
    let sha512Button = document.querySelector("#sha512Btn");
    let output = document.createElement("textarea");
    let body = document.querySelector(".conversion");
    output.setAttribute("id","sha512Out");


    sha512Button.addEventListener("click", () => {

        output.remove();
        let input = sha512Input.value;
        let generatedValue = CryptoJS.AES.encrypt(input, "sha-512");
        output.value = generatedValue;
        body.appendChild(output);
    })
})