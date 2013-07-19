/* 
 * Exemplos do dia 09/07
function somar(a, b) {};
function dividir(a, b) {};
exports.session = {};
exports.controllers = {};
exports.models = {};
exports.theme = { windowColors: 'yellow' };
exports.calcular = function(operacao, a, b) {
	
	if(operacao === 'somar') 
		somar(a, b)
	else
		dividir(a, b);
}; */

//"Construtor" de função isola a função de log para funcionar no iOS
var info = (function() {
	
	return function(log) {
		Ti.API.info(log);
	}
})();


var warn = (function() {
	
	return function(log) {
		Ti.API.warn(log);
	}
})();

//No Android, a função pode ser definida normalmente
var warn2 = function(log) {
	Ti.API.warn(log);
};

var error = (function() {
	
	return function(log) {
		Ti.API.error(log);
	}
})();

//Adicionamos as funções à propriedades do expors
//para termos uma interface completa
exports.info = info;
exports.warn = warn;
exports.warn2 = warn2;
exports.error = error;