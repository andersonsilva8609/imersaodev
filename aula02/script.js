function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmBitcoinNumerico = parseFloat(valor);
  //Multiplicado o valor unitário 
  var valorEmReal = valorEmDolarNumerico * 5.22; //valor de 1 dólar
  var valorBitcoin = valorEmBitcoinNumerico * 251.562; //valor de 1 bitcoin

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorBitcoinConvertido = document.getElementById("bitcoinConvertido");
  var bitcoinConvertido = "Bitcoin em reais é R$ " + valorBitcoin.toFixed(2);
  valorBitcoinConvertido.innerHTML = bitcoinConvertido;
}
