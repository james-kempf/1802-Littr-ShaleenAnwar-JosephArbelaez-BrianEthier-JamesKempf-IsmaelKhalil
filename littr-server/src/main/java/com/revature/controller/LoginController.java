package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;

public interface LoginController {
	
	public abstract Object login(Cat cat, HttpServletRequest request);
	
	public abstract ClientMessage logout(HttpServletRequest request);
}
