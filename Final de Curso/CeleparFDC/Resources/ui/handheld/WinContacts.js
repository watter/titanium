module.exports = (function() {

	var win = Ti.UI.createWindow({
		title : 'Contacts',
		backgroundColor : 'black'
	});

	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

	var search = Titanium.UI.createSearchBar({
		showCancel : false,
		hintText : 'Search Contact'
	});
	search.addEventListener('change', function(e) {
		e.value // search string as user types
	});
	search.addEventListener('return', function(e) {
		search.blur();
	});
	search.addEventListener('cancel', function(e) {
		search.blur();
	});

	var tableData = [];
	
	var tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		data : tableData,
		search : search,
		filterAttribute : 'filter'
	});

	function pushRow(rowID, contact) {
		
		var contactID      = contact.contactID;
		var rowName        = contact.contactFullName;
		var rowDescription = contact.contactFullName;
		var image = '';
		var temImagem      = contact.contactHasImagePicture; 
		
		$.api.execute("Catalog/ContactPicture", {
			contactID : contactID,
			search : ""
		}, function(result) {
			
			if(temImagem == 1){
				image = result.contacts[0].contactImagePicture;	
			} else {
				image = '/images/user.png';
			}
			
		}, function(error) {
			alert(JSON.stringify(error));
		});

		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			selectedBackgroundColor : 'white',
			height : 110,
			filter : rowName
		});

		var imageAvatar = Ti.UI.createImageView({
			image : image,
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
			text : rowName,
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
			text : rowDescription,
			left : 70,
			top : 44,
			width : 360
		});
		row.add(labelDetails);
		
		var imageContactType = Ti.UI.createImageView({
			image : '/images/ws.png',
			right : 10,
			top : 5,
			width : 30,
			height : 30
		});
		row.add(imageContactType);

		tableView.appendRow(row);
	}

	$.api.execute("Login", {
		user : "demo",
		"password" : "demo22"
	}, function(result) {
		$.api.execute("Catalog/Contacts", {
			contactType : "1",
			search : ""
		}, function(result) {
			var i = 0;
			for (i in result.contacts) {
				Ti.API.info(result.contacts[i].contactFullName);
				pushRow(i, result.contacts[i]);
			}
		}, function(error) {
			alert(JSON.stringify(error));
		});
	}, function(error) {
		alert(JSON.stringify(error));
	});

	win.add(tableView);

	return win;
})(); 