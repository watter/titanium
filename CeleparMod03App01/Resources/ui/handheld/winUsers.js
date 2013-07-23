module.exports= (function(){

	var win = Ti.UI.createWindow({
		title: 'Home',
		backgroundColor: 'white',
	});

	var createRow = require('ui/common/customRows').usersRow;
	
	var usersData = [];
	usersData[0]= createRow('Fulano');
	usersData[1]= createRow('Ciclano');
	usersData[2]= createRow('Beltrano');
	usersData[3]= createRow('Abelardo');
	usersData[4]= createRow('Gumercindo');
	usersData[5]= createRow('Astrogildo');
	usersData[6]= createRow('Facebookson');
	usersData[7]= createRow('Tosca');
	
	var tvUsers = Ti.UI.createTableView({
		data: usersData
	});
	
	tvUsers.addEventListener('click', function(e){
		var winUserInfo = require('ui/handheld/winUserInfo')(e.row.userData);
		win.containingTab.open(winUserInfo);
	});
	
	win.add(tvUsers)

	return win;
})();