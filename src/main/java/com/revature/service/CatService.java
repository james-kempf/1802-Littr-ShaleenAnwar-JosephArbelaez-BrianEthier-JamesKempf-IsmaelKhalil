package com.revature.service;

import java.util.List;

import com.revature.model.Cat;

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
	public abstract List<Cat> findCatByName(String name);
	
	/**
	 * Returns a list of all Cats in the database
	 */
	public abstract List<Cat> findAllCats();
	
	/**
	 * Returns all friends of the given Cat
	 */
	public abstract List<Cat> findAllFriends(Cat cat);
}
