package com.hq.cloud.services;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;

public final class ServiceFactory {
	static Credential credential;
	static GoogleCredentialManager manager;
	
	/**
	 * Get Google Drive service
	 * 
	 * @return Google Drive service
	 */
	public static GooglePicasaService getGooglePicasaService() {
		if (credential == null) 
			return null;
		return new GooglePicasaService(credential);
	}

	/**
	 * Get Google Drive service
	 * 
	 * @return Google Drive service
	 */
	public static GoogleDriveService getGoogleDriveService() {
		if (credential == null) 
			return null;
		return new GoogleDriveService(credential);
	}
	
	public static GoogleOauthService getGoogleOauthService() {
		if (credential == null)
			return null;
		return new GoogleOauthService(credential);
	}

	/**
	 * Load google credential manager from client secrets
	 * @param in client secrets input stream
	 */
	public static void loadGoogleCredentail(InputStream in) {
		try {
			manager = new GoogleCredentialManager(
					GoogleClientSecrets.load(JacksonFactory.getDefaultInstance(), new InputStreamReader(in)), 
					new NetHttpTransport(), 
					new JacksonFactory());
		} catch (IOException ioEx) {
			throw new RuntimeException("Unable to client secrets");
		}
	}

	/**
	 * Get authorization URL
	 * @return auth url
	 */
	public static String getAuthorizationUrl() {
		return manager.getAuthorizationUrl();
	}

	/**
	 * Process google response code and build a google credential
	 * @param code google response code
	 */
	public static void processGoogleCode(String code) {
		credential = manager.retrieve(code);
	}
}
