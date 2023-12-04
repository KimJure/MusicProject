<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">




<!-- PC Player Download Url -->
	<!-- PC Player 다운로드 -->
	<!-- PC Player Edge 다운로드 -->
	<!-- MAC Player 다운로드 -->
	<!-- MAC Player 확장 기능 -->


<link rel="stylesheet" href="${kjj}/resources/commons/style/detail.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/chart.css">
<script src="${kjj}/resources/commons/jscript/raphael-min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${kjj}/resources/commons/style/wbugsAll.css" />
<script src="${kjj}/resources/commons/jscript/jquery-1.9.1.min.js"></script>
<%@ include file="include/header1.jsp" %>

</body>

   <c:forEach items="${Artist}" var="Artist">
         <c:set var="artistname" value="${Artist.artistname}" scope="request" />
         <c:set var="artistnum" value="${Artist.artistnum}" scope="request" />
         <c:set var="activity" value="${Artist.activity}" scope="request" />
         <c:set var="artgender" value="${Artist.artgender}" scope="request" />
         <c:set var="debutyear" value="${Artist.debutyear}" scope="request" />
         <c:set var="activityyear" value="${Artist.activityyear}" scope="request" />
         <c:set var="artnational" value="${Artist.artnational}" scope="request" />
         <c:set var="artintro" value="${Artist.artintro}" scope="request" />
         <c:set var="artisturl" value="${Artist.imgDTO.url}" scope="request" />
         <c:set var="artistimgname" value="${Artist.imgDTO.imgname}" scope="request" />
         <c:set var="artlike" value="${Artist.artlike}" scope="request" />
         <c:set var="arttype" value="${Artist.arttype}" scope="request" />
         
         
</c:forEach>

   <c:forEach items="${albumcount}" var="albumcount">
   <c:set var="albumcount" value="${albumcount.albumcount}" scope="request" />
   </c:forEach>
   
      <c:forEach items="${songbest}" var="songbest">
   <c:set var="bestsongcount" value="${songbest.bestsongcount}" scope="request" />
   </c:forEach>

<div id="wrap-body" class="">
	<div id="body-content">

		<!-- S. body menu -->
		<h2 class="page-top-this"><a href="#" onclick="fnViewArtist('80539780');return false;">${artistname}</a></h2>
<div class="tab-1 artist-main">
	<ul>
		<li class="current">
			<a href="#" onclick="fnGoArtistTab('main','80539780');return false;">
				<img src="//image.genie.co.kr/imageg/web/tab/main.png" alt="메인" />
			</a>
		</li>
		<li >
			<a href="#" onclick="fnGoArtistTab('album','80539780');return false;">
				<img src="//image.genie.co.kr/imageg/web/tab/album.png" alt="앨범" />
			</a>
		</li>
		<li >
			<a href="#" onclick="fnGoArtistTab('song','80539780');return false;">
				<img src="//image.genie.co.kr/imageg/web/tab/song.png" alt="곡" />
			</a>
		</li>
	</ul>
