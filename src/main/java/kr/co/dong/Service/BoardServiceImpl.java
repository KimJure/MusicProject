package kr.co.dong.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.mapper.Mapper;
import org.apache.ibatis.annotations.Param;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kr.co.dong.DAO.BoardDAO;
import kr.co.dong.DTO.albumDTO;
import kr.co.dong.DTO.artistDTO;
import kr.co.dong.DTO.artistmDTO;
import kr.co.dong.DTO.codetableDTO;
import kr.co.dong.DTO.commentDTO;
import kr.co.dong.DTO.memberDTO;
import kr.co.dong.DTO.passDTO;
import kr.co.dong.DTO.replyDTO;
import kr.co.dong.DTO.songDTO;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	BoardDAO dao;
	
	 @Autowired
	PasswordEncoder passwordEncoder;
	 
	 
	
	// ---------------------- 회원가입 관련 -------------------------------------------------------------------------------------------------------------------------------------

	@Override
	public int joinMember(memberDTO MemberDTO) throws Exception {
		
		  String encodedPassword = passwordEncoder.encode(MemberDTO.getPw());
		  MemberDTO.setPw(encodedPassword);
		  
		  System.out.println(encodedPassword);
	return dao.joinMember(MemberDTO);
	}

	@Override
	public List<memberDTO> joinSuc(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return dao.joinSuc(MemberDTO);
	}
	
	@Override
	public int nicknameCheck(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return dao.nicknameCheck(MemberDTO);
	}
	
	@Override
	public int idCheck(memberDTO MemberDTO) throws Exception {
		// TODO Auto-generated method stub
		return dao.idCheck(MemberDTO);
	}
	
	@Override
	public void certifiedPhoneNumber(String userPhoneNumber, int randomNumber) {
		String api_key = "NCSOCP5KNNQA12P2";
	    String api_secret = "UCOIXZS8IJM7VRMRJSAVH3XAWGNJPRTI";
	    net.nurigo.java_sdk.api.Message coolsms = new net.nurigo.java_sdk.api.Message(api_key, api_secret);
	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", "01075475864" );    // 수신전화번호
	    params.put("from", "01075475864");    // 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
	    params.put("type", "SMS");
	    params.put("text", "[Cushion] 인증번호는" + "["+randomNumber+"]" + "입니다."); // 문자 내용 입력
	    params.put("app_version", "test app 1.2"); // application name and version

	    try {
	        JSONObject obj = (JSONObject) coolsms.send(params);
	        System.out.println(obj.toString());
	      } catch (CoolsmsException e) {
	        System.out.println(e.getMessage());
	        System.out.println(e.getCode());
	      }
	     
	}
	
	// ---------------------- 로그인 관련 -------------------------------------------------------------------------------------------------------------------------------------
	   @Override
	   public Map login(Map<String, Object> map) throws Exception{
	      // TODO Auto-generated method stub
	      return dao.login(map);
	   }
	   
	   @Override
	   public Map NaverLogin(Map<String, Object> map) throws Exception{
	      // TODO Auto-generated method stub
	      return dao.NaverLogin(map);
	   }
	   
	   
	   @Override
	   public String pwCheck(memberDTO MemberDTO) throws Exception {
		    return dao.pwCheck(MemberDTO);
		}


	   
	/*  @Override
	   public memberDTO login(memberDTO MemberDTO) throws Exception {
	   	if(MemberDTO.getId() == null || MemberDTO.getPw() == null)
	   		return null;
	   	return userMapper.login(userDto);
	   	//userInfo에서 가져온 비밀번호(암호화됨)와 지금 입력받은 비밀번호 match 확인
	   	String encodePw = userMapper.userInfo(userDto.getUseremail()).getUserpw();
	   	if(passwordEncoder.matches(userDto.getUserpw(),encodePw)) {
	   		//암호화 된 비밀번호로 pw 정보 변경 후 로그인
	   		userDto.setUserpw(encodePw);
	   		return userMapper.login(userDto);
	   	}else {
	   		return null;
	   	}
	   } 
	    

	    
	   @Override
	   public int modify(User userDto) throws Exception {
	   	//dto 비밀번호가 null값이 아니라면 인코딩해서 새로 저장
	   	if(userDto.getUserpw() != null) userDto.setUserpw(passwordEncoder.encode(userDto.getUserpw()));
	   	return userMapper.modify(userDto);
	   }
	   
	   */
	   @Override
		public int NaverLinkCheck(String naver_id) throws Exception{
			return dao.NaverLinkCheck(naver_id);
		}
	   
	   @Override
		public int NaverLinkOn(@Param("naver_id") String naver_id, @Param("id") String id) throws Exception{
		   
			return dao.NaverLinkOn(naver_id,id);
		}
	   
	   @Override
		public String kakaoLinkCheck(memberDTO MemberDTO) throws Exception{
			return dao.kakaoLinkCheck(MemberDTO);
		}
	   
	// ---------------------- 패스구매 관련 -------------------------------------------------------------------------------------------------------------------------------------
	   
		@Override
		public List<passDTO> passName(passDTO PassDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.passName(PassDTO);
		}

		@Override
		public int paySuccess(memberDTO MemberDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.paySuccess(MemberDTO);
		}

		@Override
		public int passRenewal() throws Exception {
			// TODO Auto-generated method stub
			return dao.passRenewal();
		}


		@Override
		public List<memberDTO> daysCheck() throws Exception {
			// TODO Auto-generated method stub
			return dao.daysCheck();
		}

		@Override
		public List<songDTO> realtime(songDTO SongDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.realtime(SongDTO);
		}
		
		// ---------------------- 아티스트 관련 -------------------------------------------------------------------------------------------------------------------------------------
		
		@Override
		public List<artistDTO> ArtistInfo(artistDTO ArtistDTO) throws Exception {
		
		return dao.ArtistInfo(ArtistDTO);
		
		}

		@Override
		public List<artistmDTO> ArtistmInfo(artistmDTO ArtistmDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.ArtistmInfo(ArtistmDTO);
		}

		@Override
		public List<albumDTO> albumInfo(albumDTO AlbumDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.albumInfo(AlbumDTO);
		}
		
		@Override
		public List<albumDTO> albumcount(albumDTO AlbumDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.albumcount(AlbumDTO);
		}

		@Override
		public List<artistDTO> songbest(artistDTO ArtistDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.songbest(ArtistDTO);
		}
		

		

			
		// ---------------------- 댓글 관련 -------------------------------------------------------------------------------------------------------------------------------------
		@Override
		public int commentSuccess(commentDTO CommentDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.commentSuccess(CommentDTO);
	}
		@Override
		public List<commentDTO> commentList(commentDTO CommentDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.commentList(CommentDTO);
		}
		@Override
		public List<replyDTO> replyList(replyDTO ReplyDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.replyList(ReplyDTO);
			
		}
		@Override
		public int replySuccess(replyDTO ReplyDTO) throws Exception {
			// TODO Auto-generated method stub
			return dao.replySuccess(ReplyDTO);
	}
}
