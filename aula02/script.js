function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmBitcoinNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.22;
  var valorBitcoin = valorEmBitcoinNumerico * 251.562;  
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorBitcoinConvertido = document.getElementById("bitcoinConvertido");
  var bitcoinConvertido = "Bitcoin em reais é R$ " + valorBitcoin;
  valorBitcoinConvertido.innerHTML = bitcoinConvertido;
}
