function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('home'));
	var win2 = require('ui/handheld/winContacts');
		
	var win3 = require('ui/handheld/win1')();
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	var tab3 = Ti.UI.createTab({
		title: L('abad'),
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	win3.containingTab = tab3;


	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
