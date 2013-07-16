module.exports = (function () {
	
	var win = Ti.UI.createWindow({
		title: 'Device',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var lblAcelerometro = Ti.UI.createLabel({
		text: 'x: 0\ny: 0\nz: 0',
		height: '50dp',
		width: Ti.UI.SIZE,
		top: '25dp'
	});
	
	var btnStart = Ti.UI.createButton({
		title: 'Iniciar AC',
		height: '50dp',
		width: '70dp',
		top: '10dp',
		left: '50dp'
	});
	
	var btnStop = Ti.UI.createButton({
		title: 'Parar AC',
		height: '50dp',
		width: '70dp',
		top: '-70dp',
		right: '50dp'
	});
	
	btnStart.addEventListener('click', function() {
		
		//O código abaixo só precisa ser definido uma vez.
		//Ou seja, não precisa necessariamente estar dentro do eventListener
		//de um botão, como neste exemplo. Aqui fizemos nesse modo apenas para
		//exemplificar melhor.
		
		//Adicionamos um eventListener de 'pause' à nossa activity para sabermos
		//quando podemos desligar o acelerometro
		Ti.Android.currentActivity.addEventListener('pause', function() {
			
			//quando a activity é pausada, removemos o eventListener de 'change'
			//do acelerometro, para desligarmos o serviço
			Ti.Accelerometer.removeEventListener('update');
		});
		
		//Adicionamos um eventListener de 'resume' à nossa activity para sabermos
		//quando podemos reativar o acelerometro
		Ti.Android.currentActivity.addEventListener('resume', function() {
			
			//quando a acitivity é resumida, adicionamos o eventListener de 'update'
			//novamente, para ligarmos o acelerometro
			Ti.Accelerometer.addEventListener('update', function(e) {
				
				//A cada atualização de valor do acelerometro, atualizamos
				//a nossa label para informar os novos dados.
				lblAcelerometro.setText('x: ' + e.x + '\n' +
										'y: ' + e.y + '\n' + 
										'z: ' + e.z);
			});	
		});
		
		//Em caso da necessidade de ativar e desativar o acelerometro
		//dentro do app. Ou seja, independente da acitivty estar ativa ou não,
		//basta adicionarmos ou removermos o eventListener de 'update' do acelerometro
		//Neste caso, como estamos no botão de "Ligar", adicionamos o eventListener
		Ti.Accelerometer.addEventListener('update', function(e) {
			lblAcelerometro.setText('x: ' + e.x + '\n' +
									'y: ' + e.y + '\n' + 
									'z: ' + e.z);
		});
	});
	
	btnStop.addEventListener('click', function() {
		
		//Para desligarmos o acelerometro independente da activity estar ativada ou não
		//Simplesmente removemos o eventListener de 'update', para pararmos de 
		//escutar por atualizações do acelerometro.
		Ti.Accelerometer.removeEventListener('update');
	});
	
	//Podemos identificar eventos de gestos, como "chacoalhos"
	Ti.Gesture.addEventListener('shake', function() {
		
		alert('Você balançou o device!');
	});
	
	//E podemos identificar alterações na orientação do device
	//Ou seja: tela landscape ou portrait
	Ti.Gesture.addEventListener('orientationchange', function(e) {
		
		if(e.orientation == Ti.UI.PORTRAIT) {
			
			alert('Orientação alterada: Landscape Portrait');
		} else if(e.orientation == Ti.UI.LANDSCAPE_LEFT) {
			
			alert('Orientação alterada: Landscape Left');
		} else if(e.orientation == Ti.UI.LANDSCAPE_RIGHT) {
			
			alert('Orientação alterada: Landscape Right');
		}
	});
	
	win.add(lblAcelerometro);
	win.add(btnStart);
	win.add(btnStop);
	
	return win;
	
})();
