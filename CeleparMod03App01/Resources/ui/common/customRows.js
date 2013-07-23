exports.usersRow = function(userNome){
	
	var row = Ti.UI.createTableViewRow({
		height: '60dp'
	});
	
	var imgUser  = Ti.UI.createImageView({
		image: 'http://png.findicons.com/files/icons/61/dragon_soft/128/user.png',
		height: '50dp',
		width: '50dp',
		left: '10dp'
	});

	var lblNome  = Ti.UI.createLabel({
		text: userNome,
		height: '20dp',
		width: '200dp',
		left: '65dp',
		top: '10dp'
	});

	var lblTelefone  = Ti.UI.createLabel({
		text: '3333-6969',
		height: '20dp',
		width: '200dp',
		left: '65dp',
		top: '35dp'
	});
	
	row.add(imgUser);
	row.add(lblNome);
	row.add(lblTelefone);
	
	row.userData = {
		nome: userNome,
		telefone: lblTelefone.getText(),
		foto: imgUser.getImage()
	};
	
	return row;
};
