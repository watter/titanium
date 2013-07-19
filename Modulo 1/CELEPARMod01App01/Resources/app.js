var __G = {
	windowColors: 'green'
};

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var _G = {
		windowColors: 'green'
	};
	
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	ApplicationTabGroup.open();
})();
