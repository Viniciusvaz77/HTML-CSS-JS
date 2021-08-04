function contar() {
    var nmr1= document.getElementById('txt1')
    var nmr2= document.getElementById('txt2')
    var passo= document.getElementById('txt3')
    var res= document.querySelector('div#res')
    
    if (nmr1.value.length == 0 || nmr2.value.length == 0 || passo.value.length == 0){
        res.innerHTML='Impossivel contar'
        alert('[ERRO] FALTAM DADOS')
        

    }else {
        i = Number(nmr1.value)
        f= Number(nmr2.value)
        p= Number(passo.value)
        if (p<=0){
            alert('[ERRO] O PASSO SERA CONSIDERADO 1')
            p = 1
        }
        if (i<f){
            for(var c=i; c <=f; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            

        }else{
            for(var c=i; c>=f; c-= p)
            res.innerHTML += ` ${c} \u{1F449}`
            res.innerHTML += `\u{1f3c1}`
        }
        res.innerHTML += `\u{1f3c1}`
}

}   
