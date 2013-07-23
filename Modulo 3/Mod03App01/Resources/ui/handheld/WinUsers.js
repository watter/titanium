module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Users',
		backgroundColor: 'white'
	});
	
	var createRow = require('ui/common/CustomRows').usersRow;
	
	var usersData = [];
	
	usersData[0] = createRow('Fulano'),
	usersData[1] = createRow('Sicrano'),
	usersData[2] = createRow('Beltrano'),
	usersData[3] = createRow('Abelardo'),
	usersData[4] = createRow('Gumercindo'),
	usersData[5] = createRow('Astrogildo'),
	usersData[6] = createRow('Facebookson');
	
	var tvUsers = Ti.UI.createTableView({
		data: usersData
	});
	
	tvUsers.addEventListener('click', function(e) {
		
		var winUserInfo = require('ui/handheld/WinUserInfo')(e.row.userData);
		win.containingTab.open(winUserInfo);
	});
	
	win.add(tvUsers);
	
	return win;
})();
