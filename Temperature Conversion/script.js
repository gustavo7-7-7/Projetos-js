let inicio = document.getElementById('inni');
let final = document.getElementById('finn');
let res = document.getElementsByClassName('res');


function conversA(){
    let s1 = document.getElementById("selet1").value;
    let s2 = document.getElementById("selet2").value;
    if (s1 == "celsius" && s2 == "fahrenheit") {
      let output = (Number(inicio.value) * 9) / 5 + 32;
      final.value = Number(output.toFixed(2));
    } 
}

/*
    let cf = Math.round((nu * 9) / 5 + 32);
    let fc = Math.round(((nu - 32) * 5) / 9);
    let ck = Math.round(nu + 273.15);
    let kc = Math.round(nu - 273.15);
    let fk = Math.round(((nu - 273.15) * 9) / 5 + 32);
    let kf = Math.round(((nu - 32) * 5) / 9 + 273.15);
    if (s1 == "celsius" && s2 == "celsius") {
      vf.innerHTML = nu;
    } else if (s1 == "celsius" && s2 == "fahrenheit") {
      vf.innerHTML = `${cf} °F`;
      conta.innerHTML = `(${nu} x 9) / 5 + 32 = ${cf} °F`;
    } else if (s1 == "fahrenheit" && s2 == "celsius") {
      vf.innerHTML = `${fc} °C`;
      conta.innerHTML = `(${nu} - 32) * 5 / 9 = ${fc} °C`;
    } else if (s1 == "celsius" && s2 == "kelvin") {
      vf.innerHTML = `${ck} K`;
      conta.innerHTML = `${nu} + 273.15 = ${ck} K`;
    } else if (s1 == "kelvin" && s2 == "celsius") {
      vf.innerHTML = `${kc} °C`;
      conta.innerHTML = `${nu} - 273.15 = ${kc} °C`;
    } else if (s1 == "fahrenheit" && s2 == "kelvin") {
      vf.innerHTML = `${fk} K`;
      conta.innerHTML = `(${nu} - 273.15) * 9 / 5 + 32 = ${fk} K`;
    } else if (s1 == "kelvin" && s2 == "fahrenheit") {
      vf.innerHTML = `${kf} °F`;
      conta.innerHTML = `(${nu} - 32) * 5 / 9 + 273.15 = ${kf} °F`;
    }*/
