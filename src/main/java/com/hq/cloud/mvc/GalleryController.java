package com.hq.cloud.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/gallery")
public class GalleryController {
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(Model model) {
		return "Home";
	}
	
	@RequestMapping(value="/picasa", method=RequestMethod.GET)
	public String picasa(Model model) {
		return "GooglePicasa";
	}
	
	@RequestMapping(value="/drive", method=RequestMethod.GET)
	public String drive(Model model) {
		return "GoogleDrive";
	}
}
