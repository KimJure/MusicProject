package kr.co.dong.DAO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import kr.co.dong.DTO.albumDTO;
import kr.co.dong.DTO.artistDTO;
import kr.co.dong.DTO.artistmDTO;
import kr.co.dong.DTO.codetableDTO;
import kr.co.dong.DTO.commentDTO;
import kr.co.dong.DTO.memberDTO;
import kr.co.dong.DTO.passDTO;
import kr.co.dong.DTO.replyDTO;
import kr.co.dong.DTO.songDTO;
import java.util.HashMap;

@Repository
public class BoardDAOImpl implements BoardDAO{
	@Autowired
	private SqlSession sqlsession; 
	private String namespace = "kr.co.dong.BoardMapper";
	
	// ---------------------- 회원가입 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	@Override
	public int joinMember(memberDTO MemberDTO) throws Exception {
	// TODO Auto-generated method stub
	return sqlsession.insert(namespace+".joinMember", MemberDTO);
	}

	@Override
	public List<memberDTO> joinSuc(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return sqlsession.selectList(namespace+".joinSuc", MemberDTO);
	}
	
	@Override
	public int nicknameCheck(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return sqlsession.selectOne(namespace+".nicknameCheck", MemberDTO);
	}
	
	@Override
	public int idCheck(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return sqlsession.selectOne(namespace+".idCheck", MemberDTO);
	}
	
	// ---------------------- 로그인 관련 -------------------------------------------------------------------------------------------------------------------------------------
	
	   @Override
	   
	   public Map login(Map<String, Object> map) throws Exception{
	      // TODO Auto-generated method stub
	      return sqlsession.selectOne(namespace+".login", map);
	   }
	   
	   public Map NaverLogin(Map<String, Object> map) throws Exception{
		      // TODO Auto-generated method stub
		      return sqlsession.selectOne(namespace+".NaverLogin", map);
		   }
	   
		@Override
		public String pwCheck(memberDTO MemberDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectOne(namespace+".pwCheck", MemberDTO);
		}
		@Override
		public int NaverLinkCheck(String naver_id) throws Exception{
			return sqlsession.selectOne(namespace+".NaverLinkCheck", naver_id);
		}
		
		@Override
		public int NaverLinkOn(@Param("naver_id") String naver_id, @Param("id") String id) throws Exception{
			
			   Map<String, String> paramMap = new HashMap<>();
			    paramMap.put("naver_id", naver_id);
			    paramMap.put("id", id);
			
			return sqlsession.update(namespace+".NaverLinkOn", paramMap);
		}
		
		@Override
		public String kakaoLinkCheck(memberDTO MemberDTO) throws Exception{
			return sqlsession.selectOne(namespace+".kakaoLinkCheck", MemberDTO);
		}
	   
		
		// ---------------------- 패스구매 관련 -------------------------------------------------------------------------------------------------------------------------------------

		@Override
		public List<passDTO> passName(passDTO PassDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".passName", PassDTO);
		}

		@Override
		public int paySuccess(memberDTO MemberDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.update(namespace+".paySuccess", MemberDTO);
		}

		@Override
		public int passRenewal() throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.update(namespace+".passRenewal");
		}


		@Override
		public List<memberDTO> daysCheck() throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".daysCheck");
		}

		@Override
		public List<songDTO> realtime(songDTO SongDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".realtime", SongDTO);
		}
		
		// ---------------------- 아티스트 관련 -------------------------------------------------------------------------------------------------------------------------------------
		
		@Override
		public List<artistDTO> ArtistInfo(artistDTO ArtistDTO) throws Exception {
			
			return sqlsession.selectList(namespace+".ArtistInfo", ArtistDTO);	
		}

		@Override
		public List<artistmDTO> ArtistmInfo(artistmDTO ArtistmDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".ArtistmInfo", ArtistmDTO);
		}

		@Override
		public List<albumDTO> albumInfo(albumDTO AlbumDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".albumInfo", AlbumDTO);
		}

		@Override
		public List<albumDTO> albumcount(albumDTO AlbumDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".albumcount", AlbumDTO);
		}

		@Override
		public List<artistDTO> songbest(artistDTO ArtistDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".songbest", ArtistDTO);
		}
		

		
		// ---------------------- 댓글 관련 -------------------------------------------------------------------------------------------------------------------------------------
		@Override
		public int commentSuccess(commentDTO CommentDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.insert(namespace+".commentSuccess", CommentDTO);
		}
		
		@Override
		public List<commentDTO> commentList(commentDTO CommentDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".commentList", CommentDTO);
		}
		@Override
		public List<replyDTO> replyList(replyDTO ReplyDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.selectList(namespace+".replyList", ReplyDTO);
			
		}
		@Override
		public int replySuccess(replyDTO ReplyDTO) throws Exception {
			// TODO Auto-generated method stub
			return sqlsession.insert(namespace+".replySuccess", ReplyDTO);
		}
		
}
