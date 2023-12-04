var objPopGift;

//window.document.domain="genie.co.kr"

//회원 가입 이동
function fnViewMemberJoinPop(op){
	var ActionUrl = (op=="j") ? "/member/signUp" : "/member/find/findPwd";

	try {
		var openerUrl = window.opener.location.href.toLowerCase();

		//ystar일 경우 -> 외부연동일 경우로 변경 2014.04.21
		if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
			var dForm = $('<form />', {
				'action':ActionUrl,
				'target' :"genie_main"
			});
			dForm.appendTo('body').trigger('submit');
		}else {
			window.opener.location.href="https://www.genie.co.kr"+ActionUrl;
		}
	}
	catch (e){
		javaParentHTTPSDefend("https://www.genie.co.kr"+ActionUrl);
	}
}

//상품페이지 이동
function fnBuyProductPop(){
	try {
		var openerUrl = window.opener.location.href.toLowerCase();
		window.opener.location.href = "/buy/recommend";
	}
	catch (e){
		javaParentHTTPSDefend("/buy/recommend");
	}
}

//이용안내 - 모바일 - PC로 변경 2014.02.06
function fnViewUseGuidePop(){
	try {
		var openerUrl = window.opener.location.href.toLowerCase();
		window.opener.location.href="/guide/genieWeb";
	}
	catch (e){
		javaParentHTTPSDefend("/guide/genieWeb");
	}
}

var httpRequest = null;

function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) {
				return null;
			}
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

function sendRequest(url, params, callback, method) {
	httpRequest = getXMLHttpRequest();
	var httpMethod = method ;
	if (httpMethod != 'GET' && httpMethod != 'POST') {
		httpMethod = 'GET';
	}
	var httpParams = (params == null || params == '') ? null : params;
	var httpUrl = url;
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}

	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

/* URL Decoding */
function URLDecode(txt) {
	if (txt==undefined || txt==null || txt=="")
	{
		return txt;
	}
	//txt = txt.replaceAll(txt,"%2C",",");
	var HEXCHARS = "0123456789ABCDEFabcdef";
	var encoded = txt;
	var plaintext = "";
	var i = 0;
	while (i < encoded.length) {
		var ch = encoded.charAt(i);
		if (ch == "+") {
			plaintext += " ";
			i++;
		} else if (ch == "%") {
			if (i < (encoded.length-2) && HEXCHARS.indexOf(encoded.charAt(i+1)) != -1 && HEXCHARS.indexOf(encoded.charAt(i+2)) != -1 ) {
				plaintext += unescape( encoded.substr(i,3) );
				i += 3;
			} else {
				plaintext += ch;
				i++;
			}
		} else {
			plaintext += ch;
			i++;
		}
	}
	plaintext = replaceAll(plaintext,"%2C",",")
	return plaintext;
};

function replaceAll(str, searchStr, replaceStr) {
	while (str.indexOf(searchStr) != -1) {
		str = str.replace(searchStr, replaceStr);
	}
	return str;
}

function fnPopPhoneCert(cert) {
	window.open("https://www.genie.co.kr/member/info/popMobileCert?cert=" + cert, "popMobileCert", "width=552, height=338");
}

