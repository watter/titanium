module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Produtos',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	function refreshProducts(products) {
			
			var productRows = [];
			
			for(var i = 0, s = products.length; i < s; i++) {
				
				var productRow = Ti.UI.createTableViewRow({
					layout: 'vertical'
				});
				
				var lblName = Ti.UI.createLabel({
					text: products[i].name,
					height: '20dp',
					top: '5dp',
					width: '200dp'
				});
				
				var lblDescription = Ti.UI.createLabel({
					text: products[i].description,
					height: '20dp',
					top: '5dp',
					width: '200dp'
				});
				
				productRow.add(lblName);
				productRow.add(lblDescription);
				
				productRow.product = products[i];
				
				productRows.push(productRow);
			}
			
			tvProducts.setData(productRows);
			
		}
	
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
		
		$.session.user.listProducts(refreshProducts, function(error) {
			
			alert('Erro: ' + error);
		});
	});
	
	win.addEventListener('focus', function() {
		
		$.session.user.listProducts(refreshProducts, function(error) {
			
			alert('Erro: ' + error);
		});
	});
	
	win.add(btnAdd);
	win.add(tvProducts);
	
	return win;
	
})();
