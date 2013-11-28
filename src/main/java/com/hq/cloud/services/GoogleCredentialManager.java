package com.hq.cloud.services;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeRequestUrl;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.services.drive.Drive;

class GoogleCredentialManager {
		
  /**
   * Scopes for which to request access from the user.
   */
  public static final List<String> SCOPES = Arrays.asList(
	      // Required to access and manipulate files.
	      "https://www.googleapis.com/auth/drive",
	      // Required to identify the user in our data store.
	      "https://www.googleapis.com/auth/userinfo.email",
	      "https://www.googleapis.com/auth/userinfo.profile");
	  
  /**
   * Client secrets object.
   */
  private GoogleClientSecrets clientSecrets;

  /**
   * Transport layer for OAuth2 client.
   */
  private HttpTransport transport;

  /**
   * JSON factory for OAuth2 client.
   */
  private JsonFactory jsonFactory;

  /**
   * Credential Manager constructor.
   * 
   * @param clientSecrets App client secrets to be used during OAuth2 exchanges.
   * @param transport Transportation layer for OAuth2 client.
   * @param factory JSON factory for OAuth2 client.
   */
  GoogleCredentialManager(GoogleClientSecrets clientSecrets, HttpTransport transport, JsonFactory factory) {
    this.clientSecrets = clientSecrets;
    this.transport = transport;
    this.jsonFactory = factory;
  }

  /**
   * Builds an empty credential object.
   * 
   * @return An empty credential object.
   */
  public Credential buildEmpty() {
    return new GoogleCredential.Builder()
        .setClientSecrets(this.clientSecrets).setTransport(transport)
        .setJsonFactory(jsonFactory).build();
  }

  /**
   * Generates a consent page url.
   * 
   * @return A consent page url string for user redirection.
   */
  public String getAuthorizationUrl() {
    GoogleAuthorizationCodeRequestUrl urlBuilder = new GoogleAuthorizationCodeRequestUrl(
        clientSecrets.getWeb().getClientId(), clientSecrets.getWeb()
            .getRedirectUris().get(0), SCOPES).setAccessType("offline").setApprovalPrompt("force");
    return urlBuilder.build();
  }

  /**
   * Retrieves a new access token by exchanging the given code with OAuth2
   * end-points.
   * 
   * @param code Exchange code.
   * @return A credential object.
   */
  public Credential retrieve(String code) {
    try {
      GoogleTokenResponse response = new GoogleAuthorizationCodeTokenRequest(
          transport, jsonFactory, clientSecrets.getWeb()
              .getClientId(), clientSecrets.getWeb()
              .getClientSecret(), code, clientSecrets.getWeb()
              .getRedirectUris().get(0)).execute();
      return buildEmpty().setAccessToken(response.getAccessToken())
          .setRefreshToken(response.getRefreshToken())
          .setExpirationTimeMilliseconds(response.getExpiresInSeconds());
    } catch (IOException e) {
      new RuntimeException(
          "An unknown problem occured while retrieving token");
    }
    return null;
  }


  /**
   * Build and return a Drive service object based on given credential.
   * 
   * @param Google credential
   * @return Drive service object that is ready to make requests, 
   *     or null if there was a problem.
   */
  public Drive getDriveService(Credential credential) {
    return new Drive.Builder(this.transport, this.jsonFactory, credential).build();
  }
	
}
