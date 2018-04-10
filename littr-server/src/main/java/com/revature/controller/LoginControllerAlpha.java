package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.Cat;
import com.revature.service.CatService;

@Controller("loginController")
public class LoginControllerAlpha implements LoginController {

	@Autowired
	private CatService catService;
	
	private static Logger logger = Logger.getLogger(LoginControllerAlpha.class);
	@Autowired
	private SessionFactory sessionFactory;
	
	public LoginControllerAlpha() {
		logger.trace("Injecting session factory bean.");
	}	

	@PostMapping("/login")
	public @ResponseBody Cat login(@RequestBody Cat cat, HttpServletRequest request) {
		logger.info(cat.toString());
		Cat loggedCat = catService.authenticate(cat);
		request.getSession().setAttribute("loggedCat", loggedCat);
		return loggedCat;
	}

	@Override
	public void logout(HttpServletRequest request) {
		request.getSession().invalidate();
	}

}
