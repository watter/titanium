module.exports = function() {
	
	var win = Ti.UI.createWindow({
		title: 'Janela 1',
		backgroundColor: '#800850'
	});

	var html = '<html> <body>' + '<h1>My First Heading</h1> <p>My first paragraph.</p>'+
	' </body> </html>';
	var url = 'http://www.celepar.pr.gov.br';
	
	var wvCelepar = Ti.UI.createWebView({
		url: url,
		height: Ti.Platform.displayCaps.platformHeight - 150,
		bottom: 0
	});

	var swSwitchWeb = Ti.UI.createSwitch({
		value: false,
		top: 5 
	});

	swSwitchWeb.addEventListener('change', function(e){
		
		if (e.value) {
			wvCelepar.setHtml(html);
		} else {
			wvCelepar.setUrl(url);
		}
	}); 
	
	win.add(swSwitchWeb);
	win.add(wvCelepar);

	return win;
};