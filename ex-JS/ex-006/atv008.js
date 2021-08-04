agora= new Date
hora= agora.getHours()

console.log(`agora são exatamente ${hora} horas`)

if (hora>=18) {
    console.log('Boa Noite')
}else if(hora<18 && hora<12 ){
    console.log('Boa tarde')
}else if(hora >= 0 && hora < 5 ){
    console.log('Boa madrugada')
}else {
    console.log('Bom dia')
}