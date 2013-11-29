package com.hq.cloud.services;

import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import com.google.api.client.auth.oauth2.Credential;
import com.google.gdata.client.photos.PicasawebService;
import com.google.gdata.data.photos.AlbumEntry;
import com.google.gdata.data.photos.AlbumFeed;
import com.google.gdata.data.photos.PhotoEntry;
import com.google.gdata.data.photos.UserFeed;
import com.hq.cloud.domain.Album;
import com.hq.cloud.domain.Photo;

/**
 * Picasa service object based on given credential.
 * 
 * @author Hai Quach
 */
public class GooglePicasaService extends GoogleOauthService implements GalleryService {
	private PicasawebService picasa;
	private Map<String, Album> albums;
	
	private static final String DEFAULT_ID = "hoatnghi";
	private static final String DEFAULT_FEED = "https://picasaweb.google.com/data/feed/api/user/";
	private static final String DEFAULT_USER_FEE_URL = DEFAULT_FEED + DEFAULT_ID + "?kind=album";
	private static final String DEFAULT_ALBUM_FEED = DEFAULT_FEED + DEFAULT_ID + "/albumid/";
	
	GooglePicasaService(Credential credential) {
		super(credential);
		PicasawebService service = new PicasawebService(APPLICATION_NAME);
	    service.setOAuth2Credentials(credential);
		this.picasa = service;
		initialize();
	}
	
	private void initialize() {
		Map<String, Album> pAlbums = new HashMap<String, Album>();
	    try {
	      URL feedUrl = new URL(DEFAULT_USER_FEE_URL);
	      UserFeed myUserFeed = picasa.getFeed(feedUrl, UserFeed.class);
	      // build all albums
	      for (AlbumEntry entry : myUserFeed.getAlbumEntries()) {
	        String id = entry.getId();
	        int length = entry.getId().indexOf("albumid/") + 8;
	        String albumId = id.substring(length);
	        
	        Collection<Photo> photos = new ArrayList<Photo>();
	        // load all photos for each album
	        URL photosFeed = new URL(DEFAULT_ALBUM_FEED + albumId); 
	        AlbumFeed feed = picasa.getFeed(photosFeed, AlbumFeed.class);
	        for (PhotoEntry photo : feed.getPhotoEntries()) {
	          photos.add(new Photo(photo.getGphotoId(),
	              photo.getTitle().getPlainText(),
	              photo.getDescription().getPlainText(),
	              photo.getMediaThumbnails().get(0).getUrl(),
	              photo.getMediaContents().get(0).getUrl()));
	        }
	        pAlbums.put(albumId, new Album(albumId, 
	            entry.getTitle().getPlainText(), 
	            entry.getName(),
	            entry.getDescription().getPlainText(),
	            entry.getMediaThumbnails().get(0).getUrl(),
	            photos));
	      }
	    } catch (Exception ex) {
	    	ex.printStackTrace();
	    }
	    this.albums = pAlbums;
	}

	@Override
	public Album getAlbum(String id) {
		return albums.get(id);
	}

	@Override
	public Collection<Album> getAlbums() {
		return albums.values();
	}
}
