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
	
	view.add(lblSlider);
	view.add(slSlider);
	view.add(vwBox);
	
	return view;
})();
