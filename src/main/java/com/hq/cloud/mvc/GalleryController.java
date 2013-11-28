package com.hq.cloud.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hq.cloud.services.ServiceFactory;

@Controller
@RequestMapping(value="/gallery")
public class GalleryController {
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(Model model) {
		if (ServiceFactory.getGoogleDriveService() == null) {
			String url = ServiceFactory.getAuthorizationUrl();
			model.addAttribute("driveURL", url);
			model.addAttribute("picasaURL", url);
		} else {
			model.addAttribute("driveURL", "/gallery/drive");
			model.addAttribute("picasaURL", "/gallery/picasa");
		}
		return "Home";
	}
	
	@RequestMapping(value="/picasa", method=RequestMethod.GET)
	public String picasa(Model model) {
		return "GooglePicasa";
	}
	
  @RequestMapping(value="/drive", method=RequestMethod.GET)
  public String drive(Model model) {
	if (ServiceFactory.getGoogleDriveService() == null) {
		return "redirect:" + ServiceFactory.getAuthorizationUrl();
	}
    model.addAttribute("albums", ServiceFactory.getGoogleDriveService().getAlbums());
    return "GoogleDrive";
  }
}
