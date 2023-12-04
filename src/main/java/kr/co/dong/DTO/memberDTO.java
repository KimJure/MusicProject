package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class memberDTO {
	
	public int membernum;
	public int ticketadate;
	public int ticketdate;
	public int passnum;
	public int agree;
	public int agree1;
	public int authority;
	public int state;
	public int identity;
	public String id;
	public String pw;
	public String name;	
	public String email;
	public String domain;
	public String tel;
	public String nickname;
	public String joindate;
	public String customer;
	public String naver_id;
	
	public String kakao_id;
	private passDTO passDTO;
	private profileDTO profileDTO;
	public int passpay;
	public String passname;
	public String passexplan;
	
	
	public profileDTO getProfileDTO() {
		return profileDTO;
	}
	public void setProfileDTO(profileDTO profileDTO) {
		this.profileDTO = profileDTO;
	}
	public String getNaver_id() {
		return naver_id;
	}
	public void setNaver_id(String naver_id) {
		this.naver_id = naver_id;
	}
	public String getKakao_id() {
		return kakao_id;
	}
	public void setKakao_id(String kakao_id) {
		this.kakao_id = kakao_id;
	}

	public int getPasspay() {
		return passpay;
	}
	public void setPasspay(int passpay) {
		this.passpay = passpay;
	}
	public String getPassname() {
		return passname;
	}
	public void setPassname(String passname) {
		this.passname = passname;
	}
	public String getPassexplan() {
		return passexplan;
	}
	public void setPassexplan(String passexplan) {
		this.passexplan = passexplan;
	}
	
	
	public passDTO getPassDTO() {
		return passDTO;
	}
	public void setPassDTO(passDTO passDTO) {
		this.passDTO = passDTO;
	}
	public int getTicketdate() {
		return ticketdate;
	}
	public void setTicketdate(int ticketdate) {
		this.ticketdate = ticketdate;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public int getMembernum() {
		return membernum;
	}
	public void setMembernum(int membernum) {
		this.membernum = membernum;
	}

	public int getTicketadate() {
		return ticketadate;
	}
	public void setTicketadate(int ticketadate) {
		this.ticketadate = ticketadate;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public int getPassnum() {
		return passnum;
	}
	public void setPassnum(int passnum) {
		this.passnum = passnum;
	}
	public int getAgree() {
		return agree;
	}
	public void setAgree(int agree) {
		this.agree = agree;
	}
	public int getAgree1() {
		return agree1;
	}
	public void setAgree1(int agree1) {
		this.agree1 = agree1;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getJoindate() {
		return joindate;
	}
	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}

	public int getAuthority() {
		return authority;
	}
	public void setAuthority(int authority) {
		this.authority = authority;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public int getIdentity() {
		return identity;
	}
	public void setIdentity(int identity) {
		this.identity = identity;
	}
	@Override
	public String toString() {
		return "memberDTO [membernum=" + membernum + ", ticketadate=" + ticketadate + ", ticketdate=" + ticketdate
				+ ", passnum=" + passnum + ", agree=" + agree + ", agree1=" + agree1 + ", authority=" + authority
				+ ", state=" + state + ", identity=" + identity + ", id=" + id + ", pw=" + pw + ", name=" + name
				+ ", email=" + email + ", domain=" + domain + ", tel=" + tel + ", nickname=" + nickname + ", joindate="
				+ joindate + ", customer=" + customer + ", naver_id=" + naver_id + ", kakao_id=" + kakao_id
				+ ", passDTO=" + passDTO + ", profileDTO=" + profileDTO + ", passpay=" + passpay + ", passname="
				+ passname + ", passexplan=" + passexplan + "]";
	}

	
	

}
