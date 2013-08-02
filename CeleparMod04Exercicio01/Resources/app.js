
//Setamos a flag para false para simular um logout
Ti.App.Properties.setBool('userLogged', false);

var $ = {
	cloud: require('ti.cloud'),
	session: {
		user: {},
		id: {},
		cloudID: Ti.App.Properties.getString('cloudID',''),
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
	
	if ( $.session.cloudID != '') {
		$.cloud.sessionId = $.session.cloudID;
		$.session.logged = true;
		Ti.App.Properties.setBool('userLogged', $.session.logged);

		// Recuperando as informações do usuário com base na seção 

   		var User = require('controllers/User');
		var thisUser = {};
		
		// recupera informações do usuario 
		
		$.cloud.Users.showMe(function (e) {
		    if (e.success) {
		        var user = e.users[0];

		        alert('Success:\n' +
		            'id: ' + user.id + '\n' +
		            'first name: ' + user.first_name + '\n' +
		            'last name: ' + user.last_name);
            
				thisUser = new User({
					id: e.users[0].id,
					sessionID: $.cloud.sessionId,
					name: e.users[0].name
				});
				// tem que ser aqui porque é assincrona a chamada
				$.session.user = thisUser;
				            
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
				
		$.session.id = $.cloud.sessionId;
		
	};
	
	if(!$.session.logged) {
		winLogin.open();
		
	} else {
		new $.tabs().open();		
	}
})();
