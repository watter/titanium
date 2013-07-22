module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Home',
		backgroundColor: 'white'
	});
	
	var loader = Ti.UI.createProgressBar({
		width: '200dp',
		height: '50dp',
		min: 0,
		max: 50,
		value: 0,
		message: 'Loading...',
		color: '#888'
	});
	
	win.add(loader);
	
	loader.show();
	
	function showOptionsButton() {
		
		var btnOptions = Ti.UI.createButton({
			title: 'Options',
			height: '70dp',
			width: '110dp',
			bottom: '30dp'
		});
		
		btnOptions.addEventListener('click', function() {
			
			var dialog = Ti.UI.createOptionDialog({
				title: 'Options',
				options: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'],
				buttonNames: [ 'Ok', 'Cancelar', 'Ajuda'],
				cancel: 1
			});
			
			dialog.addEventListener('click', function(e) {
				
				Ti.API.info('Dialog - Botão ' + e.index);
				Ti.API.info('Dialog - Is button? ' + e.button);
				Ti.API.info('Dialog - Botão Cancelar? ' + e.cancel);
			});
			
			dialog.show();
		});
		
		win.add(btnOptions);
	};
	
	function loadWin() {
		
		var pickerData = [];
		
		for(var i = 0; i < 5; i++) {
			
			pickerData[i] = Ti.UI.createPickerRow({
				title: 'Item ' + i,
				index: i,
				rowColor: '#88' + i * 5 
			});
		}
		
		var picker = Ti.UI.createPicker({
			top: '-100dp',
			backgroundColor: 'gray' 
		});
		
		picker.add(pickerData);
		
		picker.addEventListener('change', function(e) {
			
			Ti.API.info('WinHome - Picker row: ' + e.row.title);
			Ti.API.info('WinHome - Picker rowColor: ' + e.row.rowColor);
			Ti.API.info('WinHome - Picker index: ' + e.row.index);
			Ti.API.info('WinHome - Picker rowIndex: ' + e.rowIndex);
			
			if(e.rowIndex == 3) {
				
				showOptionsButton();
			}
		});
		
		win.add(picker);
		picker.animate({ top: '10dp' });
	};
	
	var val = 0;
	var interval = setInterval(function() {
		
		if(val > 50) {
			clearInterval(interval);
			
			loader.hide();
			win.remove(loader);
			
			loadWin();
		}
		
		val += 10;
		
		loader.setValue(val);
	}, 1000);
	
	return win;
})();
