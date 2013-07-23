module.exports = function(user) {
	
	var win = Ti.UI.createWindow({
		title: user.nome,
		backgroundColor: 'white'
	});
	
	return win;
};
