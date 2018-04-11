package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.service.CatService;
import com.revature.util.ClientMessageUtil;

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
	public @ResponseBody Object login(@RequestBody Cat cat, HttpServletRequest request) {
		logger.info(cat.toString());
		if(cat == null || cat.getPassword() == null || cat.getPassword().equals("") || cat.getUsername() == null || cat.getUsername().equals("")) {
			return ClientMessageUtil.INVALID_CREDENTIALS;
		} else {
			Cat loggedCat = catService.authenticate(cat);
			if(loggedCat != null) {
				return loggedCat;
			} else {
				return ClientMessageUtil.INVALID_CREDENTIALS;
			}
		}
	}
	
//	Cat loggedCat = catService.authenticate(cat);
//		request.getSession().setAttribute("loggedCat", loggedCat);
//		return loggedCat;
//	}

	@Override
	@GetMapping("/logout")
	public @ResponseBody ClientMessage logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return ClientMessageUtil.LOGOUT_SUCCESSFUL;
	}

}
