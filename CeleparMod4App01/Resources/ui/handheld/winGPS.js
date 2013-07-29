module.exports = (function() {

	var win = Ti.UI.createWindow({
		title : '',
		backgroundColor : 'white'
	});

	if (Ti.Geolocation.locationServicesEnabled) {

		// Create a Label.
		var lblInfo = Ti.UI.createLabel({
			text : '',
			color : 'black',
			font : {
				fontSize : 30,
				fontWeight : 'bold'
			},
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE
		});

		// Add to the parent view.
		win.add(lblInfo);

		// Create a Button.
		var btnGetLocation = Ti.UI.createButton({
			title : L('btnGetLocation'),
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			top : '10dp'
		});

		// Listen for click events.
		btnGetLocation.addEventListener('click', function() {

			Ti.Geolocation.Android.manualMode = false;
								
			Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
			

			Ti.Geolocation.getCurrentPosition(function(e) {
				if (e.error) {
					
					lblInfo.setText('Erro' + e.error);
					lblInfo.setColor('red');

				} else {
					Ti.API.info(e.coords);

					lblInfo.setText('Lat: ' + e.coords.latitude + '\n' + 'Lon: ' + e.coords.longitude);
					lblInfo.setColor('green');
				};
			});
		});

		// Add to the parent view.
		win.add(btnGetLocation);

	} else {

		lblInfo.setText('Sem Serviço de GPS');
		lblInfo.setColor('red');
	};

	return win;
})();
