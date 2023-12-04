package kr.co.dong.controller;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.dong.DTO.memberDTO;
import kr.co.dong.Service.BoardService;

@Controller


public class LoginController {
   
   @Autowired
   private BoardService service;
   
   @Autowired
   private	PasswordEncoder passwordEncoder;
  	
   
   
   public void MemberDTO() {
      memberDTO memberDTO = new memberDTO();
   }
        
   private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
   
	// 로그인 팝업창
	@GetMapping("board/Loginview")
	public String Loginview() throws Exception{
		return "Loginview";
	}
	
   

	@ResponseBody
	@RequestMapping(value = "board/login", method = RequestMethod.POST)
	public Map<String, Object> login(@RequestParam String id, @RequestParam String pw, HttpServletRequest request, HttpSession session, memberDTO memberDTO) throws Exception {
	    Map<String, Object> map = new HashMap<>();
	    
	    
	    map.put("id", id);
	    map.put("pw", pw);
	    
	    System.out.println("입력한 비밀번호 = " + pw);
	    
	    Map<String, Object> user = service.login(map); 
	    
	    String profileUrl = (String) user.get("profileurl");
	    String profileName = (String) user.get("profilename");
	    
	    user.put("profile", profileUrl +  profileName);
	    
	    System.out.println(user);
	    
	    Map<String, Object> response = new HashMap<>();
	    
	    
	    String dbPw = (String) service.pwCheck(memberDTO);

		// 사용자가 제출한 비밀번호와 데이터베이스에 저장된 암호화된 비밀번호를 비교
		if (passwordEncoder.matches(pw, dbPw)) {
		    session.setAttribute("user", user);
		    System.out.println("세션에 저장된 user 정보: " + user);
		    response.put("loginCheck", 1);
		    
		    int state = (int) user.get("state");
		    
		    switch (state) {
		        case 2:
		            response.put("loginCheck", 2);
		            break;
		        default:
		            System.out.println("일반회원");
		            break;
		    }
		} else {
		    // 비밀번호 불일치: 로그인 실패
		    response.put("loginCheck", 0);
		    System.out.println("비밀번호 불일치");
		}

	    return response;
	}
	
	@ResponseBody
	@RequestMapping(value = "board/NaverLogin", method = RequestMethod.POST)
	public Map<String, Object> NaverLogin(@RequestParam String naver_id ,HttpServletRequest request, HttpSession session, memberDTO memberDTO) throws Exception {
	    Map<String, Object> map = new HashMap<>();
	    
	    
	    map.put("naver_id", naver_id);

	    
	    Map<String, Object> user = service.NaverLogin(map); 
	     
	    
	    String profileUrl = (String) user.get("profileurl");
	    String profileName = (String) user.get("profilename");
	    
	    user.put("profile", profileUrl +  profileName);
	    
	    Map<String, Object> response = new HashMap<>();
	    
	    

	            session.setAttribute("user", user);
	            System.out.println("세션에 저장된 user 정보: " + user);
	            response.put("loginCheck", 1);
	            
	            int state = (int) user.get("state");
	            
	            switch (state) {
	                case 2:
	                    response.put("loginCheck", 2);
	                    break;
	                default:
	                    System.out.println("일반회원");
	                    break;
	            
	    }
	           
	            System.out.println("response"+response);

	    return response;
	}
	
	@ResponseBody
	@RequestMapping(value = "board/KakaoLogin", method = RequestMethod.POST)
	public Map<String, Object> KakaoLogin(@RequestParam String nickname ,@RequestParam String profile ,HttpServletRequest request, HttpSession session, memberDTO memberDTO) throws Exception {
	    Map<String, Object> map = new HashMap<>();
	    
	    
	    map.put("nickname", nickname);
	    map.put("profile", profile);

	    	    
	    Map<String, Object> response = new HashMap<>();
	    
	    

	            session.setAttribute("user", map);
	            System.out.println("세션에 저장된 user 정보: " + map);
	            response.put("loginCheck", 1);
	            
	           
	            System.out.println("response"+response);

	    return response;
	}


   
   @GetMapping(value="board/logOut")
   public String loginOut(HttpSession session) {
      session.invalidate();
      return "redirect:/";
   }
   
}