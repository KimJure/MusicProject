package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class albumDTO {

	public int albumnum;
	public int artistnum;
	public int category;
	public int domestic;
	public int genre;
	public int style;
	public int albumlike;
	public String albumtext;
	public String publisher;
	public String agency;
	public String albumname;
	public String releasedate;
	public int songcount;
	public int albumcount;
	
	public albumDTO AlbumDTO;
	public artistDTO ArtistDTO;
	public songDTO SongDTO;	
	public imgDTO ImgDTO;
	
	
	
	public int getAlbumcount() {
		return albumcount;
	}
	public void setAlbumcount(int albumcount) {
		this.albumcount = albumcount;
	}
	public int getSongcount() {
		return songcount;
	}
	public void setSongcount(int songcount) {
		this.songcount = songcount;
	}
	public albumDTO getAlbumDTO() {
		return AlbumDTO;
	}
	public void setAlbumDTO(albumDTO albumDTO) {
		AlbumDTO = albumDTO;
	}
	public imgDTO getImgDTO() {
		return ImgDTO;
	}
	public void setImgDTO(imgDTO imgDTO) {
		ImgDTO = imgDTO;
	}
	public artistDTO getArtistDTO() {
		return ArtistDTO;
	}
	public void setArtistDTO(artistDTO artistDTO) {
		ArtistDTO = artistDTO;
	}
	public songDTO getSongDTO() {
		return SongDTO;
	}
	public void setSongDTO(songDTO songDTO) {
		SongDTO = songDTO;
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
	public int getCategory() {
		return category;
	}
	public void setCategory(int category) {
		this.category = category;
	}
	public int getDomestic() {
		return domestic;
	}
	public void setDomestic(int domestic) {
		this.domestic = domestic;
	}
	public int getGenre() {
		return genre;
	}
	public void setGenre(int genre) {
		this.genre = genre;
	}
	public int getStyle() {
		return style;
	}
	public void setStyle(int style) {
		this.style = style;
	}
	public int getAlbumlike() {
		return albumlike;
	}
	public void setAlbumlike(int albumlike) {
		this.albumlike = albumlike;
	}
	public String getAlbumtext() {
		return albumtext;
	}
	public void setAlbumtext(String albumtext) {
		this.albumtext = albumtext;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getAgency() {
		return agency;
	}
	public void setAgency(String agency) {
		this.agency = agency;
	}
	public String getAlbumname() {
		return albumname;
	}
	public void setAlbumname(String albumname) {
		this.albumname = albumname;
	}
	public String getReleasedate() {
		return releasedate;
	}
	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}
	@Override
	public String toString() {
		return "albumDTO [albumnum=" + albumnum + ", artistnum=" + artistnum + ", category=" + category + ", domestic="
				+ domestic + ", genre=" + genre + ", style=" + style + ", albumlike=" + albumlike + ", albumtext="
				+ albumtext + ", publisher=" + publisher + ", agency=" + agency + ", albumname=" + albumname
				+ ", releasedate=" + releasedate + ", songcount=" + songcount + ", albumcount=" + albumcount
				+ ", AlbumDTO=" + AlbumDTO + ", ArtistDTO=" + ArtistDTO + ", SongDTO=" + SongDTO + ", ImgDTO=" + ImgDTO
				+ "]";
	}
	
	
	
}
