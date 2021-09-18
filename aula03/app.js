var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
function Chutar(){
  var elementoRultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  //console.log(chute);
  if(chute == numeroSecreto){
   elementoRultado.innerHTML = "Parabéns! Você acertou";
  } else if(chute > 10 || chute < 0){
    elementoRultado.innerHTML = "Digite um número de 0 à 10";
  }else{
    elementoRultado.innerHTML = "Errou, o número secreto era ";
  }
}