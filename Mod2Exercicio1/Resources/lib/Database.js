module.exports = (function() {
	
	//Criamos um objeto que será a nossa prórpai API do banco de dados
	var api = {};
	
	//Criamos uma conexão com o banco de dados, que se não existir,
	//será criado com o nome passado por parâmetro
	var db = Ti.Database.open('notas');
	
	//Outro modo de trabalhar com banco de dados é instalaremail	//um arquivo já existente. Isso é feito pela função <isntall>
	//Que copia o arquivo do banco de dados para a sandbox do app
	//e retorna uma referência de acesso a esse banco. Se o banco
	//já estiver instalado, a função <install> então se comporta
	//como a função <open> e apenas "abre" a conexão e retorna
	//acesso ao banco
	//Exemplo:
	//var db = Ti.Database.install('dbPessoas', 'dbPessoasInstalado');
	//Nesse caso, fazemos a instalação do arquivo chamado dbPessoas,
	//que será instalado com o nome de dbPessoasInstalado.
	 

	db.execute('DROP TABLE IF EXISTS notas');

	//Uma vez com a conexão ao banco aberta, podemos manipular
	//este banco executando queries SQL pela função <execute>
	db.execute('CREATE TABLE IF NOT EXISTS notas(' + 
											'id INTEGER PRIMARY KEY, ' +
											'nome TEXT, ' + 
											'texto TEXT, '+ 
											'video TEXT, '+
											'foto TEXT)');
	
	//Fechamos a conexão após o uso para evitar pools de conexão
	db.close();
	
	api.adicionarNota = function(/* objeto */ nota) {
		
		var _db = Ti.Database.open('notas');
		
		//Usamos a mesma função <execute> para fazer um INSERT comum
		_db.execute('INSERT INTO notas (nome, texto, video, foto) VALUES (?, ?, ?, ?)', nota.nome, nota.texto, nota.video, nota.foto);
		
		var lastRow = _db.lastInsertRowId; 
		
		_db.close();
		
		//E retornamos o ID da linha inserida no banco para eventuais referências
		//Esta é uma propriedade constante do objeto do banco de dados e é atualizada
		//com o valor da última linha inserida a cada operacão.
		return lastRow
	};
	
	//Criamos uma função para listar todas as pessoas que estão salvas no banco
	api.listarNotas = function() {
		
		var _db = Ti.Database.open('notas');
		
		//Criamos um array que agrupará os usuários capturados do banco
		var notas = [];
		
		//Fazemos um SELECT no banco e guardamos o retorno em una variável 'resultado
		var resultado = _db.execute('SELECT * FROM notas');
		
		//Vamos iterar nessa variável 'resultado' para extrair cada usuário
		//A função <isValidRow()> é da API do Titanium.Database e serve para validar os dados
		while(resultado.isValidRow()) {
			
			//Fazemos um push de um objeto ao nosso vetor.
			notas.push({
				id: resultado.fieldByName('id'),
				nome: resultado.fieldByName('nome'),
				texto: resultado.fieldByName('texto'),
				video: resultado.fieldByName('video'),
				foto: resultado.fieldByName('foto')

			});
			
			//Acionamos a função <next()> também da API Ti.Database para
			//pular para a próxima entrada do 'resultado' 
			resultado.next();
		}
		
		resultado.close();
		_db.close();
		
		//Por fim, retornamos o array com os objetos dos usuários
		return notas;
	};
	
	
	api.removerNota = function(/* objeto */ nota) {
		
		var _db = Ti.Database.open('notas');
		
		//Usamos a mesma função <execute> para fazer um INSERT comum
		_db.execute('DELETE FROM notas WHERE nome=? AND texto=? AND video=? AND foto=?', nota.nome, nota.texto, nota.video, nota.foto);
	
		_db.close();
		
		return;
	};

	
	
	
	return api;
})();