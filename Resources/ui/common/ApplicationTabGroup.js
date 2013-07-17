function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('home'));
	var win2 = require('ui/handheld/winContacts');
		
	var win3 = require('ui/handheld/win1')();
	var win4 = require('ui/handheld/winMedia');
	var win5 = require('ui/handheld/winDevice');
	var win6 = require('ui/handheld/winApp');


	
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

	var tab4 = Ti.UI.createTab({
		title: 'Media',
		icon: '/images/KS_nav_views.png',
		window: win4
	});
	win4.containingTab = tab4;

	var tab5 = Ti.UI.createTab({
		title: 'DEVICE',
		icon: '/images/KS_nav_views.png',
		window: win5
	});
	win5.containingTab = tab5;

	var tab6 = Ti.UI.createTab({
		title: 'App',
		icon: '/images/KS_nav_views.png',
		window: win6
	});
	win6.containingTab = tab6;


	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	self.addTab(tab5);
	self.addTab(tab6);


	
	return self;
};

module.exports = ApplicationTabGroup;
