package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;

public interface CatInformationController {
	ClientMessage registerCat(Cat cat);
	Cat getCat(Cat cat);
	ClientMessage updateCat(Cat cat);
}
