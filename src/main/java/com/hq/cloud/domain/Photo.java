package com.hq.cloud.domain;

public class Photo {
	private String photoId;
	private String title;
	private String description;
	private String thumbnail;
	private String link;

	public Photo(String photoId, String title, String description,
			String thumbnail, String link) {
		this.photoId = photoId;
		this.title = title;
		this.description = description;
		this.thumbnail = thumbnail;
		this.link = link;
	}

	public String getPhotoId() {
		return photoId;
	}

	public void setPhotoId(String photoId) {
		this.photoId = photoId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
}
