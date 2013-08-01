module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Novo Produto',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var txtName = Ti.UI.createTextField({
		hintText: 'Nome do produto...',
		height: '40dp',
		width: '250dp',
		top: '10dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType: Ti.UI.RETURNKEY_NEXT
	});
	
	txtName.addEventListener('return', function() {
		txtCategory.focus();
	});
	
	var txtCategory = Ti.UI.createTextField({
		hintText: 'Categoria do produto...',
		height: '40dp',
		width: '250dp',
		top: '10dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType: Ti.UI.RETURNKEY_NEXT
	});
	
	txtCategory.addEventListener('return', function() {
		txtDescription.focus();
	});
	
	var txtDescription = Ti.UI.createTextField({
		hintText: 'Descrição do produto...',
		height: '40dp',
		width: '250dp',
		top: '10dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType: Ti.UI.RETURNKEY_NEXT
	});
	
	txtDescription.addEventListener('return', function() {
		txtQuantity.focus();
	});
	
	var lblQuantity = Ti.UI.createLabel({
		text: 'Quantidade: ',
		height: '40dp',
		width: Ti.UI.SIZE,
		top: '10dp',
		left: '15dp'
	});
	
	var txtQuantity = Ti.UI.createTextField({
		hintText: 'Quantidade...',
		height: '40dp',
		width: '100dp',
		top: '-40dp',
		right: '15dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType: Ti.UI.RETURNKEY_DONE
	});
	
	txtQuantity.addEventListener('return', function() {
		txtQuantity.blur();
	});
	
	var btnSave = Ti.UI.createButton({
		title: 'Salvar',
		height: '40dp',
		width: '250dp',
		top: '10dp'
	});
	
	btnSave.addEventListener('click', function() {
		
		var Product = require('controllers/Product');
		var thisProduct = new Product({
			name: txtName.value,
			category: txtCategory.value,
			description: txtDescription.value,
			quantity: txtQuantity.value
		});
		
		thisProduct.save(function(product) {
			
			Ti.API.info('[WinNewProduct - save] Produto salvo: ' + product.id);
			
			Ti.App.fireEvent('app:RefreshProducts');
			
			win.close();
		}, function(error) {
			
			alert('Erro: ' + error);
		});
	});
	
	//win.add([txtName, txtCategory, txtDescription, lblQuantity, txtQuantity, btnSave]);
	win.add(txtName);
	win.add(txtCategory);
	win.add(txtDescription);
	win.add(lblQuantity);
	win.add(txtQuantity);
	win.add(btnSave);
	
	return win;
	
})();
