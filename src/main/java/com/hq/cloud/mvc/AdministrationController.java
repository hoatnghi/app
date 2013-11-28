package com.hq.cloud.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hq.cloud.services.ServiceFactory;

@Controller
@RequestMapping(value="/admin")
public class AdministrationController {

	@RequestMapping(value="/googleCallback", method=RequestMethod.GET)
	public String googleCredentialCallback(@RequestParam("code") String code, Model model) {
		ServiceFactory.processGoogleCode(code);
		return "redirect:/gallery/";
	}
	
}
