module.exports = function(parentWin) {
	
	var G = require('ui/common/Globals');
	
	var view = Ti.UI.createView({
		backgroundColor: 'white'
	});
	
	var tvRows = [
	{
		title: 'Log: Info',
		hasChild: false
	},
	{
		title: 'Log: Warning'
	},
	{
		title: 'Log: Error'
	},
	{
		title: 'Config.',
		hasChild: true
	},
	{
		title: 'Append row'
	}];
	
	var customRow = Ti.UI.createTableViewRow();
	customRow.setLayout('horizontal');
	
	var imgFoto = Ti.UI.createImageView({
		image: 'http://cdn.androidpolice.com/wp-content/uploads/2011/12/android-logo.png',
		height: 40,
		width: 40,
		left: 5
	});
	
	var lblTexto = Ti.UI.createLabel({
		text: 'djkhf ashdfj ahsfkjh fkjsadhf jsdahf kjashfkja jk',
		height: 40,
		width: 200,
		left: 5
	});
	
	var btnOk = Ti.UI.createButton({
		title: 'Ok',
		height: 35,
		width: 35,
		left: 15
	});
	
	customRow.add(imgFoto);
	customRow.add(lblTexto);
	customRow.add(btnOk);
	
	var tvTable = Ti.UI.createTableView({
		data: tvRows
	});
	
	tvTable.addEventListener('click', function(e) {
		
		if(e.index == 0) {
			
			//Ti.API.info('Mensagem de info!');
			G.info('Mensagem de info');
		} else if(e.index == 1) {
			
			//Ti.API.warn('Mensagem de alerta!');
			G.warn('Mensagem de alerta!');
			G.warn2('Mensagem de alerta2');
		} else if(e.index == 2) {
			
			//Ti.API.error('Mensagem de erro!');
			G.error('Mensagem de erro!');
		} else if(e.index == 3) {
			
			var novaWin = Ti.UI.createWindow({
				title: 'Nova Win',
				backgroundColor: 'brown'
			});
			
			//novaWin.open({ modal: true });
			parentWin.containingTab.open(novaWin);
		} else if(e.index == 4) {
			
			//Como mudar todas as linhas da tableView
			/*var newRows = tvRows;
			newRows.push(customRow);
			tvTable.setData(customRow);*/
			
			//Como adicionar uma nova linha à tableView
			tvTable.appendRow(customRow);
		}
	});
	
	view.add(tvTable);
	
	return view;
	
};
