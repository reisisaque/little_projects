function contando(){
  var inicio = document.querySelector('input#txti')
  var fim = document.querySelector('input#txtf')
  var passo = document.querySelector('input#txtp')
  var result = document.querySelector('div#res')

  if (inicio.value.length == 0 || passo.value.length == 0||fim.value.length ==0){
    window.alert('[ERRO!] Adicione os dados corretamente')
    result.innerHTML = 'Impossível realizar a contagem!'
  } else {
    result.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let p = Number(passo.value)
    let f = Number(fim.value)

    if(p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if(i < f){
      for(let c =i; c <=f; c+=p){
      res.innerHTML += `${c} ` + `\u{1F449} `
    }
  }else{
    for(let c =i; c >=f; c -=p){
      res.innerHTML += `${c} ` + '\u{1F449}'
    }
  }
    res.innerHTML += '\u{1F6A9}'
  }

}                                                                                                                           