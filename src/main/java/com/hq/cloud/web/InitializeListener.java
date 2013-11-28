package com.hq.cloud.web;

import java.io.InputStream;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.hq.cloud.services.ServiceFactory;

public class InitializeListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		try {
			InputStream in = sce.getServletContext().getResourceAsStream("/WEB-INF/client_secret.json");
			ServiceFactory.loadGoogleCredentail(in);
		} catch (Exception ex) {
			
		}
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		
	}

}
