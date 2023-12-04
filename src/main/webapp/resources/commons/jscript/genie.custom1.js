/**
 * 湲곗〈 ASP�먯꽌 議댁옱�섏� �딅뒗 �ㅽ겕由쏀듃 異붽�
 */

/**
 * br臾몄옄�댁쓣 媛쒗뻾臾몄옄�대줈 移섑솚<p>
 * @param str
 * @returns
 */
String.prototype.br = function() {
//	console.log(this);
//	console.log(this.replace(/<br\s*[\/]?>/gi, "\n"));
	return this.replace(/<br\s*[\/]?>/gi, "\n");
}

/**
 * 臾몄옄�� Null 泥댄겕<p>
 * @param str
 * @returns
 */
String.prototype.isEmpty = function() {
	if(this == null || this == "") {
		return true;
	}

	return false;
}

/**
 * 臾몄옄�� Null 泥댄겕<p>
 * @param str
 * @returns
 */
String.prototype.isNotEmpty = function() {
	if(this == null || this == "") {
		return false;
	}

	return true;
}

var StringUtils = {
		/**
		 * String 臾몄옄�댁쓣 boolean�뺤쑝濡� 蹂���
		 * @param string
		 * @returns
		 */
		stringToBoolean : function(string) {
			try {
				switch(string.toLowerCase()){
					case "true": case "yes": case "1": return true;
					case "false": case "no": case "0": case null: return false;
					default: return Boolean(string);
				}
			} catch(err) {
				return false;
			}
		},

		/**
		 * 臾몄옄�� empty 泥댄겕
		 * @param val
		 * @returns {Boolean}
		 */
		isEmpty : function(val) {
			var undef, key, i, len;
			var emptyValues = [undef, null, false, 0, '', '0'];

			for (i = 0, len = emptyValues.length; i < len; i++) {
				if (val === emptyValues[i]) { return true; }
			}

			if (typeof val === 'object') {
				for (key in val) {
					// TODO: should we check for own properties only?
					//if (val.hasOwnProperty(key)) {
					return false;
					//}
				}
				return true;
			}

			return false;
		}
}

String.prototype.formatUnicorn = String.prototype.formatUnicorn || function() {
	"use strict";
	var str = this.toString();
	if (arguments.length) {
		var t = typeof arguments[0];
		var key;
		var args = ("string" === t || "number" === t) ? Array.prototype.slice.call(arguments) : arguments[0];

		for (key in args) {
			str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
		}
	}

	return str;
};