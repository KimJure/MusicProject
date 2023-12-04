/**
 * 異붿쿇 愿��� 怨듯넻 �ㅽ겕由쏀듃
 */
function containsWord(haystack, needle) {
	return (" " + haystack + " ").indexOf(" " + needle + " ") !== -1;
}

function goTagsSearch(tagCode, tagName, logYn){
	var tags;
	if(logYn == 'Y'){
		// �쒓렇 寃��� 濡쒓렇
		insertTagSearchLog(tagCode);
	}

	if(tagCode.indexOf(",") != -1){
		var code;
		var name;
		code = tagCode.split(",");
		name = tagName.split(",");
		tags = code[0] + "||" + name[0] + "," + code[1] + "||" + name[1];
	}else{
		tags = tagCode + "||" + tagName;
	}

	location.href="/playlist/tags?tags="+encodeURIComponent(tags);
	return;
}

/**
 * �쒓렇 �덉씠��
 */
function showTagSearchLayer(){
	FG_layerPopup.show($('#layer_tags'));
}

/**
 * �쒓렇 �좏깮
 * @param tagCode
 * @param tagName
 */
function selectTag(tagCode, tagName){

	var innerHtml  = "<a href=\"#\" class=\"tag\" id=\""+tagCode+"||"+tagName+"\" tagcode=\""+tagCode+"\" tagname=\""+tagName+"\"><span class=\"del\" onclick=\"javascript:deleteTag('"+tagCode+"', '"+tagName+"');\">"+tagName+"</span></a>";
	var defHtml = "<a href=\"#\" class=\"new\" id=\"0\">�쒓렇瑜� �좏깮�댁＜�몄슂.</a>";

	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") ==  tagCode){
			deleteTag(tagCode, tagName);
			chk =false;
		}
	});


	if($(".pop_mix_now > a > .del").size() == 2){
		alert('�쒓렇�� 2媛쒕쭔 �좏깮 媛��ν빀�덈떎.');
		return;
	}
	var addCnt = 0;
	var chk = true;
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") ==  tagCode){
			chk = false;
		}
		var testTag = "SVC001 SVC002 SVC003"; //�쒕퉬�� �쒓렇 �쒗븳 1媛쒕쭔 �좏깮�섎룄濡� ��.
		if(containsWord(testTag, $(this).attr("tagcode")) && containsWord(testTag, tagCode)){
			alert('�쒕퉬�� 遺꾨쪟�� �쒓렇�� 以묐났 �좏깮�� 遺덇��ν빀�덈떎.');
			chk = false;
		}
	});

	if(chk){
		$(".pop_mix_now > a").each(function(index){
			if(addCnt == 0){
				if($(this).attr("tagcode") == "0" || $(this).attr("tagcode")== undefined){ //湲곕낯 �� 寃쎌슦�먮쭔 �쒓렇 �ｌ쓬.
					if(index == 0 ){
						$(".pop_mix_now").prepend(innerHtml);
					}else{
						$(".pop_mix_now").append(innerHtml);
					}
					$(this).remove();
					$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).toggleClass("hover");
					$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).attr("onclick","javascript:deleteTag('"+tagCode+"', '"+tagName+"');return false;");

					addCnt ++;
				}
			}

		});
	}
}

function deleteTag(tagCode, tagName){
	var defHtml = "<a href=\"#\" class=\"new\" id=\"0\">�쒓렇瑜� �좏깮�댁＜�몄슂.</a>";
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagname") ==  tagName){
			if(index == 0){
				$(".pop_mix_now").prepend(defHtml);
			}else{
				$(".pop_mix_now").append(defHtml);
			}


			$(this).remove();
			$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).toggleClass("hover");
			$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).attr("onclick","javascript:selectTag('"+tagCode+"', '"+tagName+"');return false;");
		}
	});

}

/**
 * �덉씠�� �쒓렇 寃���
 * @returns {boolean}
 */
function searchTagLayer(){
	var tagCode = "";
	var tagName = "";
	if($(".pop_mix_now > a > .del").size() ==0){
		alert("1媛� �댁긽�� �쒓렇瑜� �좏깮�� 二쇱꽭��.");
		return false;
	}
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") != '0' && $(this).attr("tagcode")){
			if($(".pop_mix_now > a > .del").size() == 2){
				if(index == 0){
					tagCode = tagCode + $(this).attr("tagcode") + ",";
					tagName = tagName + $(this).attr("tagname") + ",";
				}else{
					tagCode = tagCode + $(this).attr("tagcode");
					tagName = tagName + $(this).attr("tagname");
				}
			}else{
				tagCode = tagCode + $(this).attr("tagcode");
				tagName = tagName + $(this).attr("tagname");
			}
		}
	});
	goTagsSearch(tagCode, tagName, 'Y');
}

function delAndSearchTag(tagCode, tagName){
	var nowTag = $("#tags").val();
	var searchTag = "";
	var arr;
	var code;
	var name;

	if($("[id^='searchTag_']").size() ==1){
		location.href = "/playlist/tags";
		return false;
	}
	$("[id^='searchTag_']").each(function(index){
		searchTag = $(this).attr("id").replace("searchTag_","");
		arr = searchTag.split("||");

		if(arr[1] != tagName){
			code = arr[0];
			name = arr[1];
		}
	});

	goTagsSearch(code, name);
}

