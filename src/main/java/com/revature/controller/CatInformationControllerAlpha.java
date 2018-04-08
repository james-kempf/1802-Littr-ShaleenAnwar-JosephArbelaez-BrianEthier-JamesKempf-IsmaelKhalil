package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.service.CatService;

@Controller("catInfoController")
@CrossOrigin(origins= "http://localhost:4200")
public class CatInformationControllerAlpha implements CatInformationController {

	@Autowired
	private CatService catService;
	
	@PostMapping("/register")
	public ClientMessage registerCat(Cat cat, HttpServletRequest request) {
		return null;
	}

	@Override
	public ClientMessage updateCat(Cat cat, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

}
