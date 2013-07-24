module.exports= (function(){

	var win = Ti.UI.createWindow({
		title: 'Facebook',
		backgroundColor: 'blue',
	});
	

	
	// Create a Button.
	var btnAuthorize = Ti.UI.createButton({
		title : 'Autorizar',
		height : '40dp',
		width : '80dp',
		top : '10dp'
	});
	
	// Listen for click events.
	btnAuthorize.addEventListener('click', function() {
		
		var fb = require('facebook');
		fb.appid = '235684463160760';
		fb.permissions = ['publish_stream', 'email'];
		fb.authorize();
	});
	
	// Add to the parent view.
	win.add(btnAuthorize);
	
return win;
})();