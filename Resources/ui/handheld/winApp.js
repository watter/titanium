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
		
		var usuario = {
			nome: 'Fulano',
			telefone: '32325464'
		};
		
		Ti.API.info('WinApp - Serializando string em JSON a partir de um obj' + JSON.stringify(usuario));
		
		Ti.App.Properties.setString('usuario', JSON.stringify(usuario));

		var retornoUsuario = JSON.parse(Ti.App.Properties.getString('usuario'));
		Ti.API.info('WinApp - Retornando do \'parse\' ing em JSON a partir de um obj: ' + retornoUsuario.nome + retornoUsuario.telefone );


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
	
	
	Ti.App.addEventListener('app:NovoContato', function(e){
		Ti.API.info('Novo Contato Recebido: ' + JSON.stringify(e));
		
	});
	
	win.add(tvAppInfo);
	
	return win;
})();