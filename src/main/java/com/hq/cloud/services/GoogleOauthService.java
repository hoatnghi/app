package com.hq.cloud.services;

import java.io.IOException;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfo;

/**
 * Oauth2 service object based on given credential.
 * 
 * @author Hai Quach
 */
public class GoogleOauthService extends BaseGoogleService {

	private Oauth2 oauth2;
	
	GoogleOauthService(Credential credential) {
		super(credential);
		this.oauth2 = new Oauth2.Builder(getHttpTransport(), getJsonFactory(), getCredential())
    		.setApplicationName(APPLICATION_NAME)
    		.build();
	}
	
	public Userinfo getUserInfo() throws IOException {
		return this.oauth2.userinfo().get().execute();
	}
}
