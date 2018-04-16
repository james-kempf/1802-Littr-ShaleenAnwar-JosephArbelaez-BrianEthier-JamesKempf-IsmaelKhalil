package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.model.Cat;

public interface LoginController {
	
	public abstract Object login(Cat cat, HttpServletRequest request);
	
	public abstract Object logout(HttpServletRequest request);
}
