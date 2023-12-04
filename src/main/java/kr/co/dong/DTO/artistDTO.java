package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class artistDTO {
	
	public int artistnum;
	public int artclick;
	public int debutyear;
	public int artlike;
	public int arttype;
	public String artistname;
	public String activity;
	public String artagency;
	public String artintro;
	public String activityyear;
	public String artgender;
	public String artgroup;
	public String artnational;
	
	public int bestsongcount;
	public int songrating;
	
	public artistmDTO ArtistmDTO;
	public artistDTO ArtistDTO;
	public albumDTO AlbumDTO;
	public songDTO SongDTO;
	public imgDTO ImgDTO;
	
	
	

	public int getBestsongcount() {
		return bestsongcount;
	}
	public void setBestsongcount(int bestsongcount) {
		this.bestsongcount = bestsongcount;
	}
	public int getSongrating() {
		return songrating;
	}
	public void setSongrating(int songrating) {
		this.songrating = songrating;
	}
	public artistmDTO getArtistmDTO() {
		return ArtistmDTO;
	}
	public void setArtistmDTO(artistmDTO artistmDTO) {
		ArtistmDTO = artistmDTO;
	}
	public artistDTO getArtistDTO() {
		return ArtistDTO;
	}
	public void setArtistDTO(artistDTO artistDTO) {
		ArtistDTO = artistDTO;
	}
	public int getArttype() {
		return arttype;
	}
	public void setArttype(int arttype) {
		this.arttype = arttype;
	}
	public String getArtnational() {
		return artnational;
	}
	public void setArtnational(String artnational) {
		this.artnational = artnational;
	}
	public imgDTO getImgDTO() {
		return ImgDTO;
	}
	public void setImgDTO(imgDTO imgDTO) {
		ImgDTO = imgDTO;
	}
	public int getArtclick() {
		return artclick;
	}
	public void setArtclick(int artclick) {
		this.artclick = artclick;
	}
	public albumDTO getAlbumDTO() {
		return AlbumDTO;
	}
	public void setAlbumDTO(albumDTO albumDTO) {
		AlbumDTO = albumDTO;
	}
	public songDTO getSongDTO() {
		return SongDTO;
	}
	public void setSongDTO(songDTO songDTO) {
		SongDTO = songDTO;
	}
	public int getArtistnum() {
		return artistnum;
	}
	public void setArtistnum(int artistnum) {
		this.artistnum = artistnum;
	}
	public int getDebutyear() {
		return debutyear;
	}
	public void setDebutyear(int debutyear) {
		this.debutyear = debutyear;
	}
	public int getArtlike() {
		return artlike;
	}
	public void setArtlike(int artlike) {
		this.artlike = artlike;
	}
	public String getArtistname() {
		return artistname;
	}
	public void setArtistname(String artistname) {
		this.artistname = artistname;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public String getArtagency() {
		return artagency;
	}
	public void setArtagency(String artagency) {
		this.artagency = artagency;
	}
	public String getArtintro() {
		return artintro;
	}
	public void setArtintro(String artintro) {
		this.artintro = artintro;
	}
	public String getActivityyear() {
		return activityyear;
	}
	public void setActivityyear(String activityyear) {
		this.activityyear = activityyear;
	}
	public String getArtgender() {
		return artgender;
	}
	public void setArtgender(String artgender) {
		this.artgender = artgender;
	}
	public String getArtgroup() {
		return artgroup;
	}
	public void setArtgroup(String artgroup) {
		this.artgroup = artgroup;
	}
	@Override
	public String toString() {
		return "artistDTO [artistnum=" + artistnum + ", artclick=" + artclick + ", debutyear=" + debutyear
				+ ", artlike=" + artlike + ", arttype=" + arttype + ", artistname=" + artistname + ", activity="
				+ activity + ", artagency=" + artagency + ", artintro=" + artintro + ", activityyear=" + activityyear
				+ ", artgender=" + artgender + ", artgroup=" + artgroup + ", artnational=" + artnational
				+ ", bestsongcount=" + bestsongcount + ", songrating=" + songrating + ", ArtistmDTO=" + ArtistmDTO
				+ ", ArtistDTO=" + ArtistDTO + ", AlbumDTO=" + AlbumDTO + ", SongDTO=" + SongDTO + ", ImgDTO=" + ImgDTO
				+ "]";
	}
	
	
	

}
