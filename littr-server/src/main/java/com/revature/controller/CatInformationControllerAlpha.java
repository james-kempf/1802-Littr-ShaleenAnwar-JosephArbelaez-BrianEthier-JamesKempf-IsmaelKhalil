package com.revature.controller;

import static com.revature.util.ClientMessageUtil.REGISTRATION_SUCCESSFUL;
import static com.revature.util.ClientMessageUtil.SOMETHING_WRONG;
import static com.revature.util.ClientMessageUtil.UPDATE_SUCCESSFUL;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.service.CatService;

@Controller("catInfoController")
@CrossOrigin(origins= "http://localhost:4200")
public class CatInformationControllerAlpha implements CatInformationController {

	private static Logger logger = Logger.getLogger(CatInformationController.class);
	
	@Autowired
	private CatService catService;
	
	@PostMapping("/register")
	public @ResponseBody ClientMessage registerCat(@RequestBody Cat cat) {
		logger.info("In Register Method");
		return (catService).insertCat(cat) ? REGISTRATION_SUCCESSFUL : SOMETHING_WRONG;
		}

	@PostMapping("/update")
	public @ResponseBody ClientMessage updateCat(@RequestBody Cat cat) {
		return (catService).updateCat(cat) ? UPDATE_SUCCESSFUL : SOMETHING_WRONG;
	}


}
