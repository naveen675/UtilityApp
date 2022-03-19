window.addEventListener("load",() => {

    
    

    let yearInput = document.querySelector("#yearIn");
    let monthInput = document.querySelector("#monthIn");
    let dateInput = document.querySelector("#dateIn");
    let hoursInput = document.querySelector("#hoursIn");
    let minutesInput = document.querySelector("#minuteIn");
    let secondsInput = document.querySelector("#secondIn");
    let converionButton = document.querySelector("#conversionBtn");
    let epoch = document.querySelector("#epochValue");
    let output = document.createElement("h3");
    output.setAttribute("id", "epochOut");
    let body = document.querySelector(".subContent");

    converionButton.addEventListener("click", () => {

        let year = yearInput.value > 0  ? yearInput.value : 1970;
        let month = monthInput.value > 0 ? monthInput.value-1 : 0;
        let date = dateInput.value > 0 ? dateInput.value : 1;
        let hours = hoursInput.value > 0 ? hoursInput.value : 1;
        let minutes = minutesInput.value > 0 ? minutesInput.value : 1;
        let seconds = secondsInput.value > 0 ? secondsInput.value : 1;
        

        let d = new Date(year,month,date,hours,minutes,seconds);
        let epochValue = Date.parse(d.toString());
        output.innerHTML = epochValue;
        body.appendChild(output);

    })

})