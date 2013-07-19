	var btnCamera = Ti.UI.createButton({
		title: 'Camera...',
		height: '60dp',
		width: '110dp',
		top: '20dp'
	});
	
	btnCamera.addEventListener('click', function() {
		
		function successCallback(e) {
			
			var imgFoto = Ti.UI.createImageView({
				image: img,
				zIndex: 0
			});
			
			win.add(imgFoto);
			
			var img = e.media;
			
			var nomeDoArquivo = Ti.Filesystem.applicationDataDirectory + 
				'/camera_foto' + new Date().getTime() + '.png';
				
			var arquivo = Ti.Filesystem.getFile(nomeDoArquivo);
		
			if (arquivo.write(img)) {
				
				Ti.API.info('Imagem Salva Com Sucesso!' + nomeDoArquivo );
			}
		};
		
		function cancelCallback() {
			
		};
		
		function errorCallback(e) {
			
			if(e.code == Ti.Media.NO_CAMERA) {
				
				alert('Dispositivo não possui câmera');
			} else {
				
				alert('Erro: ' + e.code);
			}
			
		};
		
		Ti.Media.showCamera({
			success: successCallback,
			cancel: cancelCallback,
			error: errorCallback,
			saveToPhotoGallery: true
		});
	});
