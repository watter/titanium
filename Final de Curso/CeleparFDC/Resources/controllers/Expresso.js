var Expresso = function(args) {
	
	this.auth = args.auth || '';
	
	this.apiURL = args.url || '';
	
	this.profile = args.profile || '';
	
	this.params = {};
	
	for(var key in this) {
		
		Expresso.prototype['get' + key] = (function(key) {
			
			return function() {
				
				return this[key];
			};
		})(key);
		
		Expresso.prototype['set' + key] = (function(key) {
			
			return function(_value) {
				
				this[key] = _value;
			};
		})(key);
	}
};

Expresso.prototype.execute = function(resourceName,ResourceParams,scallback, ecallback) {
	
	var retVal = {};
	
	var apiURL = this.apiURL;
	
	var apiReq = Titanium.Network.createHTTPClient();	
	apiReq.onload = function()
	{
		var json = this.responseText;
		var response = JSON.parse(json);
		
		if (!response.error)
		{
			if (resourceName == "Login") 
			{
				this.auth = response.result.auth;
				this.profile = response.result.profile;
			}
			scallback(response.result);
			
		} else {
			ecallback(response.error);
		}
	};
	
	apiReq.open("POST", apiURL + resourceName);
	ResourceParams.auth = this.auth;
	var params = {
		id: 1,
		params: JSON.stringify(ResourceParams),
	};
	apiReq.send(params);
	
};

module.exports = Expresso;