function fnSnsLink(snsFlag, url){
	var curUrl =  (url == '' || url == null || typeof url == 'undefined') ? new String(window.location): url;
	var m = "/api/makeShortUrl"
	var n = "post";
	var o = "lurl=" + escape(curUrl);
	sharFlag = "s";
	$.ajax({
		type: n,
		url: m,
		contentType: "application/x-www-form-urlencoded; charset=euc-kr",
		data: o,
		dataType: "json",
		error: function (a, b) {
			alert("SNS 공유 처리 중 에러가 발생하였습니다.");
		},
		success: function (k) {
			var RetCode = k.Result.RetCode;
			if (RetCode == "0" ){
				if (k.DataSet) {
					//console.log("k.DataSet= "+k.DataSet.S_URL)
					var sharUrl = URLDecode(k.DataSet.S_URL);
					var strMsg = document.title;

					var strSiteUrl = "";
					if (snsFlag == "F"){
						strSiteUrl = "http://www.facebook.com/sharer.php?u=http://"+sharUrl+"&t=" + encodeURIComponent(""+strMsg+" ") ;	// 구버전
						window.open(strSiteUrl);
					}else{
						var RAND = Math.floor(Math.random() * 10);
						strSiteUrl = "http://twitter.com/share?nocache=" + RAND+"&url=http://" + sharUrl+"&text="+encodeURIComponent("[" +strMsg+"]");
						window.open(strSiteUrl);
					}
				}
			}
		}
	});
}

//본인인증
function fnMemConfirm(ucty) {
	/*
	1: 회원가입 시 14세미만 부모 승인
	2: 결제 시 본인 인증
	3: 스트리밍다운 본인인증(뮤직)
	4: 본인인증시 14세미만 부모 인증
	5: ID 찾기시 본인 인증
	6: PW 찾기시 본인 인증
	7: ID 전체보기시 본인 인증
	*/
	window.open(vGenieWebDomain+"/member/confirm/memberConfirmInfo?ucty=" + ucty, "popMemConfirm", "width=470, height=544");
}

function fnMemConfirmRetry() {
	fnMemConfirm(3);
}

function ResizeWindow(x,y) {
	try
	{
		// tool box and border length
		var deltaHeight, deltaWidth;

		if (window.outerHeight) {
			deltaWidth = window.outerWidth - window.innerWidth;
			deltaHeight = window.outerHeight - window.innerHeight;
		}
		else {
			// if ie..
			if (document.documentElement.clientWidth) {

				// get window fake outer size
				var fakeOuterWidth = document.documentElement.clientWidth;
				var fakeOuterHeight = document.documentElement.clientHeight;

				// resize to innerSize
				window.resizeTo(fakeOuterWidth, fakeOuterHeight);

				// get window fake inner size
				var fakeInnerWidth = document.documentElement.clientWidth;
				var fakeInnerHeight = document.documentElement.clientHeight;

				// get delta
				deltaWidth = fakeOuterWidth - fakeInnerWidth;
				deltaHeight = fakeOuterHeight - fakeInnerHeight;
			}
			else {
				// not support -_-;;; ignore resizing;;;; sorry;;;;
				throw "browser does not support!"
			}
		}
		window.resizeTo(x + deltaWidth, y + deltaHeight);
	}catch(e){}
}

//Object 정렬
function sortObject(arr, prop, asc) {
	arr.sort(function(a, b) {
		if (asc) return (a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0));
		else return (b[prop] > a[prop] ? 1 : (b[prop] < a[prop]? -1 : 0));
	});

	return arr;
}

//Array Sort
var arraySort = function(arr, prop, asc) {
	var len = arr.length;
	if(len < 2) {
		return arr;
	}
	var pivot = Math.ceil(len/2);
	return arrayMerge(arraySort(arr.slice(0,pivot), prop, asc), arraySort(arr.slice(pivot), prop, asc), prop, asc);
};

var arrayMerge = function(left, right, prop, asc) {
	var result = [];
	while((left.length > 0) && (right.length > 0)) {
		//var l = decodeURIComponent(left[0][prop]),
		//	r = decodeURIComponent(right[0][prop]);
		var l = unescape(left[0][prop]),
			r = unescape(right[0][prop]);

		if(asc) {
			if(l < r) {
				result.push(left.shift());
			}else {
				result.push(right.shift());
			}
		} else {
			if(l > r) {
				result.push(left.shift());
			}else {
				result.push(right.shift());
			}
		}
	}

	result = result.concat(left, right);
	return result;
};

