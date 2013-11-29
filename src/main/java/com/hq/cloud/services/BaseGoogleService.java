package com.hq.cloud.services;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

abstract class BaseGoogleService {

	protected static final String APPLICATION_NAME = "Hoat Nghi";
	
	private HttpTransport transport = new NetHttpTransport();
	private JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
	private Credential credential;
	
	BaseGoogleService(Credential credential) {
		this.credential = credential;
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