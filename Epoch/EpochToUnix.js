window.addEventListener("load", () => {

    let body = document.querySelector(".subContent");
    let epochInput = document.querySelector("#EpochIn");
    let conversionButton = document.querySelector("#conversionBtn");
    let output = document.createElement("h3");
    output.setAttribute("id","epochOut");
    conversionButton.addEventListener("click",() => {

        let input = epochInput.value;
        let date = new Date(parseInt(input));
        output.innerHTML = date.getFullYear()+":"+date.getMonth()+":"+date.getDay()+":"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        body.appendChild(output);
    })
})