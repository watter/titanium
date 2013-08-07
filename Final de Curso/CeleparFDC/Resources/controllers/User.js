var User = function(args) {
    this.ID = args.id || '0',
    this.SessionID = args.sessionID || '0',
    this.Name = args.name || 'Desconhecido';
    this.Email = args.email || 'fulano@email.com';
    
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

User.prototype.listMessages = function(scallback, ecallback) {
	Ti.API.info('[Message - listMessages] Listando mensagens do usuário: ' 
												+ $.session.user.getID());
												
	$.cloud.Objects.query({
		classname: 'message',
		page: 1,
		per_page: 20,
		where: {
			from: $.session.user.getEmail()
		}
	}, function(e) {
		if(e.success) {
			Ti.API.info('[Message - listMessages] Mensagens encontradas: ' + e.message.length);
			scallback(e.message);
		} else {
			ecallback(e.message);
		}
	});
};

module.exports = User;