function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		layout: 'vertical'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
		// Create a Button.
	var btnLogout = Ti.UI.createButton({
		title : 'btnLogout',
		height: '40dp',
		width: '260dp',
		top: '10dp'
	});
	
	// Listen for click events.
	btnLogout.addEventListener('click', function() {
		alert('Logged out:' + Ti.App.Properties.getBool('didLogin'));
		
		Ti.App.Properties.setBool('didLogin', false);

	});

	self.add(btnLogout);
	
	return self;
};

module.exports = ApplicationWindow;
