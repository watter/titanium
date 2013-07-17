module.exports= (function(){

	var win = Ti.UI.createWindow({
		title: 'App',
		backgroundColor: 'white',
	});

	// é importante lembrar de colocar o var na declaração da variável
	// sem o var inicial ela *funciona*, 
	// porém é criada uma variável GLOBAL

	var appData = [ { title: Ti.App.getCopyright().toString()},
					{ title: Ti.App.getDescription().toString()},
					{ title: Ti.App.getGuid().toString()},
					{ title: Ti.App.getId().toString()},
					{ title: Ti.App.getName().toString(), tipo: 'nome'},
					{ title: Ti.App.getPublisher().toString()},
					{ title: Ti.App.getUrl().toString()},
					{ title: Ti.App.getVersion().toString(), tipo: 'versao'}];
					
	var tvAppInfo = Ti.UI.createTableView({
		data: appData
	});	
	
	tvAppInfo.addEventListener('click', function(e){
		if (typeof e.source.tipo !== 'undefined') {
			
			if (e.source.tipo === 'nome') {
				
				if(!Ti.App.Properties.getString('nomeApp')) {
					
					Ti.App.Properties.setString('nomeApp', e.source.tipo);
				} else {
					alert('Nome já foi serializado');
				} 
				
			} else if (e.source.tipo === 'versao') {

				if(!Ti.App.Properties.getString('versao')) {
					
					Ti.App.Properties.setString('versao', e.source.tipo);
				} else {
					alert('Versao já foi serializada!');
				}
			} 
		}
		
	});
	
	
	win.add(tvAppInfo);
	
	return win;
})();