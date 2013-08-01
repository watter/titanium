var Product = function(args) {
	
	this.name = args.name || 'Sem nome',
	this.description = args.description || 'Sem descrição',
	this.category = args.category || 'Sem categoria',
	this.quantity = args.quantity || '0';
};

Product.prototype.save = function(scallback, ecallback) {
	
	var objectFields = {};
	
	for(var key in this) {
		
		objectFields[key] = this[key];
	}
	
	$.cloud.Objects.create({
		classname: 'product',
		fields: objectFields
	}, function(e) {
		
		if(e.success) {
			
			Ti.API.info('[Product - save] Novo produto adicionado com ID: ' + 
							e.product[0].id);
			scallback(e.product[0]);
		} else {
			
			ecallback(e.message);
		}
	})
};

module.exports = Product;
