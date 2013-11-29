package com.hq.cloud.services;

import java.util.Collection;

import com.hq.cloud.domain.Album;

public interface GalleryService {
	public Album getAlbum(String id);
	public Collection<Album> getAlbums();
}
