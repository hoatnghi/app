package com.hq.cloud.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hq.cloud.services.ServiceFactory;

@Controller
@RequestMapping(value = "/gallery")
public class GalleryController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		if (ServiceFactory.getGoogleDriveService() == null) {
			model.addAttribute("authorURL", ServiceFactory.getAuthorizationUrl());
		}
		return "Home";
	}

	@RequestMapping(value = "/picasa", method = RequestMethod.GET)
	public String picasa(Model model) {
		if (ServiceFactory.getGooglePicasaService() == null) {
			return "redirect:" + ServiceFactory.getAuthorizationUrl();
		}
		model.addAttribute("albums", ServiceFactory.getGooglePicasaService().getAlbums());
		return "GooglePicasa";
	}

	@RequestMapping(value = "/drive", method = RequestMethod.GET)
	public String drive(Model model) {
		if (ServiceFactory.getGoogleDriveService() == null) {
			return "redirect:" + ServiceFactory.getAuthorizationUrl();
		}
		model.addAttribute("albums", ServiceFactory.getGoogleDriveService().getAlbums());
		return "GoogleDrive";
	}
}
