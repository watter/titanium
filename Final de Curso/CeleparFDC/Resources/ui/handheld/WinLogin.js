module.exports = (function() {

	var win = Ti.UI.createWindow({
		title : 'Login',
		backgroundColor : 'white',
		layout : 'vertical'
	});

	var txtUserName = Ti.UI.createTextField({
		height : '50dp',
		width : '200dp',
		keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText : 'Login...',
		top : 20
	});

	var txtPassword = Ti.UI.createTextField({
		height : '50dp',
		width : '200dp',
		keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
		hintText : 'Senha...',
		top : 10,
		passwordMask : true
	});

	var btnLogin = Ti.UI.createButton({
		title : 'Login',
		height : '50dp',
		width : '200dp',
		top : 20
	});

	var btnRegister = Ti.UI.createButton({
		title : 'Cadastrar',
		height : '50dp',
		width : '200dp',
		top : 10
	});

	btnLogin.addEventListener('click', function() {

		$.cloud.Users.login({
			login : txtUserName.value,
			password : txtPassword.value
		}, function(e) {

			if (e.success) {

				var User = require('controllers/User');
				var thisUser = new User({
					id : e.users[0].id,
					sessionID : $.cloud.sessionId,
					name : e.users[0].name
				});

				$.session.id = $.cloud.sessionId;
				$.session.user = thisUser;

				Ti.API.info('Login User - Success! User ID:' + $.session.user.getID());

				$.session.logged = true;
				Ti.App.Properties.setBool('userLogged', $.session.logged);

				new $.tabs().open();
			} else {

				Ti.API.error('Login User - failed: ' + e.message);
			}
		});
	});

	btnRegister.addEventListener('click', function() {

		var winAddUser = require('ui/handheld/WinAddUser');
		winAddUser.open({
			modal : true
		});
		//win.containingTab.open(winAddUser);
	});

	var btnlogout = Ti.UI.createButton({
		title : 'Sair do programa',
		height : '50dp',
		width : '200dp',
		color : 'black',
		top : 20
	});

	btnlogout.addEventListener('click', function() {
		Ti.App.Properties.setBool('userLogged', false);
		alert('Desconectado!');

	});

	if (Ti.App.Properties.getBool('userLogged') == false) {
		win.add(txtUserName);
		win.add(txtPassword);
		win.add(btnLogin);
		win.add(btnRegister);
	} else {
		win.add(btnlogout);
	}

	return win;

})();
