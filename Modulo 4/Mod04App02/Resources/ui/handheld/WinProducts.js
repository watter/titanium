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
	
	var tvProducts = Ti.UI.createTableView({
		data: [],
		top: '10dp',
		height: '430dp'
	});
	
	Ti.App.addEventListener('app:RefreshProducts', function() {
		
		$.session.user.listProducts(function(products) {
			
		}, function(error) {
			
			alert('Erro: ' + error);
		});
	});
	
	win.add(btnAdd);
	win.add(tvProducts);
	
	return win;
	
})();
