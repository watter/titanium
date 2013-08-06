var Message = function(args) {
	this.date = args.date,
	this.from = args.from,
	this.to   = args.to,
	this.text = args.text;
};

Message.prototype.send = function(scallback, ecallback) {
	var objectFields = {};
	
	for(var key in this) {
		objectFields[key] = this[key];
	}
	
	$.cloud.Objects.create({
		classname: 'message',
		fields: objectFields
	}, function(e) {
		if(e.success) {
			Ti.API.info('[Message - sended] Nova mensagem enviada ' + 
							e.message[0].id);
			scallback(e.message[0]);
		} else {
			ecallback(e.message);
		}
	})
};

Message.prototype.listMessages = function(scallback, ecallback) {
	Ti.API.info('[Message - listMessages] Listando mensagens do usuário: ' 
												+ $.session.user.getID());
												
	$.cloud.Objects.query({
		classname: 'message',
		page: 1,
		per_page: 20,
		where: {
			user_id: $.session.user.getID()
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

module.exports = Message;