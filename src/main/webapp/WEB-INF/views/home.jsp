<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">

<%@ include file="include/header.jsp" %>

<div id="body-content">
	<!-- //최신앨범 -->
	<div class="recent-music">
		<h2 class="sub-title"><a href="/newest/song">최신음악</a></h2>
<ul class="tab clearfix">
    <li><button type="button" genre_cd="all" class="active">종합</button></li>
    <li><button type="button" genre_cd="l010">국내</button></li>
    <li><button type="button" genre_cd="l020">국외</button></li>
</ul>

<!-- 최신음악:종합 -->
<div class="slide-wrapper active">
    <ul class="bxslider">
        <li>
            <ul class="list-album clearfix">
                
                    
                        
                        <li album_id="84194159" class="list-1">
                            
                            
                            
                            

                            <div class="cover">
                                <span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/194/159/84194159_1693205441679_1_200x200.JPG" alt="소용없어 거짓말 OST Part 5" onerror="this.src=&#39;//image.genie.co.kr//imageg/web/common/blank_600.gif&#39;" />
                            </div>

                            <a href="#" class="artist" onclick="fnViewArtist(82131555); return false;"><span class="tit">조유리 &amp; 성한빈 (ZEROBASEONE)</span></a>
                            <div class="info-album">
                                <span class="mask"></span>
                                <a href="#" class="artist" artist_id="82131555" artist_img="/Y/IMAGE/IMG_ALBUM/084/194/159/84194159_1693205441679_1_68x68.JPG" onclick="fnViewArtist(82131555); return false;">조유리 &amp; 성한빈 (ZEROBASEONE)</a>
                                <a href="#" class="album-title ellipsis" onclick="fnViewAlbumLayer(84194159); return false;">소용없어 거짓말 OST Part 5</a>
                                <div class="btns">
                                    <a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlayAlbum(84194159, 1); return false;">듣기</a>
                                    <a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlayAlbum(84194159, 3); return false;">재생목록에 추가</a>
                                </div>
                            </div>
                        </li>
                    
                
                
                    
                        
                        <li album_id="84207613" class="list-2">
                            
                            
                            
                            

                            <div class="cover">
                                <span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/207/613/84207613_1693286007634_1_200x200.JPG" alt="언젠간 괜찮아질 이야기" onerror="this.src=&#39;//image.genie.co.kr//imageg/web/common/blank_600.gif&#39;" />
                            </div>

                            <a href="#" class="artist" onclick="fnViewArtist(82138077); return false;"><span class="tit">헤이즈 (Heize) &amp; 정승환</span></a>
                            <div class="info-album">
                                <span class="mask"></span>
                                <a href="#" class="artist" artist_id="82138077" artist_img="/Y/IMAGE/IMG_ALBUM/084/207/613/84207613_1693286007634_1_68x68.JPG" onclick="fnViewArtist(82138077); return false;">헤이즈 (Heize) &amp; 정승환</a>
                                <a href="#" class="album-title ellipsis" onclick="fnViewAlbumLayer(84207613); return false;">언젠간 괜찮아질 이야기</a>
                                <div class="btns">
                                    <a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlayAlbum(84207613, 1); return false;">듣기</a>
                                    <a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlayAlbum(84207613, 3); return false;">재생목록에 추가</a>
                                </div>
                            </div>
                        </li>
                        
                        </ul>
                        </li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        </body>
                        
<div class="banner">
	
	<div class="banner-rolling">
		<ul class="bxslider">
		
		<li><a href="https://www.genie.co.kr/magazine/subMain?ctid=1&mgz_seq=13499"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_2023828114840.jpg" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="" /></a></li>
		
		<li><a href="https://www.genie.co.kr/magazine?ctid=40"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_20237518730.png" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="" /></a></li>
		
		<li><a href="https://www.genie.co.kr/magazine/subMain?ctid=12&mgz_seq=13489"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_2023825103142.jpg" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="" /></a></li>
		
		<li><a href="https://campaign.genie.co.kr/travellist"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpbhF3%2FbtssBqRitGP%2F7OQoAPnXco5LCKkkkgDG1K%2Fimg.png" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="" /></a></li>
		
		
		</ul>
	</div>
	
	
	<div class="banner-mini"><a href="https://www.genie.co.kr/magazine/subMain?ctid=1&mgz_seq=13500&pg=1"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_202382415141.jpg" alt="리라" /></a>	</div>
	
</div>

<script>
//<![CDATA[
$(document.body).ready(function() {
	//BANNER
	var banner_slider = $('.banner .bxslider').bxSlider({
		auto: true,
		autoControls: false,
		controls: false,
		mode: 'fade',
		pager:true,
		onSliderLoad: function() {
			$('.banner .bx-controls').append('<button type="button" class="swiper-play pause">일시정지</button>');
			$('.banner .bx-pager-link').append('번째 이벤트');

			$('.banner .swiper-play').on('click', function(e) {
				if($(this).hasClass('pause')) {
					banner_slider.stopAuto();
					$(this).removeClass('pause').text('재생');
				} else {
					banner_slider.startAuto();
					$(this).addClass('pause').text('일시정지');
				}
			});
		}
	}).on('keydown', function(e) {
		if($('.banner .swiper-play').hasClass('pause')) $('.banner .swiper-play').trigger('click');
	});
});
//]]>
</script>

		<div class="main-wrap clearfix">
		<!-- CHART -->
		<div class="chart">
			<!-- //실시간 차트 -->
			<!-- CHART -->
<script src="/resources/commons/jscript/raphael-min.js" type="text/javascript"></script>
<div class="chart">
	<h2 class="sub-title"><a href="/chart/top200">실시간 차트</a></h2>
	<p class="date">2023.08.30&nbsp;02:00</p>
<div class="music-list-wrap main-chart-list">
	<span class="balloon active"><span class="hide">더보기 버튼으로 </span>순위변동 한눈에 보기</span>
