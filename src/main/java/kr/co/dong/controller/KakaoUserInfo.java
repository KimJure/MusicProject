package kr.co.dong.controller;

public class KakaoUserInfo {
	
    private String nickname;
    private String profile;

    // Constructor
    public KakaoUserInfo(String nickname, String profile) {
        this.nickname = nickname;
        this.profile = profile;
    }

    // Getters
    public String getNickname() {
        return nickname;
    }

    public String getProfile() {
        return profile;
    }

}
