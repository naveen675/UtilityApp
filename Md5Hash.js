
window.addEventListener("load", () => {

    let crypto = require('crypto');
    let md5Input = document.querySelector("#md5In");
    let md5Button = document.querySelector("#md5Btn");
    let output = document.createElement("textarea");
    let body = document.querySelector(".conversion");
    output.setAttribute("id","md5InOut");


    md5Button.addEventListener("click", () => {

        output.remove();
        let input = md5Input.value;
        let generatedValue = crypto.createHash(algo).update(s).digest('hex');
        output.value = generatedValue;
        body.appendChild(output);

    })
})