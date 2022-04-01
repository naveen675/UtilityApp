window.addEventListener("load", () => {

     let display = document.querySelector("#ticker");
     console.log(display);
     let date = parseInt((new Date().getTime())/1000);
     display.innerHTML = date;
     console.log(date);
     
     let ticker = () => {

        date = parseInt((new Date().getTime())/1000);
        display.innerHTML = date;

     }

     setInterval(ticker,1000);
})