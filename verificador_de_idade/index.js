function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var ano_usuario = document.querySelector('input#txtano')
  var result = document.querySelector('div#res')

  
  if (ano_usuario.value < 1903 || ano_usuario.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var sexo = document.getElementsByName('radsex')
    var idade = ano - ano_usuario.value
    var genero = ''
    var img = document.createElement('img')//  cria um elemento img para o html
    img.setAttribute('id', 'foto') //ajusta uma atributo id para se chamar 'foto' => (???)
    if (sexo[0].checked){ //sexo[0] primeiro input
      genero = 'Homem'
      if (idade >= 0 && idade < 5){ //
        img.setAttribute('src', 'images/baby_boy.png')//encaminha o src para a pasta da imagem 
      } else if (idade < 14){
        img.setAttribute('src', 'images/gori.png')
      } else if (idade < 19){
        img.setAttribute('src', 'images/garoto.png')
      } else if (idade < 34){
        img.setAttribute('src', 'images/cara.png')
      } else if (idade < 55){
        img.setAttribute('src', 'images/rapaz.png')
      } else {
        img.setAttribute('src', 'images/idoso.png')
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 5){
        img.setAttribute('src', 'images/baby_girl.png')
      } else if (idade < 14){
        img.setAttribute('src', 'images/goria.png')
      } else if (idade < 19){
        img.setAttribute('src', 'images/garota.png')
      } else if (idade < 34){
        img.setAttribute('src', 'images/mocinha.png')
      } else if (idade < 55){
        img.setAttribute('src', 'images/moça.png')
      } else {
        img.setAttribute('src', 'images/idosa.png')
      }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`
    result.appendChild(img) //appendChild adiciona um elemento
    result.style.padding = '10px'

  }
}