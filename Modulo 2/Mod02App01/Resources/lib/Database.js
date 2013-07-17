module.exports = (function() {
	
	//Criamos um objeto que será a nossa prórpai API do banco de dados
	var api = {};
	
	//Criamos uma conexão com o banco de dados, que se não existir,
	//será criado com o nome passado por parâmetro
	var db = Ti.Database.open('pessoas');
	
	//Outro modo de trabalhar com banco de dados é instalar
	//um arquivo já existente. Isso é feito pela função <isntall>
	//Que copia o arquivo do banco de dados para a sandbox do app
	//e retorna uma referência de acesso a esse banco. Se o banco
	//já estiver instalado, a função <install> então se comporta
	//como a função <open> e apenas "abre" a conexão e retorna
	//acesso ao banco
	//Exemplo:
	//var db = Ti.Database.install('dbPessoas', 'dbPessoasInstalado');
	//Nesse caso, fazemos a instalação do arquivo chamado dbPessoas,
	//que será instalado com o nome de dbPessoasInstalado. 

	//Uma vez com a conexão ao banco aberta, podemos manipular
	//este banco executando queries SQL pela função <execute>
	db.execute('CREATE TABLE IF NOT EXISTS usuarios(' + 
											'id INTEGER PRIMARY KEY, ' +
											'nome TEXT, ' + 
											'email TEXT)');
	
	//Fechamos a conexão após o uso para evitar pools de conexão
	db.close();
	
	api.adicionarPessoa = function(/* objeto */ pessoa) {
		
		var _db = Ti.Database.open('pessoas');
		
		//Usamos a mesma função <execute> para fazer um INSERT comum
		_db.execute('INSERT INTO usuarios (nome, email) VALUES (?, ?)', pessoa.nome, pessoa.email);
		
		var lastRow = _db.lastInsertRowId; 
		
		_db.close();
		
		//E retornamos o ID da linha inserida no banco para eventuais referências
		//Esta é uma propriedade constante do objeto do banco de dados e é atualizada
		//com o valor da última linha inserida a cada operacão.
		return lastRow
	};
	
	//Criamos uma função para listar todas as pessoas que estão salvas no banco
	api.listarPessoas = function() {
		
		//Criamos um array que agrupará os usuários capturados do banco
		var pessoas = [];
		
		//Fazemos um SELECT no banco e guardamos o retorno em una variável 'resultado
		var resultado = db.execute('SELECT * FROM usuarios');
		
		//Vamos iterar nessa variável 'resultado' para extrair cada usuário
		//A função <isValidRow()> é da API do Titanium.Database e serve para validar os dados
		while(resultado.isValidRow()) {
			
			//Fazemos um push de um objeto ao nosso vetor.
			pessoas.push({
				id: resultado.fieldByName('id'),
				nome: resultado.fieldByName('nome'),
				email: resultado.fieldByName('email')
			});
			
			//Acionamos a função <next()> também da API Ti.Database para
			//pular para a próxima entrada do 'resultado' 
			resultado.next();
		}
		
		resultado.close();
		
		//Por fim, retornamos o array com os objetos dos usuários
		return pessoas;
	};
	
	return api;
})();