</div>
		<!-- E. body sub menu -->

		<!-- S. 아티스트 기본 정보 & 좋아요 -->
		<div class="artist-main-infos">
			<div class="photo-zone">
				
					
						<a href="//image.genie.co.kr/Y/IMAGE/IMG_ARTIST/080/539/780/80539780_1696564132033_9_600x600.JPG" image-view="true">
							<span class="cover-img"><img src="${artisturl}${artistimgname}" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_artist_140.gif';" alt="제니 (JENNIE)" /></span>
								<p class="thum"><a href="${artisturl}${artistimgname}" image-view="true"><img src="//image.genie.co.kr/imageg/web/btn/thum_view.gif" alt="크게보기" /></a></p>
						</a>
					
					
				
			</div>
			<!-- '국적의 값이 없거나 '불명'인 경우 국적 비노출 - 2015.04.29 -->
			<div class="info-zone">
				<h2 class="name">${artistname}</h2>
				<ul class="info-data">
					<li><span class="attr"><img src="//image.genie.co.kr/imageg/web/detail/txt_1.png" alt="활동유형" /></span> <span class="value">${artgender}/${activity}</span></li>
					<li><span class="attr"><img src="//image.genie.co.kr/imageg/web/detail/txt_2.png" alt="활동연대" /></span> <span class="value">${activityyear}</span></li>
					<li><span class="attr"><img src="//image.genie.co.kr/imageg/web/detail/txt_3.png" alt="데뷔" /></span> <span class="value">${debutyear}년</span></li>
					
						<li><span class="attr"><img src="//image.genie.co.kr/imageg/web/detail/txt_4.png" alt="국적" /></span> <span class="value">${artnational}</span></li>
					

				</ul>


			</div>

		</div>

			
				<script type="text/javascript">
					// 펼쳐보기
					(function(){
						var descWrap02 = $('.artist-edm-list');
						var defaultHeight02 = descWrap02.height();
						var btnText02 = $('.artist-edm-released .more-link a').text();
						$('.artist-edm-released .more-link').bind('click', function(){
							descWrap02.animate({
								height : $(this).find('a').text() == '닫기' ? defaultHeight02 : descWrap02.find('.artist-edm-list-insert').height()
							}, 300, function(){
								if ( $('.artist-edm-released .more-link a').text() == '닫기') {
									$('.artist-edm-released .more-link a').text(btnText02);
									$('.artist-edm-released .more-link a').removeClass('opened');
								} else {
									$('.artist-edm-released .more-link a').text('닫기');
									$('.artist-edm-released .more-link a').addClass('opened');
								}
							});

							return false;
						});

					})();

					//말줄임
					$(document).ready(function(){
						//$('.artist-edm-list a span').ellipsis();
					});
				</script>
			</div>
		
		<!--E. EDM 매거진 -->


		<!-- 멤버 추가 08.03 -->
		


		<!-- 참여그룹 추가 08.03 -->
		
			<div class="artist-group-released">
				<div class="tit-box">
				<c:if test="${arttype eq 1}">
					<h3><img src="//image.genie.co.kr/imageg/web/title/h3_group.gif" alt="참여그룹" /></h3>
					</c:if>
					<c:if test="${arttype eq 0}">
					<h3><img src="//image.genie.co.kr/imageg/web/title/h3_member.gif" alt="멤버" /></h3>
				</c:if>
				</div>
				<div class="artist-group-list desc-cont_2">
					<ul class="db-insert_2">
							
			 	 	  		<c:forEach items="${Artistm}" var="Artistm" varStatus="status">
							<li><a href="#" onclick="fnViewArtist(80539764); return false;" ontouchend="fnViewArtist(80539764); return false;">
								<span class="cover"><img onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_artist_200.gif';" src="${Artistm.imgDTO.url}${Artistm.imgDTO.imgname}" alt="${Artistm.artistname_m}"><span class="bg_cover"></span></span>
								<span class="group_name"><span class="table"><span class="cell"><span class="elis">${Artistm.artistname_m}</span></span></span></span>
							</a>
							</li>
							</c:forEach>
							 
					  
					</ul>
				</div>
				<div class="desc-expand_2">
					<a href="#" class="open-close radius"><span>펼쳐보기</span></a>
				</div>
			</div>
			<script type="text/javascript">
				(function(){
					var descWrap_2 = $('.desc-cont_2');
					var defaultHeight_2 = descWrap_2.height();
					var btnText_2 = $('.desc-expand_2 span').text();
					var insert_height = $('.db-insert_2').height();
					$('a.open-close').bind('click', function(){
						descWrap_2.animate({
							height : $(this).find('span').text() == '닫기' ? defaultHeight_2 : descWrap_2.find('.db-insert_2').height()
						}, 300, function(){
							if ( $('.desc-expand_2 span').text() == '닫기') {
								$('.desc-expand_2 span').text(btnText_2);
								$('.desc-expand_2 .open-close').removeClass('opened');
							} else {
								$('.desc-expand_2 span').text('닫기');
								$('.desc-expand_2 .open-close').addClass('opened');
							}
						});
						return false;
					});
					if (insert_height < 160){
						$('.desc-expand_2').hide();
					}
				})();
			</script>
		


		<!--S. 아티스트 앨범 리스트 -->
		
			<div class="artist-album-released" id="artist-album">
				<div class="tit-box">
					<h3><img src="//image.genie.co.kr/imageg/web/title/h3_albums.gif" alt="발매 앨범" /></h3>
					<span class="article">(총 <strong>${albumcount}</strong>개)</span>
					<div id="albumFrontBtn" class="roll-nav">
						
					</div>
					<div class="more-link"><a href="#" onclick="fnGoArtistTab('album', '80539780');return false;" ontouchend="fnGoArtistTab('album', '80539780');return false;">전체 보기</a></div>
				</div>

					<div class="album-type-1 default-scroll">
		<div class="wrap" id="albumFrontLsit">
			<ul>
			
			<c:forEach items="${album}" var="album" varStatus="status">
				<li>
					<a href="#" onclick="fnViewAlbumLayer(84344886); return false;" ontouchend="fnViewAlbumLayer(84344886); return false;"  class="album-thumb">
						<span class="cover"><img src="${album.imgDTO.url}${album.imgDTO.imgname}" alt="${album.albumname}" /></span><span class="frame"></span>
					</a>
					<span class="date">${album.releasedate}</span>
					<a href="#" onclick="fnViewAlbumLayer(84344886); return false;" ontouchend="fnViewAlbumLayer(84344886); return false;"  class="artist">${album.albumname}</a>
					<span class="total-song">${album.songcount}곡</span>
				</li>
			</c:forEach>
			
			</ul>
		</div>
	</div>


			</div>
			<hr class="hr">
		
		<!--E. 아티스트 앨범 리스트 -->

		<!--S. 히트송 리스트 -->
		
			<div class="songlist-box">
				<div class="tit-box">
					<h3><img src="//image.genie.co.kr/imageg/web/title/h3_fav_song_r1.gif" alt="인기곡" /></h3>
					<span class="article">(총 <strong>${bestsongcount}</strong>개)</span>
					<div class="more-link"><a href="#" onclick="fnGoArtistTab('song', '80539780');return false;" ontouchend="fnGoArtistTab('song', '80539780');return false;">전체 보기</a></div>
				</div>
				<div class="music-list-wrap">
					<div class="toolbar">
						<input type="checkbox" id="" class="all-check" title="전체 선택" />
						<a href="#" class="btn btn-listen" title="재생" onclick="fnPlayArrSong(1); return false;" ontouchend="fnPlayArrSong(3); return false;">듣기</a>
						<a href="#" class="btn btn-add" title="추가" onclick="fnPlayArrSong(3); return false;" ontouchend="fnPlayArrSong(3); return false;"><span class="hide">재생목록에 </span>추가</a>
						<button type="button" class="btn btn-album" id="add_my_album_list" title="담기" onclick="fnAddMyAlbumForm('#add_my_album_list', fnSelectArrSongID(),20, 20);return false;" ontouchend="fnAddMyAlbumForm('#add_my_album_list', fnSelectArrSongID(),20, 20);return false;"><span class="hide">마이앨범에 </span>담기</button>

						<div class="check-length"><em>0</em>곡 선택</div>
					</div>

					<table class="list-wrap">
						<caption>곡 리스트</caption>
						<thead>
						<tr>
							<th scope="col" class="hd-check"><span class="hide">선택</span></th>
							<th scope="col" class="hd-number">번호</th>
							<th scope="col" class="hd-album"><span class="hide">앨범이미지</span></th>
							<th scope="col" class="hd-link"><span class="hide">곡정보 이동 링크</span></th>
							<th scope="col" class="hd-info">곡정보</th>
							<th scope="col" class="hd-btns">듣기</th>
							<th scope="col" class="hd-btns">추가</th>
							<th scope="col" class="hd-btns">담기</th>
						</tr>
						</thead>
						<tbody>
						
						<c:forEach items="${songbest}" var="songbest" varStatus="status">
						
							<tr class="list" songid="103797393">
								<td class="check"><input type="checkbox" class="select-check" title="you & me"></td>
								<td class="number">${songbest.songrating}</td>
								<td><a href="#" class="cover" onclick="fnViewAlbumLayer('84344886');return false;"><span class="mask"></span><img src="${songbest.imgDTO.url}${songbest.imgDTO.imgname}" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_600.gif';" alt="You & Me"/></a></td>
								<td class="link"><a href="" class="btn-basic btn-info" onclick="fnViewSongInfo('103797393');return false;" ontouchend="fnViewSongInfo('103797393');return false;">곡 제목 정보 페이지</a></td>
								<td class="info">
									
										
											<a href="#" class="title ellipsis" title="You & Me" onclick="fnPlaySong('103797393;','1');return false;">
												<span class="icon icon-title">TITLE</span>${songbest.songDTO.songname}</a>
									<a href="#" class="artist ellipsis" onclick="fnViewArtist('80539780');return false;" ontouchend="fnViewArtist('80539780');return false;">${songbest.artistname}</a>
									
										<div class="toggle-button-box" >
											<button type="button" class="btn artist-etc" onclick="fnRelationArtistList('103797393');">외</button>
											<ul class="list" id="RelationArtist_103797393"></ul>
										</div>
									
									<i class="bar">|</i>
									<a href="#" class="albumtitle ellipsis" onclick="fnViewAlbumLayer('84344886');return false;" ontouchend="fnViewAlbumLayer('84344886');return false;">${songbest.albumDTO.albumname}</a>
								</td>

										<td class="btns"><a href="#" class="btn-basic btn-listen" title="재생" onclick="fnPlaySong('103797393;' ,'1'); return false;" >듣기</a></td>
										<td class="btns"><a href="#" class="btn-basic btn-add" title="추가" onclick="fnPlaySong('103797393;','3');return false;">재생목록에 추가</a></td>

								
								<td class="btns">
									<button type="button" class="btn-basic btn-album" title="담기" songId="103797393" id="add_my_album_103797393" onclick="fnAddMyAlbumForm('#add_my_album_103797393' , '103797393' ,10, 10);return false;">플레이리스트에 담기</button>
								</td>						
							</tr>
							
								</c:forEach>					
						
						</tbody>
					</table>
					<div class="toolbar">
						<input type="checkbox" id="" class="all-check" title="전체 선택" />
						<a href="#" class="btn btn-listen" title="재생" onclick="fnPlayArrSong(1); return false;" ontouchend="fnPlayArrSong(3); return false;">듣기</a>
						<a href="#" class="btn btn-add" title="추가" onclick="fnPlayArrSong(3); return false;" ontouchend="fnPlayArrSong(3); return false;"><span class="hide">재생목록에 </span>추가</a>
						<button type="button" class="btn btn-album" id="add_my_album_list2" title="담기" onclick="fnAddMyAlbumForm('#add_my_album_list2', fnSelectArrSongID(),20, 20);return false;" ontouchend="fnAddMyAlbumForm('#add_my_album_list2', fnSelectArrSongID(),20, 20);return false;"><span class="hide">마이앨범에 </span>담기</button>
						<div class="check-length"><em>0</em>곡 선택</div>
					</div>
				</div>
				<script type="text/javascript">
                    //<![CDATA[
                    var musicList = new MUSIC_LIST();
                    musicList.hook = $('.songlist-box .music-list-wrap');
                    musicList.option = {
                        scroll:true,
                        multiple:true
                    };
                    musicList._load();

                    var artist_etc_layer = new FG_toggleLayer($('.artist_etc_layer'), {
                        clickHide : true,
                        mode : 'artistLayer'
                    }, function(){
                        //call back
                    });
                    //뮤직 비디오 disabled 비활성화 처리
                    $('.lyr-mv .disabled').css({ 'pointer-events':'none'});

                    //곡 리스트 순회해서 좋아요 여부 체크 (추후 적용)
					//fnSetLikeList(iMemUno,'SONG_LIKE','<= sSongIDs >', '.songlist-box .music-list-wrap');
					//]]>
				</script>
			</div>
		


			<hr class="hr">
		
		<!--E. 뮤직비디오 리스트 -->

		<!-- S. 아티스트 프로필  -->
		
			<div class="detail-descript">
				<div class="tit-box">
					<h3><img src="//image.genie.co.kr/imageg/web/title/h3_artist_info.gif" alt="아티스트 소개" /></h3>
				</div>
				<div class="desc-cont">
					<div class="db-insert">
						<div><span>${artintro}</span></div>
					</div>
				</div>
				<div class="desc-expand">
					<a href="#" class="open-close radius"><span>펼쳐보기</span></a>
				</div>
			</div>
			<script type="text/javascript">
				(function(){
					var descWrap = $('.desc-cont');
					var defaultHeight = descWrap.height();
					var btnText = $('.desc-expand span').text();
					$('a.open-close').bind('click', function(){
						descWrap.animate({
							height : $(this).find('span').text() == '닫기' ? defaultHeight : descWrap.find('.db-insert').height()
						}, 300, function(){
							if ( $('.desc-expand span').text() == '닫기') {
								$('.desc-expand span').text(btnText);
								$('.desc-expand .open-close').removeClass('opened');
							} else {
								$('.desc-expand span').text('닫기');
								$('.desc-expand .open-close').addClass('opened');
							}
						});

						return false;
					});

					if ($('html').hasClass('ie7') || $('html').hasClass('ie8')) $('<span class="fade-hide"></span>').appendTo(descWrap);
				})();
			</script>
			<hr class="hr">
		

