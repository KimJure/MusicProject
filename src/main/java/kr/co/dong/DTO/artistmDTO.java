package kr.co.dong.DTO;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component

public class artistmDTO {
	
	public int artistnum_m;
	public int artclick_m;
	public int debutyear_m;
	public int artlike_m;
	public String arttype_m;
	public String artistname_m;
	public String activity_m;
	public String artagency_m;
	public String artintro_m;
	public String activityyear_m;
	public String artgender_m;
	public String artgroup_m;
	public String artnational_m;
	
		
	public artistDTO ArtistDTO;
	public imgDTO ImgDTO;

	
	

	public imgDTO getImgDTO() {
		return ImgDTO;
	}

	public void setImgDTO(imgDTO imgDTO) {
		ImgDTO = imgDTO;
	}

	public int getArtistnum_m() {
		return artistnum_m;
	}

	public void setArtistnum_m(int artistnum_m) {
		this.artistnum_m = artistnum_m;
	}

	public int getArtclick_m() {
		return artclick_m;
	}

	public void setArtclick_m(int artclick_m) {
		this.artclick_m = artclick_m;
	}

	public int getDebutyear_m() {
		return debutyear_m;
	}

	public void setDebutyear_m(int debutyear_m) {
		this.debutyear_m = debutyear_m;
	}

	public int getArtlike_m() {
		return artlike_m;
	}

	public void setArtlike_m(int artlike_m) {
		this.artlike_m = artlike_m;
	}

	public String getArttype_m() {
		return arttype_m;
	}

	public void setArttype_m(String arttype_m) {
		this.arttype_m = arttype_m;
	}

	public String getArtistname_m() {
		return artistname_m;
	}

	public void setArtistname_m(String artistname_m) {
		this.artistname_m = artistname_m;
	}

	public String getActivity_m() {
		return activity_m;
	}

	public void setActivity_m(String activity_m) {
		this.activity_m = activity_m;
	}

	public String getArtagency_m() {
		return artagency_m;
	}

	public void setArtagency_m(String artagency_m) {
		this.artagency_m = artagency_m;
	}

	public String getArtintro_m() {
		return artintro_m;
	}

	public void setArtintro_m(String artintro_m) {
		this.artintro_m = artintro_m;
	}

	public String getActivityyear_m() {
		return activityyear_m;
	}

	public void setActivityyear_m(String activityyear_m) {
		this.activityyear_m = activityyear_m;
	}

	public String getArtgender_m() {
		return artgender_m;
	}

	public void setArtgender_m(String artgender_m) {
		this.artgender_m = artgender_m;
	}

	public String getArtgroup_m() {
		return artgroup_m;
	}

	public void setArtgroup_m(String artgroup_m) {
		this.artgroup_m = artgroup_m;
	}

	public String getArtnational_m() {
		return artnational_m;
	}

	public void setArtnational_m(String artnational_m) {
		this.artnational_m = artnational_m;
	}

	public artistDTO getArtistDTO() {
		return ArtistDTO;
	}

	public void setArtistDTO(artistDTO artistDTO) {
		ArtistDTO = artistDTO;
	}

	@Override
	public String toString() {
		return "artistmDTO [artistnum_m=" + artistnum_m + ", artclick_m=" + artclick_m + ", debutyear_m=" + debutyear_m
				+ ", artlike_m=" + artlike_m + ", arttype_m=" + arttype_m + ", artistname_m=" + artistname_m
				+ ", activity_m=" + activity_m + ", artagency_m=" + artagency_m + ", artintro_m=" + artintro_m
				+ ", activityyear_m=" + activityyear_m + ", artgender_m=" + artgender_m + ", artgroup_m=" + artgroup_m
				+ ", artnational_m=" + artnational_m + ", ArtistDTO=" + ArtistDTO + ", ImgDTO=" + ImgDTO + "]";
	}
	
	
}
