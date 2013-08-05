var User = function(args) {
	
	this.ID = args.id || '0',
	this.SessionID = args.sessionID || '0',
	this.Name = args.name || 'Desconhecido';
	
	for(var key in this) {
		
		User.prototype['get' + key] = (function(key) {
			
			return function() {
				
				return this[key];
			};
		})(key);
		
		User.prototype['set' + key] = (function(key) {
			
			return function(_value) {
				
				this[key] = _value;
			};
		})(key);
	}
};

User.prototype.listProducts = function(scallback, ecallback) {
	
	Ti.API.info('[User - listProducts] Requisitando produtos do usuário: ' 
												+ $.session.user.getID());
												
	$.cloud.Objects.query({
		classname: 'product',
		page: 1,
		per_page: 20,
		where: {
			user_id: $.session.user.getID()
		}
	}, function(e) {
		
		if(e.success) {
			
			Ti.API.info('[User - listProducts] Produtos encontrados: ' + e.product.length);
			
			scallback(e.product);
		} else {
			
			ecallback(e.message);
		}
		
	});
};

module.exports = User;