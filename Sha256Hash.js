
window.addEventListener("load", () => {

    let sha256Input = document.querySelector("#sha256In");
    let sha256Button = document.querySelector("#sha256Btn");
    let output = document.createElement("textarea");
    let body = document.querySelector(".conversion");
    output.setAttribute("id","sha256Out");


    sha256Button.addEventListener("click", () => {

        output.remove();
        let input = sha256Input.value;
        let generatedValue = CryptoJS.AES.encrypt(input, "sha-256");
        output.value = generatedValue;
        body.appendChild(output);
    })
})