let celsius = document.getElementById('celsius')
let fahrenheit = document.getElementById('fahrenheit')

function celToFar(){
    let output = (Number(celsius.value) * 9/5) + 32;
    fahrenheit.value = Number(output.toFixed(2));
}
function farToCel(){
    let output = (Number(fahrenheit.value) - 32) * 5/9;
    celsius.value = Number(output.toFixed(2))  
}