function calcular_tabuada(){
  var num = document.getElementById('numero')
  var tab = document.querySelector('select#seltab')
  
  if(num.value.length ==0){
    window.alert('[ERROR!] por favor digite um número!')
  }else{
    let n = Number(num.value)
    tab.innerHTML = ''
    for(let i = 0; i<11; ++i){
      var item = document.createElement('option')
      item.text = `${i} X ${n} = ${i*n}`
      tab.appendChild(item)
    }
  }
}