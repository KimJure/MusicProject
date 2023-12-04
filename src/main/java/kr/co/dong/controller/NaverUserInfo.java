package kr.co.dong.controller;

public class NaverUserInfo {

    private String naver_id;
    private int naverLinkCheck;

    // Constructor
    public NaverUserInfo(String naver_Id, int naverLinkCheck) {
        this.naver_id = naver_Id;
        this.naverLinkCheck = naverLinkCheck;
    }

    // Getters
    public String getNaver_Id() {
        return naver_id;
    }

    public int getNaverLinkCheck() {
        return naverLinkCheck;
    }
}