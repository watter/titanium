function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = require('ui/handheld/WinContacts'),
		win2 = require('ui/handheld/WinMessages');
	
	var tab1 = Ti.UI.createTab({
		title: 'Contacts',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Messages',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;