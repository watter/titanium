
//Setamos a flag para false para simular um logout
Ti.App.Properties.setBool('userLogged', false);

var $ = {
	cloud: require('ti.cloud'),
	session: {
		user: {},
		id: {},
		logged: (Ti.App.Properties.getBool('userLogged') || false)
	},
	tabs: {}
};

(function() {
	
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var winLogin = require('ui/handheld/WinLogin');
	$.tabs = require('ui/common/ApplicationTabGroup');
	
	if(!$.session.logged) {
		
		winLogin.open();
	} else {
		
		new $.tabs().open();		
	}
})();
