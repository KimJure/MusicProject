package kr.co.dong.controller;

import org.springframework.http.converter.StringHttpMessageConverter;


import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.catalina.core.ApplicationContext;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;

import kr.co.dong.DTO.albumDTO;
import kr.co.dong.DTO.artistDTO;
import kr.co.dong.DTO.artistmDTO;
import kr.co.dong.DTO.codetableDTO;
import kr.co.dong.DTO.commentDTO;
import kr.co.dong.DTO.memberDTO;
import kr.co.dong.DTO.passDTO;
import kr.co.dong.DTO.replyDTO;
import kr.co.dong.DTO.songDTO;
import kr.co.dong.Service.BoardService;
import lombok.RequiredArgsConstructor;
import java.util.Random;
import org.springframework.util.LinkedMultiValueMap;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Builder;

@Controller
public class Boardcontroller {
	
	private static final Logger logger = LoggerFactory.getLogger(Boardcontroller.class);
	
	@Autowired
	BoardService service;	
	
	@Autowired
	private HttpSession session;
	
	private IamportClient api;
	
	
	@Configuration
	@EnableScheduling
	public class TestScheduler{
	}
	
	// ---------------------- 회원가입 관련 -------------------------------------------------------------------------------------------------------------------------------------
		
	// 회원가입 페이지 이동
	@GetMapping("board/Joinview")
	public String Joinview() throws Exception{
		return "Joinview";
	}
	
	// 회원가입 이벤트 실행
    @PostMapping("board/joinMember")
    public String joinMember(memberDTO MemberDTO) throws Exception{
    	    	
       service.joinMember(MemberDTO);
       
     return "redirect:JoinSuc";
    }
    
    
    // 회원가입 완료 이동
	@RequestMapping(value = "board/JoinSuc", method = RequestMethod.GET)
	public ModelAndView JoinSuc(memberDTO MemberDTO) throws Exception {
	ModelAndView mav = new ModelAndView();

	List<memberDTO> member = service.joinSuc(MemberDTO);


	mav.addObject("JoinSuc", member);
	mav.setViewName("JoinSuc");

	System.out.println("JoinSuc" + member);
	return mav;
	}
	
	// 회원가입 닉네임 중복체크 버튼
	   @ResponseBody
	   @PostMapping("board/nicknameCheck")
	   public int nicknameCheck(memberDTO MemberDTO) throws Exception{
	      int result = service.nicknameCheck(MemberDTO);
	      
	      System.out.println("반환값:" + result);
	      return result;
	   }
	   
		// 회원가입 아이디 중복체크 버튼
	   @ResponseBody
	   @PostMapping("board/idCheck")
	   public int idCheck(memberDTO MemberDTO) throws Exception{
	      int result = service.idCheck(MemberDTO);
	      
	      System.out.println(result);
	      
	      return result;
	   }

	   
	 //전화인증번호
	 		@ResponseBody
	 		@RequestMapping(value = "board/certifiedPhoneNumber", method = RequestMethod.GET)		
	 		public String sendSMS(@RequestParam("tel") String userPhoneNumber) throws Exception { // 휴대폰 문자보내기
	 			int randomNumber = (int)((Math.random()* (9999 - 1000 + 1)) + 1000);//난수 생성
	 			
	 			System.out.println("전화번호인증 컨트롤러 실행 완료");
	 			System.out.println(randomNumber);

	 			service.certifiedPhoneNumber(userPhoneNumber,randomNumber);
	 			
	 			return Integer.toString(randomNumber);
	 		}
	// ---------------------- 결제 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	 	
	
    // 패스구매 화면 이동
	@RequestMapping(value = "board/PayView", method = RequestMethod.GET)
	public ModelAndView PayView(@RequestParam("passnum") int passnum,passDTO PassDTO) throws Exception {
	ModelAndView mav = new ModelAndView();

	List<passDTO> pass = service.passName(PassDTO);


	mav.addObject("PayView", pass);
	mav.setViewName("PayView");

	System.out.println("PayView" + pass);
	return mav;
	}
	
	
	
	// 결제완료 처리
	   @ResponseBody
	   @PostMapping("board/paySuccess")
	   public int paySuccess(@RequestBody memberDTO MemberDTO) throws Exception {
	      int result = service.paySuccess(MemberDTO);
	      
	      System.out.println("ajax요청"+result);
	      
	      return result;
	   } 
	      
	
	
	
	// ---------------------- 차트 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// top100 이동
	@RequestMapping(value = "board/Toplist", method = RequestMethod.GET)
	public ModelAndView Toplist(songDTO SongDTO) throws Exception {
	ModelAndView mav = new ModelAndView();

	List<songDTO> Toplist = service.realtime(SongDTO);


	mav.addObject("Toplist", Toplist);
	mav.setViewName("Toplist");

	System.out.println("Toplist" + Toplist);
	return mav;
	}
	
