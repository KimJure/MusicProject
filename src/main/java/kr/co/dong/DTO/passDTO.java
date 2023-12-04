package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class passDTO {
	
	public int passnum;
	public int passpay;
	public int passprice;
	public String passname;
	public String passexplan;
	public int passdate;
	
	
	public int getPassdate() {
		return passdate;
	}
	public void setPassdate(int passdate) {
		this.passdate = passdate;
	}
	public int getPassprice() {
		return passprice;
	}
	public void setPassprice(int passprice) {
		this.passprice = passprice;
	}
	public int getPassnum() {
		return passnum;
	}
	public void setPassnum(int passnum) {
		this.passnum = passnum;
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
	@Override
	public String toString() {
		return "passDTO [passnum=" + passnum + ", passpay=" + passpay + ", passprice=" + passprice + ", passname="
				+ passname + ", passexplan=" + passexplan + ", passdate=" + passdate + "]";
	}
	
	

}