var arrayShuffle = function(arr) {
	var shuffle = [];
	if(arr.length < 2) return arr;

	while(arr.length > 0) {
		var ran = Math.floor(Math.random() * (arr.length - 1));
		shuffle.push(arr.splice(ran, 1)[0]);
	}

	return shuffle;
};

Array.prototype.move = function (old_index, new_index) {
	if (new_index >= this.length) {
		var k = new_index - this.length;
		while ((k--) + 1) {
			this.push(undefined);
		}
	}
	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
	return this; // for testing purposes
};

/**
 * 구매 불가 안내 팝업
 */
function blockGeniePackAlert(){
	alert('KT 전산 시스템 개편 작업으로 인해\n5월 25일(금) 23:00 ~ 5월 26일(토) 08:00 동안 \nKT 부가서비스 (지니팩, 미디어팩 상품) 가입이 중단 되오니 \n양해 부탁 드립니다.');
}

/**
 * int value check
 */
var isInt = (function() {
	var re = /^[+-]?\d+$/;

	return function(n) {
		return re.test(n);
	}
}());


/*
 * User Agent로부터 OS, 브라우저 정보 획득
 */
function fnGetBrowserInfo() {
	var ua = navigator.userAgent.toLowerCase(),
		info = {
			os: {type: '', name: '', version: '', nickname: ''},
			browser: {name: '', version: ''}
		}

	//OS, version > browser, version
	if(ua.indexOf('windows') > -1) {
		if(ua.indexOf('nt 5.1') > -1 || ua.indexOf('nt 5.2') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': 'XP'};

		} else if(ua.indexOf('nt 6.0') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': 'Vista'};

		} else if(ua.indexOf('nt 6.1') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '7'};

		} else if(ua.indexOf('nt 6.2') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '8'};

		} else if(ua.indexOf('nt 6.3') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '8.1'};

		} else if(ua.indexOf('nt 6.4') > -1 || ua.indexOf('nt 10.0') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '10'};
		} else {
			info['os'] = {'type': 'desktop', 'name': 'Windows'};
		}

		if(ua.indexOf('msie 8') > -1 || ua.indexOf('trident/4.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '8'};

		} else if(ua.indexOf('msie 9') > -1 || ua.indexOf('trident/5.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '9'};

		} else if(ua.indexOf('msie 10') > -1 || ua.indexOf('trident/6.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '10'};

		} else if(ua.indexOf('trident/7.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '11'};

		} else if(ua.indexOf('edge') > -1) {
			var ver = /(edge)\/([\w\s\.]+)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Edge', 'version': ver};

		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};

		} else if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w\s*)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};

		} else if(ua.indexOf('safari') > -1) {
			var ver = /(safari)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Safari', 'version': ver};
		}

	} else if(ua.indexOf('macintosh') > -1) {
		var ver = /(mac\sos\sx)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\_/g, '.') || '',
			nick = '';

		if(ver.indexOf('10.5') > -1) {
			nick = 'Leopard';

		} else if(ver.indexOf('10.6') > -1) {
			nick = 'Snow Leopard';

		} else if(ver.indexOf('10.7') > -1) {
			nick = 'Lion';

		} else if(ver.indexOf('10.8') > -1) {
			nick = 'Mountain Lion';

		} else if(ver.indexOf('10.9') > -1) {
			nick = 'Mavericks';

		} else if(ver.indexOf('10.10') > -1) {
			nick = 'Yosemite';

		} else if(ver.indexOf('10.11') > -1) {
			nick = 'El Capitan';

		} else if(ver.indexOf('10.12') > -1) {
			nick = 'Sierra';

		} else if(ver.indexOf('10.13') > -1) {
			nick = 'High Sierra';
		}

		info['os'] = {'type': 'desktop', 'name': 'Mac', 'version': ver, 'nickname': nick};

		if(ua.indexOf('whale') > -1) {
			var ver = /(whale)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Whale', 'version': ver};
		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};
		} else if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};
		} else if(ua.indexOf('safari') > -1) {
			var ver = /(safari)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Safari', 'version': ver};
		}

	} else if(ua.indexOf('iphone') > -1) {
		var ver = /(iphone\sos)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\slike\smac\sos\sx/g, '').replace(/\_/g, '.');
		info['os'] = {'type': 'mobile', 'name': 'iOS', 'version': ver};

	} else if(ua.indexOf('ipad') > -1) {
		var ver = /(cpu\sos)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\slike\smac\sos\sx/g, '').replace(/\_/g, '.');
		info['os'] = {'type': 'mobile', 'name': 'iOS', 'version': ver};

	} else if(ua.indexOf('android') > -1) {
		var ver = /(android\s)\s?([\w\s\.]+\w)*/gi.exec(ua)[2];
		info['os'] = {'type': 'mobile', 'name': 'Android', 'version': ver};

	} else if(ua.indexOf('linux') > -1) {
		var ver = /(linux\s)\s?([\w\s\.]+\w)*/gi.exec(ua)[2];
		info['os'] = {'type': 'desktop', 'name': 'Linux', 'version': ''};

		if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};

		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};
		}
	}


	return info;
}

