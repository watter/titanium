module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'WinAula03',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var scScroll = Ti.UI.createScrollView({
		top: 0,
		height: 60,
		width: Ti.UI.FILL,
		contentWidth: 830,
		contentHeight: 60,
		scrollType: 'horizontal'
	});
	
	scScroll.addEventListener('postlayout', function(e) {
		
		Ti.API.info('Post Layout');
		//e.source.setContentWidth(830);
	});
	
	var vwButtons = Ti.UI.createView({
		height: 45,
		width: Ti.UI.SIZE,
		backgroundColor: 'gray',
		top: 0,
		left: 0,
		layout: 'horizontal'
	});
	
	for(var i = 0; i < 9; i++) {
		
		var btn = Ti.UI.createButton({
			title: 'Opção ' + i,
			index: i,
			height: 45,
			width: 80,
			left: 3
		});
		
		//Exemplo de closure para passar variavel por referencia
		btn.addEventListener('click', (function(index) {
			
			return function() {
				
				svScroll.scrollToView(index);
			}
		})(i));
		
		//Outra opção mais simples seria
		/*btn.addEventListener('click', function(e) {
			
			if(e.source.index < 3)
				svScroll.scrollToView(e.source.index);
		});*/
		
		vwButtons.add(btn);
	}
	
	scScroll.add(vwButtons);
	
	var vwIndicator = Ti.UI.createView({
		height: 12,
		width: 40,
		backgroundColor: 'green',
		bottom: 0,
		left: 8
	});
	
	scScroll.add(vwIndicator);
	
	var view1 = require('ui/handheld/Aula03ScrollView1');
	
	var view2 = require('ui/handheld/Aula03ScrollView2');
	
	var view3 = require('ui/handheld/Aula04ScrollView3')(win);
	
	var svScroll = Ti.UI.createScrollableView({
		top: 0,
		height: Ti.UI.SIZE,
		width: Ti.UI.FILL,
		views: [view1, view2, view3],
		showPagingControl: true		
	});
	
	svScroll.addEventListener('scrollend', function(e) {
		
		vwIndicator.animate({ left: 110, duration: 300 });
	});
	
	win.add(scScroll);
	win.add(svScroll);
	
	return win;
})();
