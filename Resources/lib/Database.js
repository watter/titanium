module.exports= (function(){

	// Criamos um objeto que será nossa própria API do banco de dados
	var api= {};


	// Criamos uma conexão com o BD que, se não existir, será criado com o nome passado por parâmetro
	var db = Ti.Database.open('pessoas');
	
	db.execute('CREATE TABLE IF NOT EXISTS usuarios(' +
				'id INTEGER PRIMARY KEY, ' +
				'nome TEXT, ' + 
				'email TEXT)');
				
	// Fechamos a conexão após o uso para evitar pools de conexão
	db.close();
	
	api.adicionarPessoa = function( /*objeto */ pessoa ){

		var _db = Ti.Database.open('pessoas');
		 
		// usamos a mesma função <execute> para fazer um INSERT comum
		_db.execute('INSERT INTO usuarios (nome, email) VALUES (?,?)', pessoa.nome, pessoa.email);
		
		
		lastRow = _db.lastInsertRowId;
		
		_db.close();
		
		// E retornamos o ID da linha inserida no banco para eventuais referências
		// Esta é uma propriedade constante do objeto do banco de dados e é atualizada 
		// com o valor da última linha inserida a cada operação
		return lastRow;
	}


	// 
	api.listarPessoas = function (){
		
		var pessoas = [];
		
		var _db = Ti.Database.open('pessoas');
		
		var resultado = _db.execute('SELECT * FROM usuarios');
		
		while(resultado.isValidRow()){
			pessoas.push({
				id: resultado.fieldByName('id'),
				nome: resultado.fieldByName('nome'),
				email: resultado.fieldByName('email')
			});
			
			resultado.next();
		}
		
		resultado.close();

		_db.close();
	
		return pessoas;
	}; 
	
	return api;
})();