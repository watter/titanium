module.exports = function(user) {
	
	var win = Ti.UI.createWindow({
		title: user.nome,
		backgroundColor: 'white'
	});
	
	var btnEmail = Ti.UI.createButton({
		title: 'M',
		width: '38dp',
		height: '38dp',
		top: '10dp',
		right: '10dp'
	});
	
	btnEmail.addEventListener('click', function() {
		
		/* Usando intent para enviar mensagem como SMS
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_SEND,
			type: 'text/plain'
		});
		
		intent.putExtra(Ti.Android.EXTRA_SUBJECT, 'Assunto');
		intent.putExtra(Ti.Android.EXTRA_TEXT, 'Início de mensagem');
		
		Ti.Android.currentActivity.startActivity(intent);
		*/
		
		//Enviar email usando app padrao de email do Android
		//Para funcionar corretamente, é necessário
		//ter a conta de email cadastrado no app (Email) antes
		var dlgEmail = Ti.UI.createEmailDialog({
			subject: 'Contato',
			messageBody: 'Início de mensagem',
			html: false
		});
		
		dlgEmail.addEventListener('complete', function(e) {
			
			if(e.result == Ti.UI.EmailDialog.SENT) {
				
				alert('Email enviado com sucesso!');
				
				var logData = Ti.App.Properties.getList('logList') || [];
				
				logData.push({ title: 'Enviado: ' + new Data() });
				
				Ti.App.Properties.setList('logList', logData);
				
				refreshLogTable();
			}
		});
		
		dlgEmail.open();
	});
	
	var lblNome = Ti.UI.createLabel({
		text: user.nome,
		height: '30dp',
		width: '200dp',
		font: { fontSize: '20', fontWeight: 'bold' },
		top: '10dp',
		left: '10dp'
	});
	
	var logData = Ti.App.Properties.getList('logList') || [];
	
	var tvLog = Ti.UI.createTableView({
		data: logData,
		height: Ti.Platform.displayCaps.platformHeight - 100,
		top: '50dp'
	});
	
	function refreshLogTable() {
		
		var newData = Ti.App.Properties.getList('logList') || [];
		
		tvLog.setData([]);
		tvLog.setData(newData);
	};
	
	win.add(btnEmail);
	win.add(lblNome);
	win.add(tvLog);
	
	return win;
};
