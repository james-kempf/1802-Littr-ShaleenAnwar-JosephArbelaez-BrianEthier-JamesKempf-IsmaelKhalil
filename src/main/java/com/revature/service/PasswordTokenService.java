package com.revature.service;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

public interface PasswordTokenService {

	/**
	 * Returns a PasswordToken for a given cat
	 */
	public abstract PasswordToken selectPasswordToken(Cat cat);
	
	/**
	 * Inserts a new PasswordToken and sends the cat an email, returns if successful
	 */
	public abstract boolean recoverPassword(Cat cat);
	
	/**
	 * Deletes the PasswordToken of a given cat, returns if successful
	 */
	public abstract boolean deletePasswordToken(Cat cat);
	
	/**
	 * Sends an password recovery email to the given cat, returns if successful
	 */
	public abstract boolean resetPassword(Cat cat);
}