function goDetailView(plmSeq){

	location.href="/playlist/detailView?plmSeq="+plmSeq;
	return false;

}

function goMakerView(makerId, uno, makerName) {
	uno = uno || '';
	makerName = makerName || '';

	if(makerId > 0){
//		var zero="";
//		var len = 4;
//		for (i = 0; i < len - makerId.length; i++)
//		zero += "0";

//		var tagCode = "DJ" + zero + makerId;
		var djCode = '0000' + makerId;
		var tagCode = 'DJ' + djCode.substring(djCode.length-4, djCode.length);
		location.href = "/playlist/tags?tags=" + tagCode + encodeURI('||' + makerName);		//�대� DJ�� 寃쎌슦
	} else {
		location.href = "/myMusic?bgsq="+uno;	//�쇰컲 �ъ슜�먯씪 寃쎌슦
	}
	return false;

}

$('#btnLike').bind('click',function(){
	if (iSnsSeq == '0')
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		if(isOnceChk == '0')
		{
			like(sSnsType, iSnsSeq, iMemUno, fnLikeSuccess);
		}
		else
		{
			unlike(sSnsType, iSnsSeq, iMemUno, fnUnlikeSuccess);
		}
	}
	return false;
});


function recomToggleLike(that,isOnceChk, plmSeq, iMemUno){
	if (plmSeq == '0'){
		alert("�섎せ�� �묎렐�낅땲��.");
	}else{


		if(p_isOnceChk == '0'){
			like('PLAYLIST', plmSeq, iMemUno, fnLikeSuccess);
			$(that).closest('.btn-like').toggleClass('checked');
		}else{
			unlike('PLAYLIST', plmSeq, iMemUno, fnUnlikeSuccess);
		}

	}
}


var fnLikeSuccess = function(varResult){
	var resultCnt = "0";
	var tempResult = varResult.split('|');
	if (tempResult.length > 1)
	{
		resultCnt = varResult.split('|')[1];
	}
	resultCnt = commify(resultCnt);
	p_isOnceChk = "1";
	$('#emLikeCount').text(resultCnt);
	//fnUpdateLikeMemList();
};

var fnUnlikeSuccess = function(varResult){
	var resultCnt = "0";
	var tempResult = varResult.split('|');
	if (tempResult.length > 1)
	{
		resultCnt = varResult.split('|')[1];
	}
	resultCnt = commify(resultCnt);
	p_isOnceChk = "0";
	$('#emLikeCount').text(resultCnt);
	$('.btn-like').toggleClass('checked');
	//fnUpdateLikeMemList();
};

function commify(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;   // �뺢퇋��
	n += '';						  // �レ옄瑜� 臾몄옄�대줈 蹂���

	while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

	return n;
}

/**
 * 異붿쿇 怨� 紐⑸줉 議고쉶 �섍린 (濡쒓퉭)
 * @param plmSeq
 * @param fromType
 */
function allSongPlayNLog(plmSeq, playType, plmType){
	playType = playType || 1;
	plmType = plmType || 'Y';	// 異붿쿇�좉끝 �щ� Y/N
	var strParams = {plmSeq : plmSeq, plmFlag : plmType};
	$.ajax({
		type:"POST",
		url:"/playlist/allSongList",
		async: true,
		cache: false,
		data:strParams,
		success : function(strResult){
			var result = strResult.Result;
			if(result.RetCode == 0 ){
				fnPlaySong(strResult.DataSet, playType);
				return false;

			}
		}
	});
}

/**
 * 異붿쿇  濡쒓렇
 */
function insertPlaylistLog(plmSeq, logType, fromType){

	var strParams = {"seq" : plmSeq , "logtype" : logType, "fromtype": fromType};
	$.ajax({
		type:"POST",
		url:"/playlist/insertPlaylistLog",
		async: true,
		cache: false,
		data:strParams,
		success : function(data){
			var strResult =  data.retCode;
			if(strResult == 0 ){
				// alert(logType + " 濡쒓렇 �볤린 �깃났!");
				// return false;

			}
		}
	});

}

/**
 * 異붿쿇 ��뿉�� �곸꽭 �섏뼱媛덈븣 濡쒓렇 �볦� �� �대룞泥섎━.
 * @param plmSeq
 * @param logType
 * @param fromType
 * @returns {boolean}
 */
function playlistLogNDetailView(plmSeq, logType , fromType){

	insertPlaylistLog(plmSeq, logType, fromType);

	location.href="/playlist/detailView?plmSeq="+plmSeq;
	return false;

}

/**
 * �쒓렇 寃��� �� 濡쒓렇 �볤린
 * @param tags
 */
function insertTagSearchLog(tags){

	var strParams = {"tags" : tags};
	$.ajax({
		type:"POST",
		url:"/playlist/insertTagSearchLog",
		async: true,
		cache: false,
		data:strParams,
		success : function(data){
			var result = eval(data);
			if(result.retCode == 0 ){
				// alert(" 濡쒓렇 �볤린 �깃났!");
				// return false;

			}
		}
	});

}
