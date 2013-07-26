//JSON-RPC
//http://json-rpc.org/

/* Deve ser utilizado como:
 * 
 * wsController.Usuario.call({
		data: {
			id: 'v1',
			method: 'login',
			params: {
				chave: valor,
				chave: valor
			}
		},
		scallback: function,
		ecallback: function
	});
 */
module.exports = (function() {
	
	//Definição de classes do WS
	this.Classe1 = {},
	this.Classe2 = {},
	this.Classe3 = {};
	
	for(var _class in this) {
		
		this[_class].className = _class;
		this[_class].call = (function() {
			
			return function(args) {
				
				var net = {
					isOnline: Ti.Network.getOnline(),
					type: Ti.Network.getNetworkType(),
					typeName: Ti.Network.getNetworkTypeName()
				};
				
				if(net.isOnline) {
					
					var xhr = Ti.Network.createHTTPClient(),
						className = this.className;
						
					var wsURL = 'http://servidor.com/v1/' + className + 
								'/' + args.data.method;
								
					xhr.open('POST', wsURL);
					
					xhr.onload = function() {
						
						var responseJSON = this.responseText;
						
						var ret = {};
						
						if(responseJSON)
							ret = JSON.parse(responseJSON);
						
						if(!_.isNull(ret) && ret.result.success) {
							
							args.scallback(ret.result);
						} else {
							
							args.ecallback();
						}
					};
					
					xhr.onerror = function(e) {
						
						args.ecallback(e);
					};
					
					xhr.setTimeout(30000);
					
					var jsonPayload = JSON.stringify(args.data);
					
					xhr.send(jsonPayload);
				} else {
					
					//Funções de alerta de erro e/ou agendamento
					//para chamada quando tiver acesso à internet
					
					alert('Sem internet!');
				}
			};
		});
	}
	
})();
