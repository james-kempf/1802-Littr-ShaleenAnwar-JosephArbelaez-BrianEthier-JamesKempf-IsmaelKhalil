package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;

public interface LoginController {
	
	Cat login(Cat cat);
	public String logout(HttpServletRequest request);

	
}