<input type="hidden" name="sAllSongID" id="sAllSongID" value="94535712;102067588;96549502;96696809;90077755;96696807;99014222;99014221;96696810;96696811;96696808;96696814;96696815;96696817;96696813;102664199;101407645;102724316;102563175;102605425;103260086;102951296;98390367;97095129;101268096;98483245;100085411;101686193;103151984;98190235;97122560;97646911;97646917;90788471;97646908;102244178;90788469;97646918;97646922;97646909;97582507;101593941;103151985;99570005;96424586;101545646;101064898;100522029;98304971;90705547;103184513;102531243;103055328;102563174;102462319;103118489;99084793;86941521;101545644;99792734;96951358;85902364;103184514;97976355;88686378;98315344;103184515;97582506;101479700;82280761;87170806;102507880;103184512;99635005;100808684;101122641;96042335;96480048;100518373;98612518;100518375;102991427;96507978;93352112;102158282;101132628;90267663;102141355;100808685;100518372;100518378;100345896;100288016;101017693;100518371;100518377;100518374;100518376;95376934;101674536">
<input type="hidden" name="sTop10SongID" id="sTop10SongID" value="94535712;102067588;96549502;96696809;90077755;96696807;99014222;99014221;96696810;96696811">
<input type="hidden" name="sTop10DSongID" id="sTop10DSongID" value="94535712^102067588^96549502^96696809^90077755^96696807^99014222^99014221^96696810^96696811">
<input type="hidden" name="sTop100SongID" id="sTop100SongID" value="Y">
	<!-- LIST -->
	<table class="list-wrap">
		<caption>곡 리스트</caption>
		<thead>
			<tr>
				<th scope="col" class="hd-number">순위</th>
				<th scope="col" class="hd-rank">순위변동</th>
				<th scope="col" class="hd-info">곡정보</th>
				<th scope="col" class="hd-btns">듣기</th>
				<th scope="col" class="hd-btns">추가</th>
				<th scope="col" class="hd-more">더보기</th>
			</tr>
		</thead>
		<tbody>
	<tr class="list hover">
		<td class="number">1</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>1<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82322594);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/322/594/82322594_1633671778123_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('94535712','1');return false;">사랑은 늘 도망가</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('94535712','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('94535712','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration ranking-1">
						<span class="ranking"><strong class="btn-radius">1위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 6시간 째</span>
					</div>
					<div id="svgContainer-1" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link ranking-1">
						<span class="active">1위</span>
						<span>2위</span>
						<span>3위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_94535712" class="btn-basic btn-album" songId=94535712 onclick="fnAddMyAlbumForm('#add_my_album_94535712','94535712',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('94535712');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_94535712">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('94535712',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">2</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>2<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(83883344);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/083/883/344/83883344_1685931006480_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('102067588','1');return false;">모래 알갱이</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('102067588','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('102067588','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration ranking-2">
						<span class="ranking"><strong class="btn-radius">2위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 4시간 째</span>
					</div>
					<div id="svgContainer-2" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link ranking-2">
						<span>1위</span>
						<span class="active">2위</span>
						<span>3위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_102067588" class="btn-basic btn-album" songId=102067588 onclick="fnAddMyAlbumForm('#add_my_album_102067588','102067588',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('102067588');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_102067588">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('102067588',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">3</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>2<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82638032);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/638/032/82638032_1651479062721_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('96549502','1');return false;">우리들의 블루스</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('96549502','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('96549502','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration ranking-3">
						<span class="ranking"><strong class="btn-radius">3위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 5시간 째</span>
					</div>
					<div id="svgContainer-3" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link ranking-3">
						<span>2위</span>
						<span class="active">3위</span>
						<span>4위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_96549502" class="btn-basic btn-album" songId=96549502 onclick="fnAddMyAlbumForm('#add_my_album_96549502','96549502',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('96549502');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_96549502">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('96549502',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">4</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>3<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82638032);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/638/032/82638032_1651479062721_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('96696809','1');return false;">다시 만날 수 있을까</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('96696809','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('96696809','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration ranking-4">
						<span class="ranking"><strong class="btn-radius">4위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 4시간 째</span>
					</div>
					<div id="svgContainer-4" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link ranking-4">
						<span>3위</span>
						<span class="active">4위</span>
						<span>5위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_96696809" class="btn-basic btn-album" songId=96696809 onclick="fnAddMyAlbumForm('#add_my_album_96696809','96696809',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('96696809');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_96696809">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('96696809',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">5</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>3<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(81410156);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/410/156/81410156_1585878705990_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('90077755','1');return false;">이제 나만 믿어요</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('90077755','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('90077755','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration ranking-5">
						<span class="ranking"><strong class="btn-radius">5위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 4시간 째</span>
					</div>
					<div id="svgContainer-5" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link ranking-5">
						<span>4위</span>
						<span class="active">5위</span>
						<span>6위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_90077755" class="btn-basic btn-album" songId=90077755 onclick="fnAddMyAlbumForm('#add_my_album_90077755','90077755',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('90077755');return false;">다운로드</a>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">6</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>3<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82638032);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/638/032/82638032_1651479062721_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('96696807','1');return false;">무지개</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('96696807','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('96696807','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album reverse">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration">
						<span class="ranking"><strong class="btn-radius">6위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 3시간 째</span>
					</div>
					<div id="svgContainer-6" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link">
						<span>5위</span>
						<span class="active">6위</span>
						<span>7위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_96696807" class="btn-basic btn-album" songId=96696807 onclick="fnAddMyAlbumForm('#add_my_album_96696807','96696807',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('96696807');return false;">다운로드</a>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">7</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>3<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(83180213);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/083/180/213/83180213_1668490985544_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('99014222','1');return false;">Polaroid</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('99014222','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('99014222','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album reverse">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration">
						<span class="ranking"><strong class="btn-radius">7위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 3시간 째</span>
					</div>
					<div id="svgContainer-7" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link">
						<span>6위</span>
						<span class="active">7위</span>
						<span>8위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_99014222" class="btn-basic btn-album" songId=99014222 onclick="fnAddMyAlbumForm('#add_my_album_99014222','99014222',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('99014222');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_99014222">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('99014222',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">8</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>4<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(83180213);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/083/180/213/83180213_1668490985544_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('99014221','1');return false;">London Boy</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('99014221','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('99014221','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album reverse">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration">
						<span class="ranking"><strong class="btn-radius">8위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 2시간 째</span>
					</div>
					<div id="svgContainer-8" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link">
						<span>7위</span>
						<span class="active">8위</span>
						<span>9위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_99014221" class="btn-basic btn-album" songId=99014221 onclick="fnAddMyAlbumForm('#add_my_album_99014221','99014221',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('99014221');return false;">다운로드</a>
						<span class="lyr-chart-mv lyr-mv" id="list-mv_99014221">
							<a href="#" class="btn-basic btn-mv" title="새창 열림" onclick="fnPlayMv('99014221',3);return false;">뮤직비디오 보기</a>
						</span>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">9</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>2<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82638032);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/638/032/82638032_1651479062721_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('96696810','1');return false;">아버지</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('96696810','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('96696810','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album reverse">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration">
						<span class="ranking"><strong class="btn-radius">9위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 2시간 째</span>
					</div>
					<div id="svgContainer-9" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link">
						<span>8위</span>
						<span class="active">9위</span>
						<span>10위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_96696810" class="btn-basic btn-album" songId=96696810 onclick="fnAddMyAlbumForm('#add_my_album_96696810','96696810',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('96696810');return false;">다운로드</a>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
	<tr class="list">
		<td class="number">10</td>
		<td class="td-rank"><span class='rank'><span class=' rank-up '>5<span class="rank-txt">단계 상승</span></span></span></td>
		<td class="info">
			<a href="#" class="cover" onclick="fnViewAlbumLayer(82638032);return false;"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/638/032/82638032_1651479062721_1_140x140.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="앨범 제목이 들어갑니다." /></a>
			<a href="#" class="title ellipsis" title="새창 열림" onclick="fnPlaySong('96696811','1');return false;">A bientot</a>
			<a href="#" class="artist ellipsis" onclick="fnViewArtist(80539618); return false;">임영웅</a>
		</td>
		<td class="btns"><a href="#" class="btn-basic btn-listen" title="새창 열림" onclick="fnPlaySong('96696811','1'); return false;">듣기</a></td>
		<td class="btns"><a href="#" class="btn-basic btn-add" title="새창 열림" onclick="fnPlaySong('96696811','3'); return false;">재생목록에 추가</a></td>
		<td class="more">
			<div class="toggle-button-box duplicate-add-album reverse">
				<button type="button" class="btn btn-basic btn-more">더보기</button>
				<div class="list">
					<div class="duration">
						<span class="ranking"><strong class="btn-radius">10위</strong>연속 2시간 째</span>
						<span class="top10"><strong class="btn-radius">TOP10</strong>연속 2시간 째</span>
					</div>
					<div id="svgContainer-10" class="svg-container"></div>
					<div class="time">
						<span class="hour">h</span>
<span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>00</span><span>01</span><span>02</span>
					</div>
					<div class="ranking-link">
						<span>8위</span>
						<span>9위</span>
						<span class="active">10위</span>
					</div>

					<div class="more-btns">
						<button type="button" id="add_my_album_96696811" class="btn-basic btn-album" songId=96696811 onclick="fnAddMyAlbumForm('#add_my_album_96696811','96696811',0,30);return false;">마이앨범에 담기</button>
						<a href="#" class="btn-basic btn-down" title="새창 열림" onclick="fnDownSong('96696811');return false;">다운로드</a>
					</div>
					<button type="button" class="close btn-close">닫기</button>
				</div>
			</div>
		</td>
	</tr>
		</tbody>
	</table>
	<!--// LIST -->
	<!-- TOOLBAR -->
	<div class="toolbar">
		<a href="#" class="btn btn-listen" title="새창 열림" onclick="fnPlaySong(fnTop10SongID('S') ,1); return false;">전체듣기</a>
		<a href="#" class="btn btn-add" title="새창 열림" onclick="fnPlaySong(fnTop10SongID('S') ,3); return false;"><span class="hide">재생목록에 </span>전체추가</a>
		<a href="/chart/top200" class="btn-right">TOP200 바로가기 &gt;</a>
	</div>
	<!--// TOOLBAR -->
</div>
</div>
<script>
$(function() {
	$('.main-chart-list .balloon').removeClass('active');
	$('.main-chart-list').on('mouseover','tr',function(e) {
		if($(this).closest('.main-chart-list').find('.toggle-button-box .list:visible').index() < 0) {
			$(this).siblings().removeClass('hover');
			$(this).addClass('hover');
		}
	});
	$('.main-chart-list .toggle-button-box .btn').click(function(e) {
		$(this).closest('tr').siblings().removeClass('hover');
		$(this).closest('tr').addClass('hover');
	});
	$('.main-chart-list .lyr-chart-mv').on('click', '.btn-mv', function(e) {
		var that = this;
		var list_mv = $(this).siblings('.list-mv');
		if(list_mv.index() > -1) {
			if(list_mv.is(':visible')) list_mv.removeClass('active');
			else	list_mv.addClass('active');
			e.preventDefault();
		}
	});
	$('.main-chart-list .add-my-album, .main-chart-list .btn-more').click(function(e) {
		if($('.main-chart-list .list-mv:visible').index() > -1) {
			$('.main-chart-list .list-mv:visible').siblings('.btn-mv').trigger('click');
		}
	});
});
function setGraph() {
var chartGraph1 = new GRAPH();
chartGraph1._init();
chartGraph1._hook = 'svgContainer-1'
chartGraph1._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph1._borderColor = ['#c2c2c2','#d62952','#c2c2c2'];
chartGraph1._dataPath[0] = ['M5 105.57754104 L43 105.52644648 81 106.0488144 119 107.08761192 157 109.0080864 195 106.32493008 233 103.87637423999999 271 100.76465304 309 98.02338648 347 91.72702152 385 85.58286192 423 85.58286192'];
chartGraph1._dataPath[1] = ['M5 103.33410216 L43 103.03429656 81 103.27953216 119 104.80928832000001 157 106.77230832000001 195 104.1835596 233 101.72070864 271 98.69461896 309 95.72426328 347 90.2411988 385 84.934524 423 84.934524'];
chartGraph1._dataPath[2] = ['M5 106.7130408 L43 106.24158528 81 106.69223496000001 119 108.13702176 157 109.93034496 195 107.44472952000001 233 104.47287336 271 101.26854263999999 309 97.78636344 347 91.54872264 385 85.0690848 423 85.0690848'];
chartGraph1._isMinimal = true;
chartGraph1._minimalIdx = 0;
chartGraph1._option = {w: 429, h: 131};
chartGraph1._load();
var chartGraph2 = new GRAPH();
chartGraph2._init();
chartGraph2._hook = 'svgContainer-2'
chartGraph2._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph2._borderColor = ['#c2c2c2','#0eb6e6','#c2c2c2'];
chartGraph2._dataPath[0] = ['M5 103.33410216 L43 103.03429656 81 103.27953216 119 104.80928832000001 157 106.77230832000001 195 104.1835596 233 101.72070864 271 98.69461896 309 95.72426328 347 90.2411988 385 84.934524 423 84.934524'];
chartGraph2._dataPath[1] = ['M5 106.7130408 L43 106.24158528 81 106.69223496000001 119 108.13702176 157 109.93034496 195 107.44472952000001 233 104.47287336 271 101.26854263999999 309 97.78636344 347 91.54872264 385 85.0690848 423 85.0690848'];
chartGraph2._dataPath[2] = ['M5 105.57754104 L43 105.52644648 81 106.0488144 119 107.08761192 157 109.0080864 195 106.32493008 233 103.87637423999999 271 100.76465304 309 98.02338648 347 91.72702152 385 85.58286192 423 85.58286192'];
chartGraph2._isMinimal = true;
chartGraph2._minimalIdx = 1;
chartGraph2._option = {w: 429, h: 131};
chartGraph2._load();
var chartGraph3 = new GRAPH();
chartGraph3._init();
chartGraph3._hook = 'svgContainer-3'
chartGraph3._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph3._borderColor = ['#c2c2c2','#47a879','#c2c2c2'];
chartGraph3._dataPath[0] = ['M5 106.7130408 L43 106.24158528 81 106.69223496000001 119 108.13702176 157 109.93034496 195 107.44472952000001 233 104.47287336 271 101.26854263999999 309 97.78636344 347 91.54872264 385 85.0690848 423 85.0690848'];
chartGraph3._dataPath[1] = ['M5 105.57754104 L43 105.52644648 81 106.0488144 119 107.08761192 157 109.0080864 195 106.32493008 233 103.87637423999999 271 100.76465304 309 98.02338648 347 91.72702152 385 85.58286192 423 85.58286192'];
chartGraph3._dataPath[2] = ['M5 107.29732704 L43 107.27636928 81 107.29962384000001 119 108.66172656 157 110.39746296 195 107.90148959999999 233 105.10480824 271 102.1878012 309 98.78185992 347 92.95530167999999 385 86.81837376 423 86.81837376'];
chartGraph3._isMinimal = true;
chartGraph3._minimalIdx = 2;
chartGraph3._option = {w: 429, h: 131};
chartGraph3._load();
var chartGraph4 = new GRAPH();
chartGraph4._init();
chartGraph4._hook = 'svgContainer-4'
chartGraph4._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph4._borderColor = ['#c2c2c2','#bfa77a','#c2c2c2'];
chartGraph4._dataPath[0] = ['M5 105.57754104 L43 105.52644648 81 106.0488144 119 107.08761192 157 109.0080864 195 106.32493008 233 103.87637423999999 271 100.76465304 309 98.02338648 347 91.72702152 385 85.58286192 423 85.58286192'];
chartGraph4._dataPath[1] = ['M5 107.29732704 L43 107.27636928 81 107.29962384000001 119 108.66172656 157 110.39746296 195 107.90148959999999 233 105.10480824 271 102.1878012 309 98.78185992 347 92.95530167999999 385 86.81837376 423 86.81837376'];
chartGraph4._dataPath[2] = ['M5 106.65791928 L43 106.913382 81 106.88783472 119 108.49142760000001 157 110.44936488 195 108.19126224 233 105.02212512 271 102.46017408 309 99.05048592 347 93.65859096 385 87.44224608 423 87.44224608'];
chartGraph4._isMinimal = true;
chartGraph4._minimalIdx = 3;
chartGraph4._option = {w: 429, h: 131};
chartGraph4._load();
var chartGraph5 = new GRAPH();
chartGraph5._init();
chartGraph5._hook = 'svgContainer-5'
chartGraph5._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph5._borderColor = ['#c2c2c2','#977aaf','#c2c2c2'];
chartGraph5._dataPath[0] = ['M5 107.29732704 L43 107.27636928 81 107.29962384000001 119 108.66172656 157 110.39746296 195 107.90148959999999 233 105.10480824 271 102.1878012 309 98.78185992 347 92.95530167999999 385 86.81837376 423 86.81837376'];
chartGraph5._dataPath[1] = ['M5 106.65791928 L43 106.913382 81 106.88783472 119 108.49142760000001 157 110.44936488 195 108.19126224 233 105.02212512 271 102.46017408 309 99.05048592 347 93.65859096 385 87.44224608 423 87.44224608'];
chartGraph5._dataPath[2] = ['M5 108.5210208 L43 108.48452016 81 108.61220184 119 109.84461384 157 111.37960824 195 108.7315164 233 105.94935672 271 103.59052152 309 99.76155504 347 93.94585008 385 87.93155759999999 423 87.93155759999999'];
chartGraph5._isMinimal = true;
chartGraph5._minimalIdx = 4;
chartGraph5._option = {w: 429, h: 131};
chartGraph5._load();
var chartGraph6 = new GRAPH();
chartGraph6._init();
chartGraph6._hook = 'svgContainer-6'
chartGraph6._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph6._borderColor = ['#c2c2c2','#a24416','#c2c2c2'];
chartGraph6._dataPath[0] = ['M5 106.65791928 L43 106.913382 81 106.88783472 119 108.49142760000001 157 110.44936488 195 108.19126224 233 105.02212512 271 102.46017408 309 99.05048592 347 93.65859096 385 87.44224608 423 87.44224608'];
chartGraph6._dataPath[1] = ['M5 108.5210208 L43 108.48452016 81 108.61220184 119 109.84461384 157 111.37960824 195 108.7315164 233 105.94935672 271 103.59052152 309 99.76155504 347 93.94585008 385 87.93155759999999 423 87.93155759999999'];
chartGraph6._dataPath[2] = ['M5 109.0391616 L43 109.05879816000001 81 109.1887068 119 110.2450464 157 111.76687704 195 109.42402392 233 106.20921792 271 103.83565704 309 99.87216576 347 94.24301471999999 385 87.9560232 423 87.9560232'];
chartGraph6._isMinimal = true;
chartGraph6._minimalIdx = 5;
chartGraph6._option = {w: 429, h: 131};
chartGraph6._load();
var chartGraph7 = new GRAPH();
chartGraph7._init();
chartGraph7._hook = 'svgContainer-7'
chartGraph7._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph7._borderColor = ['#c2c2c2','#a24416','#c2c2c2'];
chartGraph7._dataPath[0] = ['M5 108.5210208 L43 108.48452016 81 108.61220184 119 109.84461384 157 111.37960824 195 108.7315164 233 105.94935672 271 103.59052152 309 99.76155504 347 93.94585008 385 87.93155759999999 423 87.93155759999999'];
chartGraph7._dataPath[1] = ['M5 109.0391616 L43 109.05879816000001 81 109.1887068 119 110.2450464 157 111.76687704 195 109.42402392 233 106.20921792 271 103.83565704 309 99.87216576 347 94.24301471999999 385 87.9560232 423 87.9560232'];
chartGraph7._dataPath[2] = ['M5 109.0777464 L43 108.49535544 81 108.99825432 119 110.07935016 157 111.6790428 195 109.0556688 233 106.41592536 271 103.57009368 309 99.87216576 347 94.67885592 385 88.15174776 423 88.15174776'];
chartGraph7._isMinimal = true;
chartGraph7._minimalIdx = 5;
chartGraph7._option = {w: 429, h: 131};
chartGraph7._load();
var chartGraph8 = new GRAPH();
chartGraph8._init();
chartGraph8._hook = 'svgContainer-8'
chartGraph8._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph8._borderColor = ['#c2c2c2','#a24416','#c2c2c2'];
chartGraph8._dataPath[0] = ['M5 109.0391616 L43 109.05879816000001 81 109.1887068 119 110.2450464 157 111.76687704 195 109.42402392 233 106.20921792 271 103.83565704 309 99.87216576 347 94.24301471999999 385 87.9560232 423 87.9560232'];
chartGraph8._dataPath[1] = ['M5 109.0777464 L43 108.49535544 81 108.99825432 119 110.07935016 157 111.6790428 195 109.0556688 233 106.41592536 271 103.57009368 309 99.87216576 347 94.67885592 385 88.15174776 423 88.15174776'];
chartGraph8._dataPath[2] = ['M5 108.86277312 L43 109.18882344 81 109.34312784 119 110.58564432 157 112.05832656 195 109.41420096 233 106.52813832 271 103.80841992 309 100.22770032 347 94.59961224 385 88.32300696 423 88.32300696'];
chartGraph8._isMinimal = true;
chartGraph8._minimalIdx = 5;
chartGraph8._option = {w: 429, h: 131};
chartGraph8._load();
var chartGraph9 = new GRAPH();
chartGraph9._init();
chartGraph9._hook = 'svgContainer-9'
chartGraph9._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph9._borderColor = ['#c2c2c2','#a24416','#c2c2c2'];
chartGraph9._dataPath[0] = ['M5 109.0777464 L43 108.49535544 81 108.99825432 119 110.07935016 157 111.6790428 195 109.0556688 233 106.41592536 271 103.57009368 309 99.87216576 347 94.67885592 385 88.15174776 423 88.15174776'];
chartGraph9._dataPath[1] = ['M5 108.86277312 L43 109.18882344 81 109.34312784 119 110.58564432 157 112.05832656 195 109.41420096 233 106.52813832 271 103.80841992 309 100.22770032 347 94.59961224 385 88.32300696 423 88.32300696'];
chartGraph9._dataPath[2] = ['M5 109.61793576 L43 109.56806352 81 110.26965336 119 111.07352784 157 112.68115056 195 109.62539136000001 233 107.01833064 271 104.49616128 309 100.51212767999999 347 95.292996 385 88.44533472 423 88.44533472'];
chartGraph9._isMinimal = true;
chartGraph9._minimalIdx = 5;
chartGraph9._option = {w: 429, h: 131};
chartGraph9._load();
var chartGraph10 = new GRAPH();
chartGraph10._init();
chartGraph10._hook = 'svgContainer-10'
chartGraph10._arrTimeList = ['15','16','17','18','19','20','21','22','23','00','01','02'];
chartGraph10._borderColor = ['#c2c2c2','#a24416','#c2c2c2'];
chartGraph10._dataPath[0] = ['M5 108.86277312 L43 109.18882344 81 109.34312784 119 110.58564432 157 112.05832656 195 109.41420096 233 106.52813832 271 103.80841992 309 100.22770032 347 94.59961224 385 88.32300696 423 88.32300696'];
chartGraph10._dataPath[1] = ['M5 109.61793576 L43 109.56806352 81 110.26965336 119 111.07352784 157 112.68115056 195 109.62539136000001 233 107.01833064 271 104.49616128 309 100.51212767999999 347 95.292996 385 88.44533472 423 88.44533472'];
chartGraph10._dataPath[2] = ['M5 109.0777464 L43 108.49535544 81 108.99825432 119 110.07935016 157 111.6790428 195 109.0556688 233 106.41592536 271 103.57009368 309 99.87216576 347 94.67885592 385 88.15174776 423 88.15174776'];
chartGraph10._isMinimal = true;
chartGraph10._minimalIdx = 5;
chartGraph10._option = {w: 429, h: 131};
chartGraph10._load();
}
setTimeout("setGraph()",500);
</script>

			<!-- //실시간 차트 -->
		</div>
		<!--// CHART -->

		<!-- EVENT -->
		<div class="event">
			<h2 class="sub-title"><a href="/event">HOT &amp; NEW</a></h2>
			




<ul class="bxslider">
	
	<li><a href="#" onclick="fnBannerLogWriteAndGoUrl2('26304', 'MAIN_ROLL', '하현우', '/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113823.jpg', 'https://www.genie.co.kr/detail/albumInfo?axnm=84198562'); return false;"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113823.jpg" alt="하현우"></a></li>
	
	<li><a href="#" onclick="fnBannerLogWriteAndGoUrl2('26305', 'MAIN_ROLL', '신새벽', '/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113858.jpg', 'https://www.genie.co.kr/detail/albumInfo?axnm=84207204'); return false;"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113858.jpg" alt="신새벽"></a></li>
	
	<li><a href="#" onclick="fnBannerLogWriteAndGoUrl2('26306', 'MAIN_ROLL', '차세대', '/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113948.png', 'https://www.genie.co.kr/detail/albumInfo?axnm=84194267'); return false;"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829113948.png" alt="차세대"></a></li>
	
	<li><a href="#" onclick="fnBannerLogWriteAndGoUrl2('26307', 'MAIN_ROLL', '조하', '/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829114020.jpg', 'https://www.genie.co.kr/detail/albumInfo?axnm=84191231'); return false;"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Event/2023/8/29/ban_0_2023829114020.jpg" alt="조하"></a></li>
	
	<li><a href="#" onclick="fnBannerLogWriteAndGoUrl2('21970', 'MAIN_ROLL', '이용권 안내', '/Y/IMAGE/IMG_MUZICAT/IV2/Event/2022/12/20/ban_21970_20221220145328.png', 'http://www.genie.co.kr/buy/recommend'); return false;"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Event/2022/12/20/ban_21970_20221220145328.png" alt="이용권 안내"></a></li>
	
</ul>
<script>
//<![CDATA[
$(document.body).ready(function() {
	//EVENT
	var event_slider = $('.event .bxslider').bxSlider({
		auto: true,
		autoControls: false,
		pause: 5000,
		mode: 'fade',
		nextText: '다음 이벤트',
		prevText: '이전 이벤트',
		onSliderLoad: function() {
			$('<button type="button" class="swiper-play pause">일시정지</button>').insertAfter($('.event .bx-pager'));
			$('.event .bx-pager-link').append('번째 이벤트');
	
			$('.event .swiper-play').on('click', function(e) {
				if($(this).hasClass('pause')) {
					event_slider.stopAuto();
					$(this).removeClass('pause').text('재생');
				} else {
					event_slider.startAuto();
					$(this).addClass('pause').text('일시정지');
				}
			});
		}
	}).on('keydown', function(e) {
		if($('.event .swiper-play').hasClass('pause')) $('.event .swiper-play').trigger('click');
	});
});
</script>

<ul class="list-new-album">
	
	<li>
		<a href="https://www.genie.co.kr/detail/albumInfo?axnm=84193671">
			<div class="cover"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_2023829113046.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="까올리 플로우" /></div>
			<p class="category text-blue">NEW ALBUM</p>
			<p class="album-title ellipsis">까올리 플로우</p>
			<p class="artist ellipsis">릴호동</p>
		</a>
	</li>
	
	<li>
		<a href="https://www.genie.co.kr/detail/albumInfo?axnm=84207634">
			<div class="cover"><span class="mask"></span><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_202382911314.JPG" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_68.gif';" alt="문제야 & I'll be with u" /></div>
			<p class="category text-blue">NEW ALBUM</p>
			<p class="album-title ellipsis">문제야 & I'll be with u</p>
			<p class="artist ellipsis">아우릴고트 (OUREALGOAT)</p>
		</a>
	</li>
	
</ul>


		</div>
		<!--// EVENT -->
	</div>

	<!-- EDITOR -->
	<div class="editor">
		<h2 class="sub-title">에디터추천</h2>
		



<script type="text/javascript">
function fnViewSongList(plmseq) {
	plmseq = plmseq || 0;
	if(plmseq==0)	return;

	var listobj = $('div#playlistsong_' + plmseq).find('ul');
	if(listobj.children().length > 0)	return;

	var songlisturl = '/playlist/mainSongList?plmSeq=' + plmseq + '&logFlag=N';
	$.get(songlisturl, function(data) {
		if(data.Result.RetCode=='0') {
			// 성공 케이스
			var listHtml = '';
			$.each(data.DataSet, function(idx, item) {
				listHtml += '<li>\n<span class="track ellipsis">' + item.artistName + '</span>\n'
						+ '	<span class="ellipsis">' + item.songName + '</span></li>\n';
			});
			listobj.append(listHtml);
		} else {
			// alert(data.Result.RetMsg);
			listobj.append('<li><span class="track ellipsis">' + data.Result.RetMsg + '</span></li>');
		}
	})
}
</script>

<ul class="clearfix">

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13508" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202382912457.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="소개해 드리고 싶어요, 카를 닐센이라는 사람을" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">클래식 공감</span>
				<p class="title">소개해 드리고 싶어요, 카를 닐센이라는 사람을</p>
				
					
					
					<span class="desc ellipsis">바이올린, 플루트, 클라리넷 협주곡</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13509" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202382912336.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="크루너를 넘어서, 위대한 재즈 스탠더드 해석자! 토니 베넷(Tony Bennett)" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">MM JAZZ</span>
				<p class="title">크루너를 넘어서, 위대한 재즈 스탠더드 해석자! 토니 베넷(Tony Bennett)</p>
				
					
					
					<span class="desc ellipsis">작품 자체, 그에 담긴 의미 모두가 걸작</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="recommend type-4" >
		<a href="#" onclick="allSongPlayNLog('15781', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023825144724.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="경복궁의 오후, 고적한 산보를 도울 BGM" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/118/419/81118419_1540892783265_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="경복궁의 오후, 고적한 산보를 도울 BGM" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/482/676/82482676_1642491059107_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="경복궁의 오후, 고적한 산보를 도울 BGM" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15781">
				<span class="category">추천선곡</span>
				<p class="title">경복궁의 오후, 고적한 산보를 도울 BGM</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0009||DJ 호이" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 호이"></span>
						<span class="dj-name ellipsis">DJ 호이</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15781">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15781" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15781);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="recommend type-2" >
		<a href="#" onclick="allSongPlayNLog('15780', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202382514417.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="레몬 향기 머금은 포지타노의 여름 안에서 🍋⛱" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/754/359/80754359_1452606719637_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="레몬 향기 머금은 포지타노의 여름 안에서 🍋⛱" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/047/103/15047103_1411701540329_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="레몬 향기 머금은 포지타노의 여름 안에서 🍋⛱" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15780">
				<span class="category">추천선곡</span>
				<p class="title">레몬 향기 머금은 포지타노의 여름 안에서 🍋⛱</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0021||DJ 감또" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 감또"></span>
						<span class="dj-name ellipsis">DJ 감또</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15780">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15780" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15780);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13493" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023828154249.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="KIMKIMPARKKIM's 음악가, 함께 ＃13 - Stevie Wonder" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">김김박김</span>
				<p class="title">KIMKIMPARKKIM's 음악가, 함께 ＃13 - Stevie Wonder</p>
				
					
					
					<span class="desc ellipsis">음악 전문가 네 명의 이유 있는 추천</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13484" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023828154144.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="우리가 꼭 알아야 할 헤비메탈의 순간들 68화 – 몬트로즈" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">올댓메탈</span>
				<p class="title">우리가 꼭 알아야 할 헤비메탈의 순간들 68화 – 몬트로즈</p>
				
					
					
					<span class="desc ellipsis">미국 헤비메탈의 선각자</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="recommend type-3" >
		<a href="#" onclick="allSongPlayNLog('15750', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023825115225.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="누그러진 햇살 아래 몰입의 즐거움 🎧" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/953/476/81953476_1616549845552_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="누그러진 햇살 아래 몰입의 즐거움 🎧" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/414/743/82414743_1638059137993_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="누그러진 햇살 아래 몰입의 즐거움 🎧" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15750">
				<span class="category">추천선곡</span>
				<p class="title">누그러진 햇살 아래 몰입의 즐거움 🎧</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0074||DJ 알잘딱깔센" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 알잘딱깔센"></span>
						<span class="dj-name ellipsis">DJ 알잘딱깔센</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15750">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15750" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15750);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="recommend type-1" >
		<a href="#" onclick="allSongPlayNLog('15778', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023824183931.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="조금 눅눅한 감성의 알앤비 플레이리스트" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/739/813/82739813_1654824844248_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="조금 눅눅한 감성의 알앤비 플레이리스트" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/399/127/82399127_1638343205808_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="조금 눅눅한 감성의 알앤비 플레이리스트" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15778">
				<span class="category">추천선곡</span>
				<p class="title">조금 눅눅한 감성의 알앤비 플레이리스트</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0013||DJ 수수" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 수수"></span>
						<span class="dj-name ellipsis">DJ 수수</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15778">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15778" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15778);
			</script>
			

			

		</div>

		
	</li>
	
</ul>
<ul class="next clearfix">
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13503" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023828154015.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="나만의 작은 동굴, <마이리틀케이브>" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">핫플힙플</span>
				<p class="title">나만의 작은 동굴, <마이리틀케이브></p>
				
					
					
					<span class="desc ellipsis">책과 술이 함께하는 도심 속 작은 동굴</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13479" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023824103643.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="음악을 통한 세계여행, 존 바티스트의 ‘World Music Radio’" /></div>
			<div class="icons"><span class="icon icon-red">이벤트</span></div>

			
		
		

		<div class="info">
			
			
				<span class="category">클래식 공감</span>
				<p class="title">음악을 통한 세계여행, 존 바티스트의 ‘World Music Radio’</p>
				
					
					
					<span class="desc ellipsis">재즈의 기교, 클래식의 어법까지 모두</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13474" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023823115839.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="POP 스튜디오 ＃68 - 이제 선선한 바람이 불어오고" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">POP 컬렉션</span>
				<p class="title">POP 스튜디오 ＃68 - 이제 선선한 바람이 불어오고</p>
				
					
					
					<span class="desc ellipsis">끝나는 여름에 어울리는 노래들</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="" >
		<a href="/magazine/subMain?mgz_seq=13465" >
		
			
			
			<div class="cover"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202381812312.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="ECM 사운드의 초기 전형 담은 걸작, 지고의 아름다움 담은 즉흥예술!" /></div>
			

			
		
		

		<div class="info">
			
			
				<span class="category">MM JAZZ</span>
				<p class="title">ECM 사운드의 초기 전형 담은 걸작, 지고의 아름다움 담은 즉흥예술!</p>
				
					
					
					<span class="desc ellipsis">케니 휠러, 키스 자렛 〈Gnu High〉</span>
					
					
				
			

			

			

		</div>

		
		<span class="mask"></span>
		</a>
		
	</li>
	

	<li class="recommend type-1" >
		<a href="#" onclick="allSongPlayNLog('15767', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023823101242.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="비 좀 맞으면 어때☔ 이 리듬에 툭툭 털지 뭐🤸‍♂️" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/042/058/15042058_1593759616024_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="비 좀 맞으면 어때☔ 이 리듬에 툭툭 털지 뭐🤸‍♂️" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/619/440/82619440_1648801827618_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="비 좀 맞으면 어때☔ 이 리듬에 툭툭 털지 뭐🤸‍♂️" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15767">
				<span class="category">추천선곡</span>
				<p class="title">비 좀 맞으면 어때☔ 이 리듬에 툭툭 털지 뭐🤸‍♂️</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0012||DJ 자몽" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 자몽"></span>
						<span class="dj-name ellipsis">DJ 자몽</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15767">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15767" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15767);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="recommend type-6" >
		<a href="#" onclick="allSongPlayNLog('15744', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023818154322.jpg/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="튀어나온 배 두드리며 하루종일 뒹굴뒹굴🌀" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/499/277/81499277_1594258798253_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="튀어나온 배 두드리며 하루종일 뒹굴뒹굴🌀" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/455/286/81455286_1590648055337_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="튀어나온 배 두드리며 하루종일 뒹굴뒹굴🌀" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15744">
				<span class="category">추천선곡</span>
				<p class="title">튀어나온 배 두드리며 하루종일 뒹굴뒹굴🌀</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0040||DJ 노찌" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 노찌"></span>
						<span class="dj-name ellipsis">DJ 노찌</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15744">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15744" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15744);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="recommend type-3" >
		<a href="#" onclick="allSongPlayNLog('15736', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023817105621.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="그쪽도 그루브박사님을 아세요?🕺" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/012/219/84012219_1688460037051_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="그쪽도 그루브박사님을 아세요?🕺" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/249/286/81249286_1564034115356_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="그쪽도 그루브박사님을 아세요?🕺" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15736">
				<span class="category">추천선곡</span>
				<p class="title">그쪽도 그루브박사님을 아세요?🕺</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0047||DJ 솝" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 솝"></span>
						<span class="dj-name ellipsis">DJ 솝</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15736">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15736" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15736);
			</script>
			

			

		</div>

		
	</li>
	

	<li class="recommend type-6" >
		<a href="#" onclick="allSongPlayNLog('15746', '1'); return false;" >
		
			
			<div class="cover-recommend">
				<div class="cover cover-main"><img src="//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202381816206.png/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_100.gif';" alt="마이애미 해변에서 듣는 파티 바이브 플리" /></div>
				<div class="cover cover-left"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/289/600/80289600_1333095245038_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="마이애미 해변에서 듣는 파티 바이브 플리" /></div>
				<div class="cover cover-right"><img src="//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/925/259/80925259_1635330932386_1_140x140.JPG/dims/resize/Q_80,0" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank_200.gif';" alt="마이애미 해변에서 듣는 파티 바이브 플리" /></div>
			</div>
			<div class="total"><span class="count">15<strong>곡</strong></span></div>
			
			
		
		
		<span class="mask"></span>
		</a>
		

		<div class="info">
			
			<a href="/playlist/detailView?plmSeq=15746">
				<span class="category">추천선곡</span>
				<p class="title">마이애미 해변에서 듣는 파티 바이브 플리</p>
				
					
					<span class="mask"></span>
				</a>
				<a href="/playlist/tags?tags=DJ0022||DJ 삐삐" class="dj" onclick="location.href=encodeURI(this.href);return false;">
					<div class="dj">
						<span class="profile"><img src="//image.genie.co.kr/imageg/web/common/blank_dj_5.0.png" alt="DJ 삐삐"></span>
						<span class="dj-name ellipsis">DJ 삐삐</span>
					</div>
					
					
				
			</a>

			
			<div class="toggle-button-box">
				<button type="button" class="btn">선곡미리보기</button>
				<div class="list" id="playlistsong_15746">
					<ul></ul>
					<a href="/playlist/detailView?plmSeq=15746" class="btn-detail"><strong>선곡 자세히 보기</strong> &gt;</a>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
			<script type="text/javascript">
				fnViewSongList(15746);
			</script>
			

			

		</div>

		
	</li>
	

</ul>


<div class="more"><button type="button" class="btn-more fold">컨텐츠 더보기</button></div>


<script>
//<![CDATA[
$(function() {
	//EDITOR
	$('.editor .btn-more').click(function() {
		if($(this).hasClass('fold')) {
			$('.editor .next').addClass('active').attr('tabindex', 0).focus();
			$(this).removeClass('fold').text('컨텐츠 접기');
		} else {
			$('.editor .next').removeClass('active');
			$(this).addClass('fold').text('컨텐츠 더보기');
		}
	});
});
//]]>
</script>

	</div>
	<!--// EDITOR -->

<%@ include file="include/footer.jsp" %>
</html>