//숫자 3자리 콤마 표시
function FC_GLComma(number){
	number = '' + number;

	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');

		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)){
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			}else{
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}

		return (output);
	}else{
		return number;
	}
}

//네비게이션 표시
function FC_PageLocation(naviText){
	$(".bread-sc").remove();
	$('#wrap-body').append('<p class="bread-sc">'+naviText+'</p>');
}

function loginPopup() {
	window.location.href = "https://www.genie.co.kr/member/fLogin?page_rfr=" + encodeURI(document.location.href);
}

function logout() {
	location.href = "https://www.genie.co.kr/auth/signOut?rfr=" + escape('https://pay.genie.co.kr' + _rfr);
}

function getOpener(obj) {
	var _opener = null;

	if(typeof obj == "undefined" || obj == null) {
		if(typeof opener != "undefined") {
			if(opener != null) {
				_opener = opener;
			}
		}
	} else {
		if(typeof obj.opener != "undefined") {
			if(obj.opener != null) {
				_opener = obj.opener;
			}
		}
	}

	return _opener;
}

function fnPrntByConfirmPopop() {
	PopupCenter('/member/confirm/memberPrntByConfirm?ucty=10','popMemConfirm', 470, 462);
}

function PopupCenter(url, title, w, h) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ", fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no");

	if (window.focus) {
		newWindow.focus();
	}
}

function fnCopyLink(link) {
	if(window.clipboardData) {
		window.clipboardData.setData("Text", link);
		alert("링크가 클립보드에 복사되었습니다.\nCTRL+V하시면 링크가 입력됩니다");
	} else {
		window.prompt("CTRL+C를 눌러 아래 링크를 복사하세요", link);
	}
}

function ResizeWindow(x,y) {
	try
	{
		// tool box and border length
		var deltaHeight, deltaWidth;

		if (window.outerHeight) {
			deltaWidth = window.outerWidth - window.innerWidth;
			deltaHeight = window.outerHeight - window.innerHeight;
		}
		else {
			// if ie..
			if (document.documentElement.clientWidth) {

				// get window fake outer size
				var fakeOuterWidth = document.documentElement.clientWidth;
				var fakeOuterHeight = document.documentElement.clientHeight;

				// resize to innerSize
				window.resizeTo(fakeOuterWidth, fakeOuterHeight);

				// get window fake inner size
				var fakeInnerWidth = document.documentElement.clientWidth;
				var fakeInnerHeight = document.documentElement.clientHeight;

				// get delta
				deltaWidth = fakeOuterWidth - fakeInnerWidth;
				deltaHeight = fakeOuterHeight - fakeInnerHeight;
			}
			else {
				// not support -_-;;; ignore resizing;;;; sorry;;;;
				throw "browser does not support!"
			}
		}
		window.resizeTo(x + deltaWidth, y + deltaHeight);
	}catch(e){}
}

