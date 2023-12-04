package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class codetableDTO {
	
	public int codenum;
	public String codename;
	public String codestring;
	
	
	public int getCodenum() {
		return codenum;
	}
	public void setCodenum(int codenum) {
		this.codenum = codenum;
	}
	public String getCodename() {
		return codename;
	}
	public void setCodename(String codename) {
		this.codename = codename;
	}
	public String getCodestring() {
		return codestring;
	}
	public void setCodestring(String codestring) {
		this.codestring = codestring;
	}
	@Override
	public String toString() {
		return "codetableDTO [codenum=" + codenum + ", codename=" + codename + ", codestring=" + codestring + "]";
	}
	
	
	
}
