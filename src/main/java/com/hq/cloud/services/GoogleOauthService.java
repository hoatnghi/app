package com.hq.cloud.services;

import java.io.IOException;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfo;

/**
 * Oauth2 service object based on given credential.
 * 
 * @author Hai Quach
 */
public class GoogleOauthService {
	
	
	protected static final String APPLICATION_NAME = "Hoat Nghi";
	
	private HttpTransport transport;
	private JsonFactory jsonFactory;
	private Credential credential;

	GoogleOauthService(Credential credential) {
		this.transport = new NetHttpTransport();
		this.jsonFactory = JacksonFactory.getDefaultInstance();
		this.credential = credential;
	}
	
	public Userinfo getUserInfo() throws IOException {
		return new Oauth2.Builder(this.transport, this.jsonFactory, this.credential)
			.setApplicationName(APPLICATION_NAME)
			.build().userinfo().get().execute();
	}
	
	protected HttpTransport getHttpTransport() {
		return this.transport;
	}
	
	protected JsonFactory getJsonFactory() {
		return this.jsonFactory;
	}

	public Credential getCredential() {
		return credential;
	}
}
