package kr.co.dong.DTO;

public class profileDTO {
	
	public int profilenum;
	public String profileurl;
	public String profilename;
	public int profilestate;
	public int membernum;
	
	public String profile;

	public int getProfilenum() {
		return profilenum;
	}

	public void setProfilenum(int profilenum) {
		this.profilenum = profilenum;
	}

	public String getProfileurl() {
		return profileurl;
	}

	public void setProfileurl(String profileurl) {
		this.profileurl = profileurl;
	}

	public String getProfilename() {
		return profilename;
	}

	public void setProfilename(String profilename) {
		this.profilename = profilename;
	}

	public int getProfilestate() {
		return profilestate;
	}

	public void setProfilestate(int profilestate) {
		this.profilestate = profilestate;
	}

	public int getMembernum() {
		return membernum;
	}

	public void setMembernum(int membernum) {
		this.membernum = membernum;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	@Override
	public String toString() {
		return "profileDTO [profilenum=" + profilenum + ", profileurl=" + profileurl + ", profilename=" + profilename
				+ ", profilestate=" + profilestate + ", membernum=" + membernum + ", profile=" + profile + "]";
	}
	
	
}