	// ---------------------- 아티스트 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// 아티스트 정보 이동
	@RequestMapping(value = "board/ArtistInfo", method = RequestMethod.GET)
	public ModelAndView ArtistInfo(artistDTO ArtistDTO,artistmDTO ArtistmDTO,albumDTO AlbumDTO,commentDTO CommentDTO, replyDTO ReplyDTO) throws Exception {
	ModelAndView mav = new ModelAndView();
	
	List<artistDTO> Artist = service.ArtistInfo(ArtistDTO);
	List<artistmDTO> Artistm = service.ArtistmInfo(ArtistmDTO);
	List<albumDTO> album = service.albumInfo(AlbumDTO);
	List<albumDTO> albumcount = service.albumcount(AlbumDTO);
	List<artistDTO> songbest = service.songbest(ArtistDTO);
	List<commentDTO> commentList = service.commentList(CommentDTO);
	List<replyDTO> replyList = service.replyList(ReplyDTO);
	
	mav.addObject("reply", replyList);
	mav.addObject("songbest", songbest);
	mav.addObject("Artist", Artist);
	mav.addObject("album", album);
	mav.addObject("albumcount", albumcount);
	mav.addObject("Artistm", Artistm);
	mav.addObject("comment", commentList);
	mav.setViewName("ArtistInfo");
	
	return mav;
	}
	
	// ---------------------- 댓글 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// 댓글 작성
	   @ResponseBody
	   @PostMapping("board/commentSuccess")
	   public int commentSuccess(@RequestBody commentDTO CommentDTO) throws Exception{
	      int result = service.commentSuccess(CommentDTO);
	      
	      System.out.println(result);
	      
	      return result;
	   }
	   
	   @ResponseBody
	   @PostMapping("board/replySuccess")
	   public int replySuccess(@RequestBody replyDTO ReplyDTO) throws Exception{
	      int result = service.replySuccess(ReplyDTO);
	      
	      System.out.println(result);
	      
	      return result;
	   }
	
	// ---------------------- 에러페이지 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// 관리자 상품 추가 이동
	@GetMapping("board/Pageerror")
	public String Pageerror() throws Exception{
		return "Pageerror";
	}
	
	// ---------------------- 웹플레이어 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// 관리자 상품 추가 이동
	@GetMapping("board/Webplayer")
	public String Webplayer() throws Exception{
		return "Webplayer";
	}
	
	
	// ---------------------- 이용권 관련 -----------------------------------------------------------------------------------------------------------------------------------------
	
	// 이용권 구매 페이지 이동
	@GetMapping("board/ticketPurchase")
	public String ticketPurchase() throws Exception{
		return "ticketPurchase";
	}
	
