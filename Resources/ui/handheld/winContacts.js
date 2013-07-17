module.exports = (function() {

	var win = Ti.UI.createWindow({
		title: 'Contatos',
		backgroundColor: 'white',
		layout: 'vertical'
	});

	var txtNome = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Nome...',
		top: '10dp'
	});

	var txtSobrenome = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Sobrenome...',
		top: '10dp'
	});

	var txtTelefone = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
		hintText: 'Telefone...',
		top: '10dp'
	});

	var btnAdd = Ti.UI.createButton({
		title: 'Adicionar',
		height: '40dp',
		width: '100dp',
		top: '10dp'
	});
	
	btnAdd.addEventListener('click', function(){
	
		if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
				var newContact = {
					firstName: txtNome.value,
					lastName: txtSobrenome.value,
					phone: {
						mobile: [txtTelefone.value]
					}
				};
				
				var novoContato = Ti.Contacts.createPerson(newContact);

					// Usamos o Módulo Ti.App para atirar (e escutar)
					// por eventos customizados de qualquer lugar do app
					// para qualquer lugar do app
					// Por definição de boas práticas adicionamos o prefixo 'app:' ao
					// nome dos eventos customizados
					Ti.App.fireEvent('app:NovoContato',{
						firstName: txtNome.value,
						lastName: txtSobrenome.value,
						phone: {
							mobile: [txtTelefone.value]
						}
					});
	
				Ti.API.info('Contato adicionado!');
				alert(novoContato);
			
		} else  if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){ 
		
				Ti.Contacts.requestAuthorization(function(e){
				alert(e);
				
				if (e.success) {
					var novoContato = Ti.Contacts.createPerson({
						firstName: txtNome.value,
						lastName: txtSobrenome.value,
						phone: {
							mobile: [txtTelefone.value]
						}
					});
				
					Ti.API.info('Contato adicionado!');
					alert(novoContato);
				}
			});
		}
		
	});

	win.add(txtNome);
	win.add(txtSobrenome);
	win.add(txtTelefone);
	win.add(btnAdd);
	
	return win;
})();
