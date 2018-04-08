package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;

public interface CatInformationController {
	ClientMessage registerCat(Cat cat, HttpServletRequest request);
	ClientMessage updateCat(Cat cat, HttpServletRequest request);
}