function dateDiff(tp, _date1, _date2) {
	var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
	var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

	var diff = diffDate_2.getTime() - diffDate_1.getTime();
	var adder = 1;

	if(tp == 's' || tp == 'm' || tp == 'h' || tp == 'd') {
		adder *= 1000;
	}

	if(tp == 'm' || tp == 'h' || tp == 'd') {
		adder *= 60;
	}

	if(tp == 'h' || tp == 'd') {
		adder *= 60;
	}

	if(tp == 'd') {
		adder *= 24;
	}

	diff = Math.ceil(diff / adder);

	return diff;
}

function ie11VerCheck() {
	var userAgent = navigator.userAgent.toLowerCase();
	if(userAgent.indexOf('msie') != -1) {
		return false;
	}
	return true;
}

var strReUrl = location.href;

var deparam = function(query) {
	var pairs, i, keyValuePair, key, value, map = {};
	// remove leading question mark if its there
	if (query.slice(0, 1) === '?') {
		query = query.slice(1);
	}
	if (query !== '') {
		pairs = query.split('&');
		for (i = 0; i < pairs.length; i += 1) {
			keyValuePair = pairs[i].split('=');
			key = decodeURIComponent(keyValuePair[0]);
			value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
			map[key] = value;
		}
	}
	return map;
}

var callback = function() {
	//console.log('callback');
};

var commonAjax = function(jsonObj) {
	/* Sample
	 commonAjax({
	 url: '/member/confirm/chkHpHashJson',
	 paramData: deparam($("#f_mem_info").serialize()),
	 successFunction: function(result) {
	 fnChkNumberResult(result.rtn, result.hashInfo);
	 }
	 });
	 */
	var emptyFunction = function() {};
	var jsonParam = {
		url: jsonObj.url !=null ? jsonObj.url : '',
		paramData: jsonObj.paramData != null ? jsonObj.paramData : '',
		asyncType: jsonObj.asyncType != null ? jsonObj.asyncType : false,
		successFunction: jsonObj.successFunction != null ? jsonObj.successFunction : emptyFunction,
		errorFunction: jsonObj.errorFunction != null ? jsonObj.errorFunction : emptyFunction,
		completeFunction: jsonObj.completeFunction != null ? jsonObj.completeFunction : emptyFunction,
		dataType: jsonObj.dataType != null ? jsonObj.dataType : 'JSON'
	}

	$.ajax({
		url: jsonParam.url,
		type: "POST",
		dataType: "JSON",
		data: jsonParam.paramData,
		async: jsonParam.asyncType,
		success: function(data) {
			jsonParam.successFunction(data);
		},
		error: function(error) {
			jsonParam.errorFunction(error);
		},
		complete: function() {
			jsonParam.completeFunction();
		}
	});
}

var redirectPage = function(formObj) {
	/* Sample
	 redirectPage({
	 url: url,
	 paramData: deparam($("#f_mem_info").serialize()),
	 appendPosition: 'formDiv'
	 });
	 */
	var formParam = {
		url: formObj.url != null ? formObj.url : '',
		targetId: formObj.targetId != null ? formObj.targetId : '',
		appendPosition: formObj.appendPosition != null ? formObj.appendPosition : 'body',
		paramData: formObj.paramData != null ? formObj.paramData : ''
	}

	var $form = $('<form></form>');
	$form.attr('action', formParam.url);
	$form.attr('method', 'post');
	$form.attr('target', formParam.targetId);
	$form.appendTo(formParam.appendPosition);

	if (formParam.paramData != '') {
		for (var p in formParam.paramData) {
			var idx = $('<input type="hidden" value="' + formParam.paramData[p] + '" name="' + encodeURIComponent(p) + '">');
			$form.append(idx);
		}
	}

	$form.submit();
}

