module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Twitter',
		backgroundColor: 'white'
	});
	
	//Blob de arquivo para upload
	var file;
	
	function downloadImage(imageUrl) {
		
		var xhr = Ti.Network.createHTTPClient();
		
		xhr.setTimeout(10000);
		
		xhr.open('GET', imageUrl);
		
		xhr.onload = function(e) {
			
			var arquivo_pdf = this.resultData;
			alert('Arquivo baixado com sucesso! ' + arquivo_pdf);
		};
		
		xhr.ondatastream = function(e) {
			
			progress.setValue(e.progress);	
			Ti.API.info('Progress: ' + e.progress);
		};
		
		xhr.onerror = function(e) {
			
		};
				
		xhr.send();
		
		/* para upload de arquivos, é necessário enviar
		 * um objeto de parâmetro na função send() com o blob
		 * do arquivo a ser enviado para o servidor.
		 * xhr.send({
		 * 	file: file,
		 * 	user: user_hash,
		 * 	password: user_pass
		 * });
		 */
	};
	
	var progress = Ti.UI.createProgressBar({
		top: '5dp',
		width: Ti.Platform.displayCaps.platformWidth,
		height: '20dp',
		value: 0,
		min: 0,
		max: 1
	});
	
	var btnDownload = Ti.UI.createButton({
		title: 'Download Image',
		top: '25dp',
		width: '50dp',
		height: '40dp'
	});
	
	btnDownload.addEventListener('click', function() {
		
		var imageUrl = 'http://www.appcelerator.com/assets/The_iPad_App_Wave.pdf';
		downloadImage(imageUrl);
	});
	
	win.add(progress);
	win.add(btnDownload);
	
	return win;
})();
