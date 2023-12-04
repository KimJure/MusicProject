package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class replyDTO {
	
	public int replynum;
	public int comnum;
	public int membernum;
	public int relike;
	public int rebad;
	public int redel;
	public int rereport;
	public int r_membernum;
	public int r_comnum;
	public String rdate;
	public String rcontent;
	public String renickname;
	
	public memberDTO MemberDTO;
	
	
	
	public int getR_comnum() {
		return r_comnum;
	}
	public void setR_comnum(int r_comnum) {
		this.r_comnum = r_comnum;
	}
	public int getR_membernum() {
		return r_membernum;
	}
	public void setR_membernum(int r_membernum) {
		this.r_membernum = r_membernum;
	}
	public String getRenickname() {
		return renickname;
	}
	public void setRenickname(String renickname) {
		this.renickname = renickname;
	}
	public memberDTO getMemberDTO() {
		return MemberDTO;
	}
	public void setMemberDTO(memberDTO memberDTO) {
		MemberDTO = memberDTO;
	}
	public int getReplynum() {
		return replynum;
	}
	public void setReplynum(int replynum) {
		this.replynum = replynum;
	}
	public int getComnum() {
		return comnum;
	}
	public void setComnum(int comnum) {
		this.comnum = comnum;
	}
	public int getMembernum() {
		return membernum;
	}
	public void setMembernum(int membernum) {
		this.membernum = membernum;
	}
	public int getRelike() {
		return relike;
	}
	public void setRelike(int relike) {
		this.relike = relike;
	}
	public int getRebad() {
		return rebad;
	}
	public void setRebad(int rebad) {
		this.rebad = rebad;
	}
	public int getRedel() {
		return redel;
	}
	public void setRedel(int redel) {
		this.redel = redel;
	}
	public int getRereport() {
		return rereport;
	}
	public void setRereport(int rereport) {
		this.rereport = rereport;
	}
	public String getRdate() {
		return rdate;
	}
	public void setRdate(String rdate) {
		this.rdate = rdate;
	}
	public String getRcontent() {
		return rcontent;
	}
	public void setRcontent(String rcontent) {
		this.rcontent = rcontent;
	}
	@Override
	public String toString() {
		return "replyDTO [replynum=" + replynum + ", comnum=" + comnum + ", membernum=" + membernum + ", relike="
				+ relike + ", rebad=" + rebad + ", redel=" + redel + ", rereport=" + rereport + ", r_membernum="
				+ r_membernum + ", r_comnum=" + r_comnum + ", rdate=" + rdate + ", rcontent=" + rcontent
				+ ", renickname=" + renickname + ", MemberDTO=" + MemberDTO + "]";
	}
	
	
}
