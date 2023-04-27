let colorId = document.getElementById("color-id")

function getColor(){
    var smybols,color;

    smybols = "0123456789ABCDEF";

    color = "#";

    for(var i =0;i<6;i++){
        color = color + smybols[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = color;
    colorId.innerText = color


colorId.addEventListener("click", function(){
    navigator.clipboard.writeText(colorId.innerText);

   colorId.innerText = " copied"
})
setInterval(function displayHello() {
    if(colorId.innerText === "copied"){
        colorId.innerText = color
    }
    }, 2000);
}


