module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Media',
		backgroundColor: 'white'
	});
	
	var moviePlayer = Ti.Media.createVideoPlayer({
		/*url: 'http://dts.podtrac.com/redirect.mp4/' +
		'twit.cachefly.net/video/aaa/aaa0033/' +
		'aaa0033_h264b_640x368_256.mp4',*/
		url: 'http://www.tools4movies.com/' +
		'dvd_catalyst_profile_samples/' +
		'The Amazing Spiderman bionic.mp4',
		backgroundColor: 'black',
		movieControlMode: Ti.Media.VIDEO_CONTROL_DEFAULT,
		//scalingMode: Ti.Media.VIDEO_SCALING_MODE_FILL,
		height: '200dp',
		width: Ti.UI.SIZE,
		autoplay: false
	});
	
	moviePlayer.addEventListener('complete', function() {
		
		alert('Complete!');
	});
	
	moviePlayer.addEventListener('playbackstate', function(e) {
		
		Ti.API.info('Video playback state: ' + e.playbackState);
	});
	
	win.add(moviePlayer);
	
	return win;
	
})();
