window.addEventListener("load", () => {

    let HexInput = document.querySelector("#HexIn");
    let HexButton = document.querySelector("#HexBtn");
    let output = document.createElement("div")
    output.setAttribute("id","RgbOut");
    let body = document.querySelector(".subContent");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");


    
    HexButton.addEventListener("click", () => {

        let list = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HexInput.value);

        let rgbValues;

        if (list) {

            rgbValues = {
            'Red': parseInt(list[1], 16),
            'Green': parseInt(list[2], 16),
            'Blue': parseInt(list[3], 16)
            }
        }
        else{
            rgbValues = {
                'Red': 255,
                'Green': 255,
                'Blue': 255
                }
            HexInput.value = "FFFFFF"
        }
        p1.innerHTML = "Hex Code #"+HexInput.value+" Converts to";
        output.appendChild(p1);
        p2.innerHTML = "rgb("+ rgbValues["Red"]+","+rgbValues["Green"]+","+rgbValues["Blue"]+")";
        output.appendChild(p2);
        body.appendChild(output);

        

    })

    
    
})