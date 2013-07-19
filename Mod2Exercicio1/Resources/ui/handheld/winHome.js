/*
 * Modulo 2
Exercicio 1:
Criar uma projeto tab based application, com um número N de telas, que na primeira execução,
peça o nome do usuário e o salve.

O aplicativo deve ser um gerenciador de notas para contatos, Isto é:

-Deve mostrar uma lista de contatos
-O usuário poderá selecionar um contato para iniciar o processo de adicionar notas
-Dentro de um contato, o usuário poderá ler e adicionar notas em texto, fotos e streams de vídeos do youtube.

O aplicativo deverá utilizar:  Banco de dados, serialização de dados, sistema de arquivos, media, contatos e suporte à duas orientações em ao menos uma tela.
 * 
 */
module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Home',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	
	var btnLogin = Ti.UI.createButton({
		text: "Login",
		height: 40,
		width: 70,
		left: 5,
		top: 5		
	});

	btnLogin.addEventListener('click', function(){
		loginWin = require('ui/handheld/winLogin');
	 	loginWin.open({ modal: true });
	});	
	

	var lblUser = Ti.UI.createLabel({
		text: 'uhaa',
		height: 40,
		width: 34,
		top: -10,
		right: 5
	});
	
	// get User logged in and set lblUser to that Label



	// Crie a lista de contatos do dispositivo
	
	// pegue todos os contatos de pessoa do dispositivo
	var lstContatos = Ti.Contacts.getAllPeople();
		
	// table view com lista de contatos
	var tvContatos = Ti.UI.createTableView();
	
	// array de contatos
	var contactRows = [];
	
	for (var i in lstContatos){
	
		var row = Ti.UI.createTableViewRow();
		
		var label = Ti.UI.createLabel({
		  color: '#900',
//		  font: { fontSize:48 },
		  text: lstContatos[i].fullName,
		  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 0,
		  width: Ti.UI.SIZE, 
		  height: 40
		});
		
		// adiciona label
		row.add(label);
		
		// adiciono a linha na variável que contém as linhas da tabela 
		contactRows.push(row);
	
	}
	
	tvContatos.setData(contactRows);


	tvContatos.addEventListener('click', function(e) {
		// abre a janela de mostrar nota
	});
	

	win.add(btnLogin);
	win.add(lblUser);
	win.add(tvContatos);
	
	return win;
})();
