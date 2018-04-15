package com.revature.controller;

import java.util.List;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;

public interface CatInformationController {
	ClientMessage registerCat(Cat cat);
	Cat getCat(Cat cat);
	ClientMessage updateCat(Cat cat);
	
	/**
	 * Returns a list of all cats
	 */
	public abstract List<Cat> findAllCats();
}
