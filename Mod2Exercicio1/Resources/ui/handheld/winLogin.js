module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Login',
		backgroundColor: ''
	});

	var txtLogin = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Login...',
		top: '10dp'
	});

	var txtPasswd = Ti.UI.createTextField({
		height: '40dp',
		width: '120dp',
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		hintText: 'Password...',
		top: '10dp'
	});

	var btnLogin = Ti.UI.createButton({
		text: "Ok",
		height: 40,
		width: 34,
		right: 5,
		top: 5		
	});

	var btnLogout = Ti.UI.createButton({
		text: "Logout",
		height: 40,
		width: 34,
		left: 5,
		top: 5		
	});


	btnLogin.addEventListener('click', function(){
		// adiciona ao banco de dados o nome do usuário ?? 
		// ou serializa a informação ?	
	
	});

	btnLogout.addEventListener('click', function(){
		// remove o login
		
	});


	win.add(btnLogout);
	win.add(btnLogin);
	win.add(txtLogin);
	win.add(txtPasswd);

	return win;
})();
