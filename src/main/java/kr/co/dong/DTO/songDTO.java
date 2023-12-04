package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class songDTO {
	
	public int songnum;
	public int artistnum;
	public int albumnum;
	public int songgenre;
	public int songstyle;
	public int songlike;
	public int title;
	public int realtimect;
	public int dailyct;
	public int weeklyct;
	public int monthlyct;
	public int acc;
	public String lyrics;
	public String songname;
	public int songrating;
	public songDTO SongDTO;
	public artistDTO ArtistDTO;
	public albumDTO AlbumDTO;
	public imgDTO ImgDTO;
	
	
	
	public int getSongrating() {
		return songrating;
	}
	public void setSongrating(int songrating) {
		this.songrating = songrating;
	}
	public songDTO getSongDTO() {
		return SongDTO;
	}
	public void setSongDTO(songDTO songDTO) {
		SongDTO = songDTO;
	}
	public imgDTO getImgDTO() {
		return ImgDTO;
	}
	public void setImgDTO(imgDTO imgDTO) {
		ImgDTO = imgDTO;
	}
	public int getArtistnum() {
		return artistnum;
	}
	public void setArtistnum(int artistnum) {
		this.artistnum = artistnum;
	}
	public artistDTO getArtistDTO() {
		return ArtistDTO;
	}
	public void setArtistDTO(artistDTO artistDTO) {
		ArtistDTO = artistDTO;
	}
	public albumDTO getAlbumDTO() {
		return AlbumDTO;
	}
	public void setAlbumDTO(albumDTO albumDTO) {
		AlbumDTO = albumDTO;
	}
	public int getSongnum() {
		return songnum;
	}
	public void setSongnum(int songnum) {
		this.songnum = songnum;
	}
	public int getAlbumnum() {
		return albumnum;
	}
	public void setAlbumnum(int albumnum) {
		this.albumnum = albumnum;
	}
	public int getSonggenre() {
		return songgenre;
	}
	public void setSonggenre(int songgenre) {
		this.songgenre = songgenre;
	}
	public int getSongstyle() {
		return songstyle;
	}
	public void setSongstyle(int songstyle) {
		this.songstyle = songstyle;
	}
	public int getSonglike() {
		return songlike;
	}
	public void setSonglike(int songlike) {
		this.songlike = songlike;
	}
	public int getTitle() {
		return title;
	}
	public void setTitle(int title) {
		this.title = title;
	}
	public int getRealtimect() {
		return realtimect;
	}
	public void setRealtimect(int realtimect) {
		this.realtimect = realtimect;
	}
	public int getDailyct() {
		return dailyct;
	}
	public void setDailyct(int dailyct) {
		this.dailyct = dailyct;
	}
	public int getWeeklyct() {
		return weeklyct;
	}
	public void setWeeklyct(int weeklyct) {
		this.weeklyct = weeklyct;
	}
	public int getMonthlyct() {
		return monthlyct;
	}
	public void setMonthlyct(int monthlyct) {
		this.monthlyct = monthlyct;
	}
	public int getAcc() {
		return acc;
	}
	public void setAcc(int acc) {
		this.acc = acc;
	}
	public String getLyrics() {
		return lyrics;
	}
	public void setLyrics(String lyrics) {
		this.lyrics = lyrics;
	}
	public String getSongname() {
		return songname;
	}
	public void setSongname(String songname) {
		this.songname = songname;
	}
	
	
	
	
	
	@Override
	public String toString() {
		return "songDTO [songnum=" + songnum + ", artistnum=" + artistnum + ", albumnum=" + albumnum + ", songgenre="
				+ songgenre + ", songstyle=" + songstyle + ", songlike=" + songlike + ", title=" + title
				+ ", realtimect=" + realtimect + ", dailyct=" + dailyct + ", weeklyct=" + weeklyct + ", monthlyct="
				+ monthlyct + ", acc=" + acc + ", lyrics=" + lyrics + ", songname=" + songname + ", songrating="
				+ songrating + ", SongDTO=" + SongDTO + ", ArtistDTO=" + ArtistDTO + ", AlbumDTO=" + AlbumDTO
				+ ", ImgDTO=" + ImgDTO + "]";
	}
	
	
	

}
