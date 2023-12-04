function fnInvalidchar(str){
	var retStr = true;
	var chars = /[~!\#$^&*\=+|:;?"<,.>'@\(\s]/g;
	var chkL = str.replace(chars, "").length;
	if (chkL == 0){
		retStr = false;
	}
	return retStr;
}

function fnGetSQString(q){
	if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1){
		for (sq=0; sq<100; sq++){
			try{
				if (q.indexOf(" ") != -1){
					q = q.replace(" ","|||");
				}else{break;}	
			}catch(e){break;}
		}
	}
	try{
		q = q.replace( /[\"]/g," ");
	}catch(e){};
	q = encodeURIComponent(q);
	return q;
}

function fnGoSearch(varForm)
{
	var searchQuery = $.trim($('#sc-fd').val());
	var searchType = $('#hdSearchType').val();
	var searchID = $('#hdSearchID').val();

	if(searchQuery.length < 1)
	{
		alert ("寃��됱뼱瑜� �낅젰�댁＜�몄슂.");
		$("#sc-fd").val("");
		$("#sc-fd").focus();
		return false;
	}
	if (!fnInvalidchar(searchQuery)) 
	{
		alert ("寃��됱뼱�� �щ컮瑜댁� �딆� 臾몄옄媛� �덉뒿�덈떎.");
		$("#sc-fd").val("");
		$("#sc-fd").focus();
		return false;
	}

    var autoSearch = new AUTO_SEARCH();
    // autoSearch.hook = $('#sc-fd');
    // hot keyword case
    if(searchType != "hot") {
        autoSearch._saveRecent($("#sc-fd").val());
    }

	var _searchQuery = fnGetSQString(searchQuery);
	switch(searchType)
	{
		case "artist" :
			fnViewArtist(searchID);
			break;
		case "song" :
			fnViewSongInfo(searchID);
			break;
		case "album" :
			fnViewAlbumLayer(searchID);
			break;
		case "hot" :
			document.location.href = searchID;
			break;
		default : 
			$('#hdQuery').val(_searchQuery);
			$('#loggable').val('true');

			varForm.submit();
			break;
	}
	return false;
}