const herois = [
  { nome: "Flash",
   img: "./img/flash.png"},
  { nome: "Batman",
   img: "./img/batman.png"},
  { nome: "Superman",
   img: "./img/superman.png"},
  { nome: "AquaMan",
   img: "./img/aquaman.png"},
  { nome: "Cyborg",
   img: "./img/cyborg1.png"},
 { nome: "Mulher Maravilha",
   img: "./img/mulher-maravilha.png"},
   { nome: "Supergirl",
   img: "./img/supergirl.png"},
   { nome: "Batwoman",
   img: "./img/batwoman.png"},
  ]
  

const enviar = document.getElementById('enviar')
const refaz = document.getElementById('reload')
const img = document.querySelector('img')

var numero = 0;

function aleatorio(){
  numero = Math.floor(Math.random() * herois.length)

  img.setAttribute('src', herois[numero].img)
  
}

resetar()

function resetar(){
  document.querySelector('span').innerHTML = " ";
  document.getElementById('imgsuper').className = null
  aleatorio()
}

enviar.onclick = () => {
    let resposta = document.querySelector('input').value.trim();

    if(resposta.length){
        if(resposta.toLowerCase() == herois[numero].nome.toLowerCase()){
      document.querySelector('span').innerHTML = "Parabéns, vocÊ acertou - " + herois[numero].nome 
      document.getElementById('imgsuper').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }

    else{
      document.querySelector('span').innerHTML = "Não foi dessa vez, você errou! - " + herois[numero].nome
      document.getElementById('imgsuper').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }
  }else{
    document.querySelector('span').innerHTML = "Tente novamente, escreva um nome!"
  }
}

refaz.onclick = resetar