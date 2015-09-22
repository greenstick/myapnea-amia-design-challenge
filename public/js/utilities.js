// Instantiation Function
var Utilities = function (config) {
	return typeof config === 'object' ? this.init(config) : this.init({});
};

// Utilities Prototype
Utilities.prototype = {

	// Initialization Function
	init: function (config) {
		return this;
	},

	// Encode Sting to base64
	encodeBase64: function (input) {
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
	decodeBase64: function (input) {
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
	},

	// Pretty Print Numbers With Commas
	commaNumbers: function (number) {
        var str = number.toString().split('.');
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }; 
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        };
        return str.join('.');
	}

};