<div class="reply_area">
	<div class="comment-title tit-box">
		<h3><span class="ico_reply"></span> 댓글</h3>
		<span class="article">(총 <strong id="replyTotalCnt">0</strong>개)</span>
	</div>

	<div class="page-comment" id="reply_wrap">
	<h4 class="hide">댓글 작성</h4>
		<form class="input-area">
			<INPUT TYPE="hidden" name="h_page" id="h_page">
			<div class="field">
			<div class="input-wrapper">
				<textarea id="commentTxt" class="placeholder" placeholder="명예훼손, 개인정보 유출, 인격권 침해, 허위사실 유포 등은 이용약관 및 관련법률에 의해 제재를 받을 수 있습니다.건전한 댓글문화 정착을 위해 이용에 주의를 부탁드립니다."></textarea>
				<span class="commit radius" id="commentSubmit" onclick="commentRegister()" style="vertical-align:middle;height:40px;padding-top:20px; cursor:pointer;">댓글 등록</span>
			</div>
			</div>
			<span class="string"><em id="repleByte" >0</em> / 140자</span>
		</form>
		<div class="commnt-list"></div>
		<div class="page-nav"></div>
	</div>
</div>





<section id="comments" class="commentsCommon sectionPadding" cmt_area="comment_group" cmt_ui="mtype" cmt_comment_group_id="187118527" cmt_content_type="ARTIST" cmt_target_id="80265678" cmt_page="1" cmt_sort_type="regdate" cmt_direct_my_comment_id="0" cmt_direct_comment_reply_id="0" cmt_limit_comment_content_min_length="1" cmt_limit_comment_content_max_length="300" cmt_limit_reply_content_min_length="1" cmt_limit_reply_content_max_length="300" cmt_limit_oneday_comment="10" cmt_limit_oneday_reply="20" cmt_comment_count="200" cmt_total_count="319" cmt_last_page="10" cmt_history_page_min="1" cmt_history_page_max="1">
	<div class="innerContainer">
		
		
		<p class="sorting">
			<button cmt_area="sortTypeBtn" cmt_sort_type_option="regdate" class="selected"><span class="icon"></span>등록순</button>
			<button cmt_area="sortTypeBtn" cmt_sort_type_option="good_cnt"><span class="icon"></span>호감순</button>
			<button cmt_area="sortTypeBtn" cmt_sort_type_option="reply"><span class="icon"></span>답글순</button>
		</p>


		<ul class="listComments" cmt_area="commentlist">
		
		
		<c:forEach items="${comment}" var="comment" varStatus="status">
		<li cmt_area="comment" type="user" my_comment_id="8201305" style="margin-top: 0px;">

	<span class="user" name="name">
		
			${comment.comnickname}
	</span>
	    <div class="comment">
	        <p name="comment">
	            ${comment.ccontent}
	        </p>

	        
	        	<time datetime="">${comment.cdate}</time>
	        	
	        	<c:if test="${user.membernum == comment.memberDTO.membernum and user.authority == 1}">
				<a href="javascript:void(0)" class="btnDelete" cmt_area="commentDeleteBtn" title="삭제">삭제</a>
				</c:if>
				
				<c:if test="${user.membernum == comment.memberDTO.membernum and user.authority == 1}">
				<a href="javascript:;" onclick="bugs.comment.cmtReport_comment(this)" class="btnReport"><span class="bar"></span>수정</a>
				</c:if>
				
				<c:if test="${user.membernum != comment.membernum}">
	        	<a href="javascript:;" onclick="bugs.comment.cmtReport_comment(this)" class="btnReport"><span class="bar"></span>신고</a>
				</c:if>
				
	        	<a href="javascript:void(0)" id="btnReply" class="btnReply" cmt_area="replyEditShowBtn" onclick="toggleReplyForm(${status.index})"><span class="bar"></span>답글쓰기</a>
						        	
	
				
	    </div>


			<div class="btnLikeArea">
				<button class="btnNormal btnLike " onclick="bugs.comment.cmtUR_comment_good(this);bugs.wiselog.area('com_list_02_01')"><em>공감</em> <span class="blind">공감한 수</span><span name="good_cnt">${comment.comlike}</span></button>
				<button class="btnNormal btnDislike " onclick="bugs.comment.cmtUR_comment_bad(this);bugs.wiselog.area('com_list_02_02')"><em>비공감</em> <span class="blind">비공감한 수</span><span name="bad_cnt">${comment.combad}</span></button>
			</div>
			
			<div class="replyWrite" id="replyWrite_${status.index}" cmt_area="replyEdit" style="display:none;">
			    <span class="iconReply"></span>
			    <fieldset class="writeComment">
			        <legend>댓글 등록 폼</legend>
			        <div class="cover"><textarea id="replyTxt" cmt_area="replyContentEdit" cols="100" rows="10" title="댓글 입력"></textarea></div>
			        <button class="btnWrite" cmt_area="replyWriteBtn">등록</button>
			        <span class="remain" cmt_area="contLenMonitor">(<em cmt_area="current">0</em>/<em cmt_area="max">300</em>)</span>
			    </fieldset>
			</div>
	   
	   
	   
      <ul class="reply">
      
      <c:forEach items="${reply}" var="reply" varStatus="status">
      <c:if test="${comment.comnum == reply.comnum}">
        <li cmt_area="reply" comment_reply_id="4849889">

	<span class="user" name="name">
		
			${reply.renickname}
	</span>
            <div class="comment">
                <p name="comment">
                
                ${reply.rcontent}
                
                </p>

                <time datetime="">${reply.rdate}</time>
                
                <c:if test="${user.membernum == reply.r_membernum and user.authority == 1}">
                <a href="javascript:void(0)" class="btnDelete" cmt_area="commentDeleteBtn" title="삭제">삭제</a>
                </c:if>
                
                <c:if test="${user.membernum == comment.memberDTO.membernum and user.authority == 1}">
				<a href="javascript:;" onclick="bugs.comment.cmtReport_comment(this)" class="btnReport"><span class="bar"></span>수정</a>
				</c:if>
                
                <c:if test="${user.membernum != reply.r_membernum}">
                <a href="javascript:;" onclick="bugs.comment.cmtReport_reply(this);bugs.wiselog.area('com_list_02_03')" class="btnReport"><span class="bar"></span>신고</a>
                </c:if>
                
            </div>


				<div class="btnLikeArea">
					<button class="btnNormal btnLike " onclick="bugs.comment.cmtUR_reply_good(this)"><em>공감</em> <span class="blind">공감한 수</span><span name="good_cnt">${reply.relike}</span></button>
					<button class="btnNormal btnDislike " onclick="bugs.comment.cmtUR_reply_bad(this)"><em>비공감</em> <span class="blind">비공감한 수</span><span name="bad_cnt">${reply.rebad}</span></button>
				</div>
        </li>
        </c:if>
        </c:forEach>
        
      </ul>
    </li>
    </c:forEach>

