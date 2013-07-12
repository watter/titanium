module.exports = (function() {
	
	var view = Ti.UI.createView({
		backgroundColor: 'white'
	});
	
	var lblSlider = Ti.UI.createLabel({
		text: 'Valor: 0',
		width: Ti.UI.SIZE,
		font: { fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial' },
		height: 40,
		top: 5,
		left: 5,
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var slSlider = Ti.UI.createSlider({
		top: 5,
		left: 70,
		width: 200,
		value: 0,
		min: 0,
		max: 360
	});
	
	var vwBox = Ti.UI.createView({
		height: 50,
		width: 50,
		backgroundColor: 'black'
	});
	
	slSlider.addEventListener('change', function(e) {
		
		var matrix = Ti.UI.create2DMatrix({ rotate: e.value });
		
		vwBox.animate({ transform: matrix, duration: 400 });
		
		lblSlider.setText('Valor: ' + e.value);
	});
	
	var vwBBAnimate = Ti.UI.createView({
		height: 50,
		width: Ti.UI.FILL,
		bottom: 20,
		backgroundColor: 'transparent',
		borderWidth: 3,
		borderColor: 'black',
		borderRadius: 10,
		layout: 'horizontal'
	});
	
	var btnBBAnimate2D = Ti.UI.createButton({
		title: '2D',
		height: 45,
		width: Ti.Platform.displayCaps.platformWidth/2,
		left: 0
	});
	
	var btnBBAnimatePos = Ti.UI.createButton({
		title: 'Pos',
		height: 45,
		width: Ti.Platform.displayCaps.platformWidth/2,
		left: 0
	});
	
	btnBBAnimate2D.addEventListener('click', function() {
		
		var transform = Ti.UI.create2DMatrix();
		transform = transform.rotate(180);
		transform = transform.scale(2.0);
		
		vwBox.animate({
			transform: transform,
			duration: 2000,
			autoreverse: true,
			repeat: 3
		});
	});
	
	btnBBAnimatePos.addEventListener('click', function() {
		
		var transform = Ti.UI.create2DMatrix();
		transform = transform.rotate(200);
		transform = transform.scale(2.4);
		
		var animation = Ti.UI.createAnimation({
			transform: transform,
			top: 0,
			duration: 2000,
			repeat: 3,
			autoreverse: true,
			backgroundColor: 'red'
			//anchorPoint: {x: 0, y: 0}
		});
		
		vwBox.animate(animation);
		
	});
	
	vwBBAnimate.add(btnBBAnimate2D);
	vwBBAnimate.add(btnBBAnimatePos);
	
	view.add(vwBBAnimate);
	view.add(lblSlider);
	view.add(slSlider);
	view.add(vwBox);
	
	return view;
})();
