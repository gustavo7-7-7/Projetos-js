let inicio = document.getElementById("inni");
let final = document.getElementById("finn");
let res = document.getElementsByClassName("res");

function conversA() {
  let s1 = document.getElementById("selet1").value;
  let s2 = document.getElementById("selet2").value;
  let cf = Math.round((inicio.value * 9) / 5 + 32);
  let fc = Math.round(((inicio.value - 32) * 5) / 9);
  let ck = Math.round(inicio.value + 273.15);
  let kc = Math.round(inicio.value - 273.15);
  let fk = Math.round(((inicio.value - 273.15) * 9) / 5 + 32);
  let kf = Math.round(((inicio.value - 32) * 5) / 9 + 273.15);
  if (s1 == "celsius" && s2 == "celsius")
    if (s1 == "celsius" && s2 == "fahrenheit") {
      let output = (Number(cf);
      final.value = Number(output.toFixed(2));
    }
}
//...
