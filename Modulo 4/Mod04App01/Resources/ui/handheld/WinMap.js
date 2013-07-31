module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: L('WinMap'),
		backgroundColor: 'white'
	});
	
	/* A SDK do Titanium possui suporte "implementado" para Android Maps v1 
	var map = Ti.Map.createView({
		mapType: Ti.Map.STANDARD_TYPE,
		region: {
			latitude: -25.414904,
			longitude: -49.274567,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1 
		},
		animate: true,
		regionFit: true
	});
	
	win.add(map);
	*/
	
	/* Para usar o módulo do Android Maps v2 */
	var MapMod = require('ti.map');
	
	var playServices = MapMod.isGooglePlayServicesAvailable();
	switch(playServices) {
		case MapMod.SUCCESS:
		 case MapModule.SUCCESS:
	        Ti.API.info('Google Play services is installed.');
	        break;
	    case MapModule.SERVICE_MISSING:
	        alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
	        break;
	    case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
	        alert('Google Play services is out of date. Please update Google Play services.');
	        break;
	    case MapModule.SERVICE_DISABLED:
	        alert('Google Play services is disabled. Please enable Google Play services.');
	        break;
	    case MapModule.SERVICE_INVALID:
	        alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
	        break;
	    default:
	        alert('Unknown error.');
	        break;
	}
	
	var map = MapMod.createView({
		mapType: MapMod.NORMAL_TYPE,
		/* Tipos de Mapas:
		 * ti.map.NORMAL_TYPE
		 * ti.map.TERRAIN_TYPE
		 * ti.map.SATELLITE_TYPE
		 * ti.map.HYBRID_TYPE
		 */
		region: {
			latitude: -25.414904,
			longitude: -49.274567,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1 
		},
		userLocation: true
	}) ;
	
	win.add(map);
	return win;
	
})();
