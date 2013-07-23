module.exports = function  (user) {
  
  	var win = Ti.UI.createWindow({
		title: user.nome,
		backgroundColor: '#eba'
	});
	
	
	// Create a Button.
	var btnEmail = Ti.UI.createButton({
		title : 'Mail',
		height : '38dp',
		width : '38dp',
		top : '10dp',
		right : '10dp'
	});
	
	// Listen for click events.
	btnEmail.addEventListener('click', function() {
		
		/* utilizando o intent do android ele chama outra aplicação
		 * 
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_SEND,
			type: 'text/plain'
		});
		
		intent.putExtra(Ti.Android.EXTRA_SUBJECT, 'Assunto');
		
		intent.putExtra(Ti.Android.EXTRA_TEXT, 'Mensagem');
		
		Ti.Android.currentActivity.startActivity(intent);
		
		*/
		
		
		var dlgEmail = Ti.UI.createEmailDialog({
			subject: 'Contato',
			messageBody: 'blah'
		});
		
		dlgEmail.addEventListener('complete', function(e){
			
			if (e.result == Ti.UI.EmailDialog.SENT) {
				
				alert('email enviado com sucesso');
				
				var logData = Ti.App.Properties.getList('logList') || [] ;
				
				logData.push({title: 'Enviado:' +  new Data() });
				
				Ti.App.Properties.setList('logList', logData);
				
				refreshLogTable();	
				
			};
		});
		
		
		dlgEmail.open();
		
		
		
	});
	
	
	// Create a Label.
	var lblNome = Ti.UI.createLabel({
		text : user.nome,
		color : '#textColor',
		font : {fontSize:'20', fontWeight: 'bold'},
		height : '30dp',
		width : '200dp',
		top : '10dp',
		left : '10dp',
		textAlign : 'center'
	});
	
	var logData = Ti.App.Properties.getList('logList') || [];
	
	
	// Create a TableView.
	var tvLog = Ti.UI.createTableView({
		data: logData,
		height: Ti.Platform.displayCaps.platformHeight - '50dp',  
		top: '50dp'
	});
	
	function refreshLogTable () {

		var newData = Ti.App.Properties.getList('logList') || [];
		tvLog.setData([]);
		tvLog.setData(newData);
 
	}
	

	
	// Listen for click events.
	tvLog.addEventListener('click', function(e) {
		alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
	});
	
	// Add to the parent view.
	win.add(tvLog);

	// Add to the parent view.
	win.add(lblNome);
	win.add(btnEmail);
	
	
 	return win;
}