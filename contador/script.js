function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar`
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //contagem crescente
            for(var x = i; x <= f; x += p) {
                res.innerHTML += ` ${x} \u{1f449}`;
            }
        } else {
            //contagem regressiva
            for(let x = i; x >= f; x -= p) {
                res.innerHTML += ` ${x} \u{1f449}`
            }    
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
