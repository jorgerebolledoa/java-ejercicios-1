var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let restultadoeu = dollarToEuro(137);
let resutadoyen = euroToYen(dollarToEuro(137));


console.log(resutadoyen);