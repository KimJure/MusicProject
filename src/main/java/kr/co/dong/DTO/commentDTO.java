package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class commentDTO {
	
	public int comnum;
	public int albumnum;
	public int songnum;
	public int membernum;
	public int artistnum;
	public int comlike;
	public int comreport;
	public int comdel;
	public int combad;
	public int c_membernum;
	public String ccontent;
	public String cdate;
	public String comnickname;
	
	public replyDTO ReplyDTO;
	public memberDTO MemberDTO;
	
	
	

	public int getC_membernum() {
		return c_membernum;
	}
	public void setC_membernum(int c_membernum) {
		this.c_membernum = c_membernum;
	}
	public String getComnickname() {
		return comnickname;
	}
	public void setComnickname(String comnickname) {
		this.comnickname = comnickname;
	}
	public memberDTO getMemberDTO() {
		return MemberDTO;
	}
	public void setMemberDTO(memberDTO memberDTO) {
		MemberDTO = memberDTO;
	}
	public replyDTO getReplyDTO() {
		return ReplyDTO;
	}
	public void setReplyDTO(replyDTO replyDTO) {
		ReplyDTO = replyDTO;
	}
	public int getComnum() {
		return comnum;
	}
	public void setComnum(int comnum) {
		this.comnum = comnum;
	}
	public int getAlbumnum() {
		return albumnum;
	}
	public void setAlbumnum(int albumnum) {
		this.albumnum = albumnum;
	}
	public int getSongnum() {
		return songnum;
	}
	public void setSongnum(int songnum) {
		this.songnum = songnum;
	}
	public int getMembernum() {
		return membernum;
	}
	public void setMembernum(int membernum) {
		this.membernum = membernum;
	}
	public int getArtistnum() {
		return artistnum;
	}
	public void setArtistnum(int artistnum) {
		this.artistnum = artistnum;
	}
	public int getComlike() {
		return comlike;
	}
	public void setComlike(int comlike) {
		this.comlike = comlike;
	}
	public int getComreport() {
		return comreport;
	}
	public void setComreport(int comreport) {
		this.comreport = comreport;
	}
	public int getComdel() {
		return comdel;
	}
	public void setComdel(int comdel) {
		this.comdel = comdel;
	}
	public int getCombad() {
		return combad;
	}
	public void setCombad(int combad) {
		this.combad = combad;
	}
	public String getCcontent() {
		return ccontent;
	}
	public void setCcontent(String ccontent) {
		this.ccontent = ccontent;
	}
	public String getCdate() {
		return cdate;
	}
	public void setCdate(String cdate) {
		this.cdate = cdate;
	}
	@Override
	public String toString() {
		return "commentDTO [comnum=" + comnum + ", albumnum=" + albumnum + ", songnum=" + songnum + ", membernum="
				+ membernum + ", artistnum=" + artistnum + ", comlike=" + comlike + ", comreport=" + comreport
				+ ", comdel=" + comdel + ", combad=" + combad + ", c_membernum=" + c_membernum + ", ccontent="
				+ ccontent + ", cdate=" + cdate + ", comnickname=" + comnickname + ", ReplyDTO=" + ReplyDTO
				+ ", MemberDTO=" + MemberDTO + "]";
	}
	
	
}
