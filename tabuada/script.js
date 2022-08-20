function tabuada() {
    let num = document.getElementById('txtn')
    let tbd = document.getElementById('tbd')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        let n = Number(num.value)
        tbd.innerHTML = ''
        for(var t = 1; t <= 10; t++) {
            let r = n * t
                let item = document.createElement('option')
                item.text = `${n} x ${t} = ${r}`
                item.value = `tab${t}`
                tbd.appendChild(item)
        }
    }
}