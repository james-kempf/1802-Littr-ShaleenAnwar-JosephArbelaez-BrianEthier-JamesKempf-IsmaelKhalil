package com.revature.controller;

import static com.revature.util.ClientMessageUtil.LOGIN_SUCCESSFUL;
import static com.revature.util.ClientMessageUtil.SOMETHING_WRONG;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.service.CatService;
import com.revature.service.CatServiceAlpha;

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
	public @ResponseBody Cat login(@RequestBody Cat cat) {
		return catService.authenticate(cat);
	}

	@Override
	public String logout(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

}
