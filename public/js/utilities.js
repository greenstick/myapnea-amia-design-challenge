// Instantiation Function
var Utilities = function (config) {
	this.init(config);
};

// Utilities Prototype
Utilities.prototype = {

	// Initialization Function
	init: function (config) {
		return this;
	},

	// Generate a Unique Identifier
	generateUUID: function () {
	 	var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	},

	// Encode Sting to base64
	encode64: function (input) {
		var input 			= escape(input),
			output 			= "",
			c1, c2, c3 		= "",
			e1, e2, e3, e4 	= "",
			i 				= 0,
			keyStr 			= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		do {
			c1 				= input.charCodeAt(i++);
			c2 				= input.charCodeAt(i++);
			c3 				= input.charCodeAt(i++);
			e1 				= c1 >> 2;
			e2 				= ((c1 & 3) << 4) | (c2 >> 4);
			e3 				= ((c2 & 15) << 2) | (c3 >> 6);
			e4 				= c3 & 63;
			if (isNaN(c2)) {
				e3 = e4 = 64;
			} else if (isNaN(c3)) {
				e4 = 64;
			}
			output = output + keyStr.charAt(e1) + keyStr.charAt(e2) + keyStr.charAt(e3) + keyStr.charAt(e4);
			c1 = c2 = c3 = "";
			e1 = e2 = e3 = e4 = "";
		} while (i < input.length);
		return output;
	},

	// Decode Sting to base64
	decode64: function (input) {
		var output 			= "",
			c1, c2, c3 		= "",
			e1, e2, e3, e4 	= "",
			i 				= 0,
			b64Regex 		= /[^A-Za-z0-9\+\/\=]/g,
			keyStr 			= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		if (b64Regex.exec(input)) console.log("There were invalid base64 characters in the input text.\n" + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" + "Expect errors in decoding.");
		input 				= input.replace(b64Regex, "");
		do {
			e1 				= keyStr.indexOf(input.charAt(i++));
			e2 				= keyStr.indexOf(input.charAt(i++));
			e3 				= keyStr.indexOf(input.charAt(i++));
			e4 				= keyStr.indexOf(input.charAt(i++));
			c1 				= (e1 << 2) | (e2 >> 4);
			c2 				= ((e2 & 15) << 4) | (e3 >> 2);
			c3 				= ((e3 & 3) << 6) | e4;
			output 			= output + String.fromCharCode(c1);
			if (e3 != 64) output = output + String.fromCharCode(c2);
			if (e4 != 64) output = output + String.fromCharCode(c3);
			c1 = c2 = c3 = "";
			e1 = e2 = e3 = e4 = "";
		} while (i < input.length);
		return unescape(output);
	}

};