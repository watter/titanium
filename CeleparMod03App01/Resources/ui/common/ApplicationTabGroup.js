function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = require('ui/handheld/winHome');
	var win2 = require('ui/handheld/winUsers');
	var win3 = require('ui/handheld/winFacebook');
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('Users'),
		icon: '/images/KS_nav_ui.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: 'FB',
		icon: '/images/KS_nav_ui.png',
		window: win3
	});
	win3.containingTab = tab3;

	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);

	
	return self;
};

module.exports = ApplicationTabGroup;
