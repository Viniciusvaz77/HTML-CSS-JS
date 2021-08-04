let num = document.querySelector('input#txt1')
let lista = document.getElementById('add')
let res =  document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
    
}

function inLista(n, l) {

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false

    }
        
    
}

function adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '

    }else{
        alert('Valor invalido')

    }
    num.value=' '
    num.focus()
}

function finalizar(p) {
    if (valores.length == 0){
        alert('Adicione um numero')
    }else{
        let tot = valores.length
        let maior= valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = `<p> ao todo temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p> O maior numero é o valor informado foi ${maior} o menor valor informado foi ${menor}`
        res.innerHTML += `A soma dos valores é de ${soma}`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
    
}