</ul>



		<p class="btns" cmt_area="nextPageBtnArea" style="">
			<a href="javascript:;" class="btnMore" cmt_area="nextPageBtn">이전 댓글</a>
		</p>
	</div>
</section>
    			</div>

<script>

function commentRegister() {
	  // 첫 번째 스크립트로부터 세션에 저장된 유저 정보 가져오기
	  var user = "${user}";

	  // 유저 정보가 없는 경우
	  if (user === "") {
	    alert("로그인 후 이용하실 수 있습니다.");
	    // 로그인 화면(LoginView)을 팝업으로 열기
	    loginPopup();
	    } else {
	        var ccontent = document.getElementById("commentTxt").value;
	        var artistnum = "${artistnum}";
	        var comnickname = "${user.nickname}";

	        if (ccontent.trim() === "") {
	            alert("내용을 작성해 주세요."); // Display an alert if the textarea is empty
	        } else {
	            // Send the AJAX request to post the comment
	            $.ajax({
	                type: 'post',
	                url: 'commentSuccess',
	                contentType: 'application/json',
	                data: JSON.stringify({
	                    membernum: "${user.membernum}",
	                    artistnum: artistnum,
	                    ccontent: ccontent,
	                    comnickname : comnickname
	                }),
	            });
	        }
	    }
	}

