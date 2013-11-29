package com.hq.cloud.domain;

import java.util.Collection;


public class Album {
	private String id;
	private String title;
	private String name;
	private String description;
	private String thumbnail;
	private Collection<Photo> photos;

	public Album(String id, String title, String name, String desc,
			String thumbnail, Collection<Photo> photos) {
		this.id = id;
		this.title = title;
		this.name = name;
		this.description = desc;
		this.thumbnail = thumbnail;
		this.photos = photos;
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public Collection<Photo> getPhotos() {
		return photos;
	}
}
