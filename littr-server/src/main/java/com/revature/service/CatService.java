package com.revature.service;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface CatService {
	
	/**
	 * Inserts a new cat and returns if successful
	 */
	public abstract boolean insertCat(Cat cat);
	/**
	 * Logs a cat in
	 * @return 
	 */
	public abstract Cat authenticate(Cat cat);
	
	/**
	 * Update cat by ID and returns if successful
	 */
	public abstract Cat findCat(Cat cat);
	
	/**
	 * Returns a list of cats with a given name
	 */
	public abstract Cat findCatByName(String name);
	
	/**
	 * Returns a list of all Cats in the database
	 */
	public abstract List<Cat> findAllCats();
	
	public abstract List<Cat> findAllFriends(Cat cat);
	public abstract boolean updateCat(Cat cat);
}
