package kr.co.dong.DAO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import kr.co.dong.DTO.albumDTO;
import kr.co.dong.DTO.artistDTO;
import kr.co.dong.DTO.artistmDTO;
import kr.co.dong.DTO.codetableDTO;
import kr.co.dong.DTO.commentDTO;
import kr.co.dong.DTO.memberDTO;
import kr.co.dong.DTO.passDTO;
import kr.co.dong.DTO.replyDTO;
import kr.co.dong.DTO.songDTO;

public interface BoardDAO {
	
	
	// ---------------------- 회원가입 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public int joinMember(memberDTO MemberDTO) throws Exception;
	
	public List<memberDTO> joinSuc(memberDTO MemberDTO) throws Exception;
	
	public int nicknameCheck(memberDTO MemberDTO) throws Exception;
	
	public int idCheck(memberDTO MemberDTO) throws Exception;
	
	
	// ---------------------- 로그인 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public Map login(Map<String, Object> map)throws Exception;
	
	public Map NaverLogin(Map<String, Object> map)throws Exception;
	
	public String pwCheck(memberDTO MemberDTO) throws Exception;
	
	public int NaverLinkCheck(String naver_id) throws Exception;
	
	public int NaverLinkOn(@Param("naver_id") String naver_id, @Param("id") String id) throws Exception;
	
	public String kakaoLinkCheck(memberDTO MemberDTO) throws Exception;
	
	// ---------------------- 패스구매 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public List<passDTO> passName(passDTO PassDTO) throws Exception;
	
	public int paySuccess(memberDTO MemberDTO) throws Exception;

	public int passRenewal() throws Exception;
	
	public List<memberDTO> daysCheck() throws Exception;
	
	// ---------------------- 차트 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public List<songDTO> realtime(songDTO SongDTO) throws Exception;
	
	// ---------------------- 아티스트 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public List<artistDTO> ArtistInfo(artistDTO ArtistDTO) throws Exception;
	public List<artistmDTO> ArtistmInfo(artistmDTO ArtistmDTO) throws Exception;
	public List<albumDTO> albumInfo(albumDTO AlbumDTO) throws Exception;
	public List<albumDTO> albumcount(albumDTO AlbumDTO) throws Exception;
	public List<artistDTO> songbest(artistDTO ArtistDTO) throws Exception;

	
	// ---------------------- 댓글 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	public int commentSuccess(commentDTO CommentDTO) throws Exception;
	public List<commentDTO> commentList(commentDTO CommentDTO) throws Exception;
	public List<replyDTO> replyList(replyDTO ReplyDTO) throws Exception;
	public int replySuccess(replyDTO ReplytDTO) throws Exception;


	
}
