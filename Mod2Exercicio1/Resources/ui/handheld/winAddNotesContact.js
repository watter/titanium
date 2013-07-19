module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Notas do Contato',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var txtNome = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Contato',
		top: '10dp'
	});
	
	var txtNoteTxt = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Nota Texto...',
		top: '10dp'
	});

	var txtNoteVideo = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Link Vídeo...',
		top: '10dp'
	});

	// no onclick do adicionar foto
	Ti.include('/ui/handheld/Camera.js')

	var btnAdd = Ti.UI.createButton({
		title: 'Adicionar',
		height: '40dp',
		width: '100dp',
		top: '10dp'
	});
	
	btnAdd.addEventListener('click', function() {

	// adiciona as notas ao contato no banco de dados
	
		var db = require('lib/Database');
		
		// trocar pelo nome do arquivo da foto
		var txtFoto = 'uhum.png';
		
		var nota = {
		 	nome: txtNome.value,
			texto: txtNoteTxt.value,
			video: txtNoteVideo.value,
			foto: txtFoto	
		};
	
		var addedNote = db.adicionarNota(nota);
		
		Ti.API.info('Inclui nota para :' + addedNote.nome + 
				'texto' + addedNote.texto + 
				'video:' + addedNote.video + 
				'foto: ' + addedNote.foto );
	
		
	});	
	
	win.add(txtNome);
	win.add(txtNoteTxt);
	win.add(txtNoteVideo);
	win.add(btnCamera);
	win.add(btnAdd);
	
	return win;
	
})();
