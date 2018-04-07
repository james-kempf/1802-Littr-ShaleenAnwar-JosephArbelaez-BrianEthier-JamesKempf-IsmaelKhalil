package com.revature.service;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

public interface PasswordTokenService {

	/**
	 * Returns a PasswordToken for a given cat
	 */
	public abstract PasswordToken selectPasswordToken(Cat cat);
	
	/**
	 * inserts a new PasswordToken for a given cat, returns if successful
	 */
	public abstract boolean insertPasswordToken(Cat cat);
	
	/**
	 * Deletes the PasswordToken of a given cat, returns if successful
	 */
	public abstract boolean deletePasswordToken(Cat cat);
	
	/**
	 * Sends an password recovery email to the given cat, returns if successful
	 */
	public abstract boolean resetPassword(Cat cat);
}