function loginPopup() {
    PopupCenter("${kjj}/board/Loginview", "popLoginSecure", 470, 382);
}

window.addEventListener("message", function (event) {
    if (event.data === "${kjj}/") {
        window.location.href = "${kjj}/"; // 원하는 경로로 이동
    }
});



document.addEventListener("DOMContentLoaded", function() {
    var commentTxt = document.getElementById("commentTxt");
    var repleByte = document.getElementById("repleByte");

    // Add an event listener to the textarea
    commentTxt.addEventListener("input", function() {
        var maxLength = 140; // Set the maximum character count

        // Get the current character count
        var currentCount = commentTxt.value.length;

        // Check if the current count exceeds the maximum length
        if (currentCount > maxLength) {
            commentTxt.value = commentTxt.value.substring(0, maxLength); // Truncate the text
            currentCount = maxLength; // Update the character count

            // Display an alert message when the character limit is exceeded
            alert("제한 글자수를 초과하였습니다");
        }

        // Update the content of the repleByte element
        repleByte.textContent = currentCount + " / " + maxLength + "자";
    });
});
</script>


<script>

function toggleReplyForm(index) {
    event.preventDefault(); // 이벤트의 기본 동작을 막음
    var replyForm = document.getElementById('replyWrite_' + index);
    if (replyForm.style.display === 'none' || replyForm.style.display === '') {
        replyForm.style.display = 'block'; // 폼을 보이게 함
    } else {
        replyForm.style.display = 'none'; // 폼을 가리기
    }
}

var user = "${user}";

// 유저 정보가 없는 경우
if (user === "") {
  alert("로그인 후 이용하실 수 있습니다.");
  // 로그인 화면(LoginView)을 팝업으로 열기
  loginPopup();
  } else {
      var rcontent = document.getElementById("replyTxt").value;
      var comnum = "${comment.comnum}";
      var comnickname = "${user.nickname}";

      if (rcontent.trim() === "") {
          alert("내용을 작성해 주세요."); // Display an alert if the textarea is empty
      } else {
          // Send the AJAX request to post the comment
          $.ajax({
              type: 'post',
              url: 'replySuccess',
              contentType: 'application/json',
              data: JSON.stringify({
                  membernum: "${user.membernum}",
                  comnum: comnum
                  rcontent: rcontent,
                  renickname : renickname
              }),
          });
      }
 
	}
</script>

<%@ include file="include/footer.jsp" %>
</html>