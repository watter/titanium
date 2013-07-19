module.exports = (function() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	/*var G = require('ui/common/Globals').theme;
	var winColor = G.windowColors;*/
	
	//var win1 = require('ui/handheld/WinAula02')(winColor);
	var win1 = require('ui/handheld/WinAula02')('white');
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var win2 = require('ui/handheld/WinAula03');
	var tab2 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
})();
