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
		
		var userName = e.row.userData.nome;
		
		//Simular texto já existente no clipboard
		Ti.UI.Clipboard.setText('Web content strategy experts share their top tips for how to increase traffic to your Web or ecommerce site. http://www.cio.com/article/736866/16_Ways_to_Improve_Your_Content_Marketing_Strategy_');
		
		//Verificando se existe texto salvo no clipboard
		if(Ti.UI.Clipboard.hasText()) {
			
			var cbText = Ti.UI.Clipboard.getText();
			
			var dlg = Ti.UI.createAlertDialog({
				message: 'Existem dados no clipboard. Deseja substituir? Dados:' + cbText,
				buttonNames: ['Ok', 'Cancelar'],
				cancel: 1,
				title: 'Clipboard'
			});
			
			dlg.addEventListener('click', function(e) {
				
				if(!e.cancel) {
					
					Ti.UI.Clipboard.clearText();
					Ti.UI.Clipboard.setText(userName);
				}
			});
			
			dlg.show();
			
			/*
			//Para limpar texto do clipboard
			Ti.UI.Clipboard.clearText();
			
			//E setar um novo texto
			Ti.UI.Clipboard.setText(userName);
			*/
		} else {
			
			Ti.UI.Clipboard.setText(userName);
		}
		
		var winUserInfo = require('ui/handheld/WinUserInfo')(e.row.userData);
		win.containingTab.open(winUserInfo);
	});
	
	win.add(tvUsers);
	
	return win;
})();
