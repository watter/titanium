module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Filesystem',
		backgroundColor: 'white'
	});
	
	Ti.API.info('Filesystem - include');
	
	//Literalmente incluímos o conteúdo de Filesystem.js neste
	//local. O compilador copia todo o código de Filesystem.js
	//e adiciona aqui.
	Ti.include('/lib/Filesystem.js');
	
	return win;
})();