	   // 이용권 이용날짜 갱신   
    @Scheduled(cron = "1 09 15 * * *")
    public void passRenewal() throws Exception {
        int result = service.passRenewal();

        System.out.println("갱신 성공");
    }
    
    
    // 10자리 난수 생성
    private String generateRandomNumber(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
    
	   // 이용권 날짜 확인후 정기결제   
 @Scheduled(cron = "1 3 17 * * *")
 public void daysCheck() throws Exception {
	 List<memberDTO> result = service.daysCheck();

     System.out.println("갱신 성공");
 
     
     for (memberDTO member : result) {
    	 
    	 RestTemplate restTemplate = new RestTemplate();
	       HttpHeaders headers = new HttpHeaders();
	       headers.setContentType(MediaType.APPLICATION_JSON);

	       Map<String, Object> tokenRequest = new HashMap<>();
	       tokenRequest.put("imp_key", "1332608474133320");
	       tokenRequest.put("imp_secret", "z4vZWe2WASrJskmueEnw0NSZ9QfWpIa3JC2dR4McNdBYPUChIg1lZXEw5bfWT9fbcXmD7HawxfRM7q2U");

	       Gson gson = new Gson();
	       String tokenRequestJson = gson.toJson(tokenRequest);

	       HttpEntity<String> tokenRequestEntity = new HttpEntity<>(tokenRequestJson, headers);

	       String tokenUrl = "https://api.iamport.kr/users/getToken";
	       String tokenResponse = restTemplate.postForObject(tokenUrl, tokenRequestEntity, String.class);

	       // 액세스 토큰 파싱
	       Gson tokenGson = new Gson();
	       JsonElement tokenJsonElement = tokenGson.fromJson(tokenResponse, JsonElement.class);
	       JsonObject tokenJsonObject = tokenJsonElement.getAsJsonObject();
	       String accessToken = tokenJsonObject.getAsJsonObject("response").get("access_token").getAsString();		   

	       // 정기결제 등록을 위한 데이터 설정
	       String subscriptionPaymentUrl = "https://api.iamport.kr/subscribe/payments/again";

	         String customerUid = member.getCustomer(); 
	         String merchantUid = "cushion" + generateRandomNumber(10); 
	         int amount = member.getPasspay(); 
	         String name = member.getPassname() + member.getPassexplan(); 
	         String buyerName = member.getName();
	         String buyerTel = member.getTel();
	         String buyerEmail = member.getEmail() + "@" + member.getDomain(); 
	       

	       HttpHeaders subscriptionPaymentHeaders = new HttpHeaders();
	       subscriptionPaymentHeaders.setContentType(MediaType.APPLICATION_JSON);
	       subscriptionPaymentHeaders.set("Authorization", "Bearer " + accessToken);


	         Map<String, Object> subscriptionPaymentData = new HashMap<>();
	         subscriptionPaymentData.put("customer_uid", customerUid);
	         subscriptionPaymentData.put("merchant_uid", merchantUid);
	         subscriptionPaymentData.put("amount", amount);
	         subscriptionPaymentData.put("name", name);
	         subscriptionPaymentData.put("buyer_name", buyerName);
	         subscriptionPaymentData.put("buyer_tel", buyerTel);
	         subscriptionPaymentData.put("buyer_email", buyerEmail);

	       Gson subscriptionPaymentGson = new Gson();
	       String subscriptionPaymentJson = subscriptionPaymentGson.toJson(subscriptionPaymentData);
	       
	      System.out.println(subscriptionPaymentJson);

	       HttpEntity<String> subscriptionPaymentEntity = new HttpEntity<>(subscriptionPaymentJson, subscriptionPaymentHeaders);
	       
	       restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(StandardCharsets.UTF_8));
	         System.out.println(subscriptionPaymentUrl);
	         System.out.println(subscriptionPaymentEntity);
	         System.out.println(subscriptionPaymentJson);
	         System.out.println(subscriptionPaymentHeaders);
	       

	       String subscriptionPaymentResponse = restTemplate.postForObject(subscriptionPaymentUrl, subscriptionPaymentEntity, String.class);
	       
	       
	       

	       System.out.println("Subscription Payment Response: " + subscriptionPaymentResponse);


	         if (subscriptionPaymentResponse.contains("\"status\":\"paid\"")) {

	             System.out.println("정기결제 성공");

	         } else {

	             System.out.println("정기결제 실패");

	       }
	   }
 }
 
 		//---------------------- 네이버 로그인 관련 -----------------------------------------------------------------------------------------------------------------------------------------
 		
			 @RequestMapping("board/CallBack")
			 public String CallBack(@RequestParam String code, @RequestParam String state,Map<String, Object> model) throws Exception {

			     System.out.println("Naver Callback - code: " + code + ", state: " + state );
			

			     HttpHeaders headers = new HttpHeaders(); 
			        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

			        // HTTP Body 생성
			        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
			        body.add("grant_type", "authorization_code");
			        body.add("client_id", "fKDlEbi3HnF8AtPDqPJc");
			        body.add("client_secret", "JV5bZx_2Dn");
			        body.add("code", code);
			        body.add("state", state);
			        
			        
			        // HTTP 요청 보내기
			        HttpEntity<MultiValueMap<String, String>> naverTokenRequest =
			                new HttpEntity<>(body, headers);
			        RestTemplate rt = new RestTemplate();
			        ResponseEntity<String> response = rt.exchange(
			                "https://nid.naver.com/oauth2.0/token",
			                HttpMethod.POST,
			                naverTokenRequest,
			                String.class
			        );
			     
			     
			        String responseBody = response.getBody();
			        ObjectMapper objectMapper = new ObjectMapper();
			        JsonNode jsonNode = objectMapper.readTree(responseBody);
			        System.out.println(jsonNode);
			        
			        String accessToken = jsonNode.get("access_token").asText();
			        NaverUserInfo naverUserInfo = getNaverUserInfo(accessToken);
			        
			        
			        int naverLinkCheck = naverUserInfo.getNaverLinkCheck();
			        String naverId = naverUserInfo.getNaver_Id();
			        
			        System.out.println("-------------naverID-------------"+naverId);
			        System.out.println("------------naverLinkCheck--------------"+naverLinkCheck);
			        
			        if (naverLinkCheck == 0) {
			            
			        	model.put("naverId", naverId);
			        	return "LinkNeed";
			        } else {
			        	
			        	model.put("naverId", naverId);
			            return "NaverLogin";
			        }
			    }
			 
