package com.hq.cloud.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.Drive.Changes;
import com.google.api.services.drive.model.Change;
import com.google.api.services.drive.model.ChangeList;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.hq.cloud.domain.Album;
import com.hq.cloud.domain.Photo;

/**
 * Drive service object based on given credential.
 * 
 * @author Hai Quach
 *
 */
public class GoogleDriveService extends BaseGoogleService implements GalleryService {
	
  private static final String FOLDER_MINE_TYPE = "application/vnd.google-apps.folder";
  
  private Drive drive;
  
  GoogleDriveService(Credential credential) {
	  super(credential);
	  this.drive = new Drive.Builder(getHttpTransport(), getJsonFactory(), getCredential())
	  	.setApplicationName(APPLICATION_NAME)
	  	.build();
  }
  
  /**
   * Retrieve a list of Change resources.
   * @return List of Change resources.
   * @throws IOException
   */
  public Set<String> retrieveAllChanges() throws IOException {
    Set<String> result = new HashSet<String>();
    Changes.List request = drive.changes().list();
    do {
      try {
        ChangeList changes = request.execute();
        for(Change change : changes.getItems()) {
          result.add(change.getFile().getThumbnailLink());
        }
          
        request.setPageToken(changes.getNextPageToken());
      } catch (IOException e) {
          request.setPageToken(null);
      }
    } while (request.getPageToken() != null &&
               request.getPageToken().length() > 0);
    return result;
  }
  
  public Collection<Album> getAllFullAlbums() {
    Collection<Album> albums = new ArrayList<Album>();
    try {
      FileList list = drive.files().list().setQ("mimeType='" + FOLDER_MINE_TYPE + "'").execute();
      for (File file : list.getItems()) {
        String folderId = file.getId();
        FileList photos = drive.files().list().setQ("'" + folderId + "' in parents").execute();
        List<Photo> photosList = new ArrayList<Photo>();
          for (File photo : photos.getItems()) {
            String link = photo.getWebContentLink();
            if (link.indexOf("=s220") > 0) {
              link = link.substring(0, link.indexOf("=s220"));
            }
            photosList.add(new Photo(photo.getId(), photo.getTitle(), photo.getDescription(), 
                photo.getThumbnailLink(), link));
          }
          albums.add(new Album(file.getId(), file.getTitle(), file.getTitle(), 
              file.getDescription(), file.getThumbnailLink(), photosList));
      }
      return albums;
    } catch (Exception ex) {
      return Collections.emptyList();
    }
  }
  
  public Collection<Album> getAlbums() {
    Collection<Album> albums = new ArrayList<Album>();
    try {
      FileList list = drive.files().list().setQ("mimeType='" + FOLDER_MINE_TYPE + "'").execute();
      for (File file : list.getItems()) {
        FileList photos = drive.files().list().setQ("'" + file.getId() + "' in parents").execute();
        String thumbnail = "";
        if (!photos.getItems().isEmpty()) {
          thumbnail = photos.getItems().get(0).getThumbnailLink();
        }
          albums.add(new Album(file.getId(), file.getTitle(), file.getTitle(), 
              file.getDescription(), thumbnail, null));
      }
      return albums;
    } catch (Exception ex) {
      return Collections.emptyList();
    }
  }

  public Album getAlbum(String folderId) {
    try {
      
      FileList photos = drive.files().list().setQ("'" + folderId + "' in parents").execute();
      List<Photo> photosList = new ArrayList<Photo>();
        for (File photo : photos.getItems()) {
          String link = photo.getThumbnailLink();
          if (link.indexOf("=s220") > 0) {
            link = link.substring(0, link.indexOf("=s220"));
          }
          photosList.add(new Photo(photo.getId(), photo.getTitle(), photo.getDescription(), 
              photo.getThumbnailLink(), link));
        }
        File file = drive.files().get(folderId).execute();
  	    return new Album(file.getId(), file.getTitle(), file.getTitle(), file.getDescription(), 
  	    		file.getThumbnailLink(), photosList);
    } catch (IOException ex) {
      return null;
    }
  }
}
