module.exports = (function() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	var G = require('ui/common/Globals').theme;
	var winColor = G.windowColors;
	
	var win1 = require('ui/handheld/WinAula02')(winColor);
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	
	win1.containingTab = tab1;
	
	self.addTab(tab1);
	
	return self;
})();
