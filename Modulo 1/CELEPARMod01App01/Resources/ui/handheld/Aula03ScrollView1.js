module.exports = (function() {
	
	var view = Ti.UI.createView({
		backgroundColor: 'white'
	});
	
	var txtDados = Ti.UI.createTextArea({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		font: { fontSize: 20, fontWeight: 'bold' },
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType: Ti.UI.RETURNKEY_GO,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		top: 0,
		value: ''
	});
	
	view.add(txtDados);
	
	view.addEventListener('focus', function() {
		
		var platformData = [Ti.Platform.id,
							Ti.Platform.locale,
							Ti.Platform.macaddress,
							Ti.Platform.model,
							Ti.Platform.name,
							Ti.Platform.netmask,
							Ti.Platform.osname,
							Ti.Platform.ostype,
							Ti.Platform.processorCount];
							
		var strDados = platformData.toString();
		
		txtDados.setValue(strDados);
	});
	
	return view;
	
})();
