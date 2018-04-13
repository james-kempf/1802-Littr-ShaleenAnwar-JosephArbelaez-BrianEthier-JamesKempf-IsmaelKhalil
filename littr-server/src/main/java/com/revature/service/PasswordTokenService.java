package com.revature.service;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

public interface PasswordTokenService {

	/**
	 * Returns a PasswordToken for a given cat
	 */
	public abstract PasswordToken selectPasswordToken(Cat cat);
	
	/**
	 * Sends a password recovery email to the given cat, returns if successful
	 */
	public abstract boolean recoverPassword(Cat cat);
	
	/**
	 * Deletes the PasswordToken of a given cat, returns if successful
	 */
	public abstract boolean deletePasswordToken(Cat cat);
	
	/**
	 * Resets a cat's password, returns if successful
	 */
	public abstract boolean resetPassword(PasswordToken passwordToken);
}
