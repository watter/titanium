module.exports= (function(){
	
		var win = Ti.UI.createWindow({
		title: 'Device',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var lblAcelerometro = Ti.UI.createLabel({
		text: 'x:0\ny:0\nz:0',
		height: '50dp',
		width: Ti.UI.SIZE,
		top: '25dp'
	});

	var btnStart = Ti.UI.createButton({
		title: 'Iniciar AC',
		height: '50dp',
		width: '70dp',
		left: '50dp',
		top: '10dp'
	});
	
	var btnStop = Ti.UI.createButton({
		title: 'Parar AC',
		height: '50dp',
		width: '70dp',
		right: '50dp',
		top: '-70dp'
	});
	
	
	btnStart.addEventListener('click', function(){
				
		Ti.Android.currentActivity.addEventListener('pause', function() {
			
			Ti.Accelerometer.removeEventListener('update');
			
		});
		
		Ti.Android.currentActivity.addEventListener('resume', function(){

			Ti.Accelerometer.addEventListener('update', function(e){
				lblAcelerometro.setText('x: ' + e.x + '\n' +
										'y: ' + e.y + '\n' +
										'z: ' + e.z + '\n');
			});

		});
		
		Ti.Accelerometer.addEventListener('update', function(e){
		lblAcelerometro.setText('x: ' + e.x + '\n' +
								'y: ' + e.y + '\n' +
								'z: ' + e.z + '\n');
		});

	});

	btnStop.addEventListener('click', function(){
	
			Ti.Accelerometer.removeEventListener('update');
	});
		

	Ti.Gesture.addEventListener('shake', function () {
		alert('você balançou o dispositivo');
	});

	Ti.Gesture.addEventListener('orientationchange', function (e) {

		if(e.orientation == Ti.UI.PORTRAIT) {
			
			alert ('Orientacao Alterada:  Portrait');
			
		} else if(e.orientation == Ti.UI.LANDSCAPE_LEFT) {
			
			alert ('Orientacao Alterada: Landscape Left');
			
		} else if(e.orientation == Ti.UI.LANDSCAPE_RIGHT) {
			
			alert ('Orientacao Alterada: Landscape Right');
			
		}
	});
	
	var btnCamera = Ti.UI.createButton({
		title: 'Camera',
		height: '60dp',
		width: '110dp',
		top: '20dp'
	});
	
	btnCamera.addEventListener('click', function(){
		
		function successCalback(e){
			var imgFoto = Ti.UI.createImageView({
				image: e.media,
				zIndex: 0
			});
			win.add(imgFoto);
			
			// setBackgroundImage só recebe arquivo e e.media é blob
			//win.setBackgroundImage(e.media);
		};
		
		function cancelCalback(){
			
		};

		function errorCalback(e){
			if (e.code == Ti.Media.NO_CAMERA) {
				alert('Dispositivo não possui Camera');
			} else {
				alert('Erro: ' + e.code);
			}
		};

		Ti.Media.showCamera({
			success: successCalback,
			cancel: cancelCalback,
			error: errorCalback,
			saveToPhotoGallery: true
		});
		
	});

		
	
	win.add(lblAcelerometro);
	win.add(btnStart);
	win.add(btnStop);
	win.add(btnCamera);


	return win;
})();