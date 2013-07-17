module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'App',
		backgroundColor: 'white'
	});
	
	//No JavaScript, existem duas maneiras de declarar variáveis.
	//Usando a keyword 'var' ou não usando. Como nos exemplos abaixo.
	//A diferença é dentro de um escopo privado, onde o uso da keyword
	//var vai criar uma variável local e o não uso dela, vai criar uma
	//variável global, mesmo que a primeira ocorrência dela seja dentro
	//do escopo privado.
	//var minhaVariavel = 10;
	//minhaOutraVariavel = 10;
	
	var appData = [{ title: Ti.App.getCopyright().toString() },
					{ title: Ti.App.getDescription().toString() },
					{ title: Ti.App.getGuid().toString() },
					{ title: Ti.App.getId().toString() },
					{ title: Ti.App.getName().toString(), tipo: 'nome' },
					{ title: Ti.App.getPublisher().toString() },
					{ title: Ti.App.getUrl().toString() },
					{ title: Ti.App.getVersion().toString(), tipo: 'versao' }];
	
	var tvAppInfo = Ti.UI.createTableView({
		data: appData
	});
	
	tvAppInfo.addEventListener('click', function(e) {
		
		if(typeof e.source.tipo !== 'undefined') {
			
			if(e.source.tipo === 'nome') {
				
				if(!Ti.App.Properties.getString('nomeApp')) {
					
					Ti.App.Properties.setString('nomeApp', e.source.tipo);
				} else {
					
					alert('Nome já foi serializado!');
				}
			} else if(e.source.tipo === 'versao') {
				
				if(!Ti.App.Properties.getString('versao')) {
					
					Ti.App.Properties.setString('versao', e.source.tipo);
				} else {
					
					alert('Versão já serializada!');
				}
 			} 
		}
	});
	
	win.add(tvAppInfo);
	
	return win;
})();
