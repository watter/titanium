module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Database',
		backgroundColor: 'white'
	});
	
	var btnInserir = Ti.UI.createButton({
		title: 'Inserir no DB',
		height: '60dp',
		width: '120dp',
		top: '20dp'
	});
	
	btnInserir.addEventListener('click', function() {
		
		var db = require('lib/Database');
		
		var ultimoInsert;
		
		ultimoInsert = db.adicionarPessoa({
			nome: 'Fulano',
			email: 'fulano@gmail.com'
		});
		Ti.API.info('Database - Adicionamos Fulano com o ID: ' + ultimoInsert);
		
		var listaUsuarios = db.listarPessoas();
		
		for(var i in listaUsuarios) {
			
			Ti.API.info('Database - Listando usuários no banco. | Nome: ' + 
			listaUsuarios[i].nome + ' | Email: ' + listaUsuarios[i].email);
		}
	});
	
	win.add(btnInserir);
	return win;
})();
