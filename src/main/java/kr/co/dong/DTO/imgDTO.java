package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class imgDTO {
	
	private int imgnum;
	private int albumnum;
	private int artistnum;
	private int itemnum;
	private String url;
	private String imgname;
	private String m_url;
	private String m_imgname;
	
	
	@Override
	public String toString() {
		return "imgDTO [imgnum=" + imgnum + ", albumnum=" + albumnum + ", artistnum=" + artistnum + ", itemnum="
				+ itemnum + ", url=" + url + ", imgname=" + imgname + ", m_url=" + m_url + ", m_imgname=" + m_imgname
				+ "]";
	}
	
	
	public String getM_url() {
		return m_url;
	}


	public void setM_url(String m_url) {
		this.m_url = m_url;
	}


	public String getM_imgname() {
		return m_imgname;
	}


	public void setM_imgname(String m_imgname) {
		this.m_imgname = m_imgname;
	}


	public int getAlbumnum() {
		return albumnum;
	}


	public void setAlbumnum(int albumnum) {
		this.albumnum = albumnum;
	}


	public int getArtistnum() {
		return artistnum;
	}


	public void setArtistnum(int artistnum) {
		this.artistnum = artistnum;
	}


	public int getImgnum() {
		return imgnum;
	}
	public void setImgnum(int imgnum) {
		this.imgnum = imgnum;
	}
	public int getItemnum() {
		return itemnum;
	}
	public void setItemnum(int itemnum) {
		this.itemnum = itemnum;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getImgname() {
		return imgname;
	}
	public void setImgname(String imgname) {
		this.imgname = imgname;
	}
	
	

}
