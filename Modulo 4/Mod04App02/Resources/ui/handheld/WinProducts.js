module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Produtos',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var btnAdd = Ti.UI.createButton({
		title: 'Novo Produto',
		height: '40dp',
		width: '250dp',
		top: '10dp'
	});
	
	btnAdd.addEventListener('click', function() {
		
		var winNewProduct = require('ui/handheld/WinNewProduct');
		win.containingTab.open(winNewProduct);
	});
	
	win.add(btnAdd);
	
	return win;
	
})();
