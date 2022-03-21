window.addEventListener("load", () => {

    let conversionButton = document.querySelector("#conversionBtn");
    let kilometerInput = document.querySelector("#kilometerIn");
    let body = document.querySelector(".subContent");
    let meterOutput = document.createElement("h3")
    meterOutput.setAttribute("id","meterOut");

    conversionButton.addEventListener("click", ()=> {

        let input = kilometerInput.value;
        let output = input*1000;
        meterOutput.innerHTML = output+" "+"mtr";
        body.appendChild(meterOutput);
        
    })
})