// SNS 공유하기
function shareSNS(type, url, title, contents) {
	var title = '';
	var summary = 'genie';
	var settings = 'toolbar=0, status=0, width=600, height=400';

	switch (type) {
		case "facebook":
			var FACEBOOK_URL = 'http://www.facebook.com/sharer.php?s=100';
			var query = '';
			query += '&p[url]=' + encodeURIComponent(url);

			if (title != '') query += '&p[title]=' + encodeURIComponent(title);
			if (summary != '') query += '&p[summary]=' + encodeURIComponent(summary);

			var new_window = window.open(FACEBOOK_URL + query, 'shareFacebook', settings);
			if (window.focus) { new_window.focus(); }
			break;
		case "twitter":
			var TWITTER_URL = 'http://twitter.com/share';
			var RAND = Math.floor(Math.random() * 10);
			var query = '?nocache=' + RAND;
			query += '&url=' + encodeURIComponent(url);

			if (title != '') query += '&text=' + encodeURIComponent('[' + title + '] ');
			if (contents != '') query += '&text=' + encodeURIComponent(contents);

			var new_window = window.open(TWITTER_URL + query, 'shareTwitter', settings);
//			var strSiteUrl = "https://twitter.com/intent/tweet?nocache=" + RAND + "&url=" + url + "&text=" + encodeURI(title + ' ' + contents);
//			var new_window = window.open(strSiteUrl, 'shareTwitter', settings);
			if (window.focus) { new_window.focus(); }
			break;
	}
}
/**
 * SNS 공유하기
 * @param varSnsFlag
 * @param varShotUrl
 * @param varSNSTitle
 * @param varSNSContents
 */
function fnSnsShare(varSnsFlag, varShortUrl, varSNSTitle, varSNSContents, varSNSImgUrl) {
	if (varSnsFlag == "F") {
		shareSNS('facebook', varShortUrl, varSNSTitle, varSNSContents);
	} else if (varSnsFlag == "T") {
		shareSNS('twitter', varShortUrl, varSNSTitle, varSNSContents);
	} else if (varSnsFlag == "K") {
		shareWithKakaoTalk(varShortUrl, varSNSTitle, varSNSContents, varSNSImgUrl);
	}
}

function shareWithKakaoTalk(varShareUrl, varSNSTitle, varSNSContents, varSNSImgUrl) {
	if(Kakao.isInitialized() == false)	Kakao.init('3d95e91552f8708aaf3ef3194a7b0544');
	Kakao.Link.sendDefault({
		objectType:'feed',
		content: {
			title: varSNSTitle,
			description: varSNSContents,
			imageUrl: varSNSImgUrl,
			imageWidth: 300,
			imageHeight: 200,
			link: {
				mobileWebUrl:varShareUrl,
				webUrl:varShareUrl
			}
		}
	});
}

function buildIframe(id) {
	if (!id || id=="") id="ifrm";
	var $ioo = $('<iframe id="' + id + '" name="' + id + '"></iframe>');
	var ioo = $ioo[0];
	ioo.src = 'javascript:false;document.write("");';
	$ioo.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
	delete curwind;$("#"+id).stop();$("#"+id).empty();$("#"+id).empty();
	$("body").append($ioo);
}

//===========================================================================================
//Data Valid Check
function fnIsNum(num){
	return (/^[0-9]+$/).test(num) ? true : false;
}

//아이디 대문자 불가 2014.09.15
function fnIsUserid(id) {
	return (/^[a-z]{1}[0-9a-z]+$/).test(id) ? true : false;
}

function fnIsPwd(pw) {
	return (/^[0-9a-zA-Z]+$/).test(pw) ? true : false;
}

function fnIsEmail(em){
	return (/\w+([-+.]+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(em);
}

function fnIsEmailNew(em){
	return (/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i).test(em);
}

function fnIsMobile(hp){
	var arg = "";
	return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(hp)");
}
//===========================================================================================
