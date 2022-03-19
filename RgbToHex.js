window.addEventListener("load",() => {

    let redValue = document.querySelector("#redIn");
    let greenValue =  document.querySelector("#greenIn");
    let blueValue = document.querySelector("#blueIn");
    let RgbToHexButton = document.querySelector("#RGBtoHexBtn");
    let body = document.querySelector(".subContent");
    let output = document.createElement('div');
    output.setAttribute("class","HexaOutput")
    let p1 = document.createElement("p");
    p1.setAttribute("id","RGBValues");
    let p2  = document.createElement("p");
    p2.setAttribute("id","hexValue");
    let color = document.createElement("input");
    color.setAttribute("type","button");


    RgbToHexButton.addEventListener("click" ,() => {

        let red = redValue.value;
        let green = greenValue.value;
        let blue = blueValue.value;
        if(!(red >= 0 && red <= 255)){
            red = 255;
        }
        if(!(green >= 0 && green<= 255)){
            green = 255;
        }
        if(!(blue >= 0 && blue<= 255)){
            blue = 255;
        }
        let hexValue = "#" + parseInt(red).toString(16)+parseInt(green).toString(16)+parseInt(blue).toString(16);

        
        p1.innerHTML = red+" "+green+" "+blue;
        output.appendChild(p1);

        
        p2.innerHTML = hexValue;
        output.appendChild(p2);

        
        color.setAttribute("id","RGBColor");
        color.style.background = hexValue;
        output.appendChild(color);

        body.appendChild(output);
    })

})