			 private NaverUserInfo getNaverUserInfo(String accessToken) throws Exception {
			        // HTTP Header 생성
			        HttpHeaders headers = new HttpHeaders();
			        headers.add("Authorization", "Bearer " + accessToken);
			        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

			        // HTTP 요청 보내기
			        HttpEntity<MultiValueMap<String, String>> naverUserInfoRequest = new HttpEntity<>(headers);
			        RestTemplate rt = new RestTemplate();
			        ResponseEntity<String> response = rt.exchange(
			                "https://openapi.naver.com/v1/nid/me",
			                HttpMethod.POST,
			                naverUserInfoRequest,
			                String.class
			        );

			        // HTTP 응답 받아오기
			        String responseBody = response.getBody();
			        ObjectMapper objectMapper = new ObjectMapper();
			        JsonNode jsonNode = objectMapper.readTree(responseBody);
			        
			        String naver_id = jsonNode.get("response").get("id").asText();
			       
			        System.out.println("jsonnode"+jsonNode);   
			        System.out.println("naverid"+naver_id);
			        
					int NaverLinkCheck = getNaverLinkCheck(naver_id);

			        System.out.println("NaverLinkCheck"+NaverLinkCheck);
			        return new NaverUserInfo(naver_id, NaverLinkCheck);
			    }
			 
			 private int getNaverLinkCheck(@RequestParam String naver_id) throws Exception {
				
				 
			      int result = service.NaverLinkCheck(naver_id);
			      
			      System.out.println("반환값:" + result);
			      return result;
			 }
			 
				// 네이버 아이디 연동
			   @ResponseBody
			   @PostMapping("board/NaverLinkOn")
			   public int NaverLinkOn(@Param("naver_id") String naver_id, @Param("id") String id) throws Exception{
				   
				   
				   System.out.println(naver_id);
				   
			      int result = service.NaverLinkOn(naver_id, id);
			      
			      System.out.println(result);
			      
			      return result;
			   }
			   
			 //---------------------- 카카오 로그인 관련 -----------------------------------------------------------------------------------------------------------------------------------------
			   
				@GetMapping("board/KakaoCallBack")
				 public String KakaoCallBack(@RequestParam String code,Map<String, Object> model) throws Exception {
				
				     System.out.println("Kakao Callback - code: " + code);
				
				     HttpHeaders headers = new HttpHeaders(); 
				        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

				        // HTTP Body 생성
				        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
				        body.add("grant_type", "authorization_code");
				        body.add("redirect_uri", "http://localhost:8080/dong/board/KakaoCallBack");
				        body.add("client_id", "bb0b3857071f6812cd2383f2d98d37e9");
				        body.add("code", code);
				        
				        
				        // HTTP 요청 보내기
				        HttpEntity<MultiValueMap<String, String>> naverTokenRequest =
				                new HttpEntity<>(body, headers);
				        RestTemplate rt = new RestTemplate();
				        ResponseEntity<String> response = rt.exchange(
				                "https://kauth.kakao.com/oauth/token",
				                HttpMethod.POST,
				                naverTokenRequest,
				                String.class
				        );
				     
				     

				        System.out.println("response = " + response);

				        String responseBody = response.getBody();
				        ObjectMapper objectMapper = new ObjectMapper();
				        JsonNode jsonNode = objectMapper.readTree(responseBody);
				        System.out.println("jsonnode"+jsonNode);
				        
				        String accessToken = jsonNode.get("access_token").asText();
				        
				        System.out.println("accessToken"+accessToken);
				        KakaoUserInfo kakaoUserInfo = getkakaoUserInfo(accessToken);
				        
				        String nickname = kakaoUserInfo.getNickname();
				        String profile = kakaoUserInfo.getProfile();
				        
				        System.out.println("-------------nickname-------------"+nickname);
				        System.out.println("-------------profile-------------"+profile);
				        
				        model.put("nickname", nickname);
				        model.put("profile", profile);

				            return "KakaoLogin";
				        
				    }
				
				 private KakaoUserInfo getkakaoUserInfo(String accessToken) throws Exception {
				        // HTTP Header 생성
				        HttpHeaders headers = new HttpHeaders();
				        headers.add("Authorization", "Bearer " + accessToken);
				        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

				        // HTTP 요청 보내기
				        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
				        RestTemplate rt = new RestTemplate();
				        ResponseEntity<String> response = rt.exchange(
				                "https://kapi.kakao.com/v2/user/me",
				                HttpMethod.POST,
				                kakaoUserInfoRequest,
				                String.class
				        );

				        // HTTP 응답 받아오기
				        String responseBody = response.getBody();
				        ObjectMapper objectMapper = new ObjectMapper();
				        JsonNode jsonNode = objectMapper.readTree(responseBody);
				        
				        System.out.println("사용자정보"+jsonNode);
				        
				        String kakao_nickname = jsonNode.get("properties").get("nickname").asText();
				        String kakao_profile = jsonNode.get("properties").get("profile_image").asText();
				          
				        System.out.println("kakao_nickname"+kakao_nickname);
				        

				        return new KakaoUserInfo(kakao_nickname, kakao_profile);
				    }
				 
				   
				 

}
			 
    	 
	
