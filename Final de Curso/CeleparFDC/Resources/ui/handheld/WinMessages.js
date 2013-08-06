module.exports = (function() {
	var win = Ti.UI.createWindow({
		title : 'Messages',
		backgroundColor : 'black'
	});

	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
	var tableData = [];

	for (var i = 1; i <= 20; i++) {

		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			selectedBackgroundColor : 'white',
			rowIndex : i, // custom property, useful for determining the row during events
			height : 110
		});

		var imageAvatar = Ti.UI.createImageView({
			image : '/images/message.png',
			left : 10,
			top : 5,
			width : 50,
			height : 50
		});
		row.add(imageAvatar);

		var labelUserName = Ti.UI.createLabel({
			color : '#576996',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6,
				fontWeight : 'bold'
			},
			text : 'Assunto ' + i,
			left : 70,
			top : 6,
			width : 200,
			height : 30
		});
		row.add(labelUserName);

		var labelDetails = Ti.UI.createLabel({
			color : '#222',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 2,
				fontWeight : 'normal'
			},
			text : 'Parte da Descrição..',
			left : 70,
			top : 44,
			width : 360
		});
		row.add(labelDetails);

		tableData.push(row);
	}

	var tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		data : tableData,
		top: '80dp'
	});
	
	var txtMessage = Ti.UI.createTextArea({
		top:0,
		left: 0,
		width: '225dp',
		height: '80dp',
		borderWidth: '2dp',
		borderColor: 'black'
	});
	
	var btnSend = Ti.UI.createButton({
		title: 'Send',
		width: '100dp',
		height: '80dp',
		right: 0,
		top: 0
	})
	
	btnSend.addEventListener('click', function(){
		var Message = require('controllers/Message');
		var thisMessage = new Message({
			date: new Date(),
			from: 'fulano@email.com',
			to: 'cicrano@email.com',
			text: 'mensagem...'
		});
		
		thisMessage.send(function(message) {
			Ti.API.info('[WinMessage - send] Mensagem enviada: ' + message.id);
			Ti.App.fireEvent('app:RefreshProducts');
		}, function(error) {
			alert('Erro: ' + error);
		});	
	});
		
	win.add(txtMessage);
	win.add(btnSend);
	win.add(tableView);
	
	return win;
})();