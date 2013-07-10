module.exports = function(color) {
	
	var win = Ti.UI.createWindow({
		title: 'Janela 1',
		backgroundColor: color
	});
	
	return win;
};