const increment = document.getElementById("increment")
const color = document.getElementById("color")

increment.addEventListener("click", function () {
    let value = document.getElementById("number");
    value.innerHTML = parseInt(value.innerHTML) + 1
})

color.addEventListener("click", function(){
    let object = document.getElementById("number")
    
    if(object.style.color == "red") object.style.color = "black"
    else object.style.color = "red"
})