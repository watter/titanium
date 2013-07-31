module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: '',
		backgroundColor: 'white'
	});
	
	//Verificamos se os sistemas de geolocalização estão ativados
	if(Ti.Geolocation.locationServicesEnabled) {
		
		var lblInfo = Ti.UI.createLabel({
			height: Ti.UI.SIZE,
			width: Ti.UI.SIZE,
			font: { fontSize: 20, fontWeight: 'bold' },
			color: 'black',
			text: ''
		});
		
		win.add(lblInfo);
		
		var btnGetLocation = Ti.UI.createButton({
			title: L('btnGetLocation'),
			height: '40dp',
			width: Ti.UI.SIZE,
			top: '10dp'
		});
		
		Ti.Geolocation.Android.manualMode = false;
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
		
		btnGetLocation.addEventListener('click', function() {
			
			Ti.Geolocation.getCurrentPosition(function(e) {
				
				if(e.error) {
					
					lblInfo.setText('Erro: ' + e.error);
					lblInfo.setColor('red');
				} else {
					
					Ti.API.info('Lat: ' + e.coords.latitude + ' Lon: ' + e.coords.longitude);
					
					lblInfo.setText('Lat: ' + e.coords.latitude + '\n' +
									'Lon: ' + e.coords.longitude);
					lblInfo.setColor('black');
				}
			});
		});
		
		var btnAutoLocation = Ti.UI.createButton({
			title: L('btnAutoLocation'),
			height: '40dp',
			width: Ti.UI.SIZE,
			top: '60dp'
		});
		
		btnAutoLocation.addEventListener('click', function() {
			
			
			Ti.Geolocation.addEventListener('location', function(e) {
				
				Ti.API.info('Adicionando listener de location');
				if(!e.error) {
					
					lblInfo.setText('Lat: ' + e.coords.latitude + '\n' +
									'Lon:' + e.coords.longitude);
									
					lblInfo.setColor('black');
				}
			});
			
			var activity = Ti.Android.currentActivity;
			activity.addEventListener('pause', function() {
				
				Ti.API.info('Activity pausada');
				Ti.Geolocation.removeEventListener('location');
			});
			
			//activity.addEventListener('destroy', function(e) {});
			
			activity.addEventListener('resume', function() {
				
				Ti.API.info('Activity resumida');
				Ti.Geolocation.addEventListener('location', function(e) {
					
					if(!e.error) {
					
						lblInfo.setText('Lat: ' + e.coords.latitude + '\n' +
										'Lon:' + e.coords.longitude);
										
						lblInfo.setColor('black');
					}
				});
			});
		});
		
		win.add(btnAutoLocation);
		win.add(btnGetLocation);
		
	} else {
		
		var lblSemServico = Ti.UI.createLabel({
			height: '70dp',
			width: '200dp',
			font: { fontSize: 30, fontWeight: 'bold' },
			color: 'red',
			text: 'Sem serviço de GPS.'
		});
		
		win.add(lblSemServico);
	}
	
	return win;
	
})();

