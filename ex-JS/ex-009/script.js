function verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txt1')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ' '
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero= 'Homem'
            if (idade>=0 && idade < 35 ){
                img.setAttribute('src', 'jovemh.png')
                //Jovem
            }else{
                //Velho
                img.setAttribute('src', 'velhoh2.png')
            }
            }else if(fsex[1].checked){
                genero= 'Mulher'
            if (idade>= 0 && idade<30 ){
                //Jovem
                img.setAttribute('src', 'jovemm2.png')
            }else {
                img.setAttribute('src','velham2.png')
                //Velho
            }
        }
        res.innerHTML= `Detectamos,${genero} com ${idade} anos`
        res.style.textAlign= 'center'
        res.appendChild(img)

    }
}
