module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Add User',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var txtUserName = Ti.UI.createTextField({
		height: '50dp',
		width: '200dp',
		keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText: 'Login...',
		top: 20
	});
	
	var txtPassword = Ti.UI.createTextField({
		height: '50dp',
		width: '200dp',
		keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText: 'Senha...',
		top: 10,
		passwordMask: true
	});
	
	var txtPasswordConfirmation = Ti.UI.createTextField({
		height: '50dp',
		width: '200dp',
		keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText: 'Confirmação de senha...',
		top: 10,
		passwordMask: true
	});
	
	var txtFirstName = Ti.UI.createTextField({
		height: '50dp',
		width: '200dp',
		keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText: 'Nome...',
		top: 10
	});
	
	var txtLastName = Ti.UI.createTextField({
		height: '50dp',
		width: '200dp',
		keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText: 'Sobrenome...',
		top: 10
	});	
	
	var btnAddUser = Ti.UI.createButton({
		title: 'Salvar',
		height: '50dp',
		width: '200dp',
		top: 20
	});
	
	btnAddUser.addEventListener('click', function() {
		
		var Cloud = require('ti.cloud');
		Cloud.Users.create({
			username: txtUserName.value,
			password: txtPassword.value,
			password_confirmation: txtPasswordConfirmation.value,
			first_name: txtFirstName.value,
			last_name: txtLastName.value
		}, function(e) {
			
			if(e.success) {
				
				var user = e.users[0];
				alert(user);
				Ti.API.info('Create User - User ID:' + user.id + ' | Session ID: ' + Cloud.sessionId);
			} else {
				
				alert('Erro: ' + e.error);
			}
		})
	});
	
	win.add(txtUserName);
	win.add(txtPassword);
	win.add(txtPasswordConfirmation);
	win.add(txtFirstName);
	win.add(txtLastName);
	win.add(btnAddUser);
	
	return win;
})();
