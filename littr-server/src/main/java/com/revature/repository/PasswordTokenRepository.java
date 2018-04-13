package com.revature.repository;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

public interface PasswordTokenRepository {

	/**
	 * Returns a PasswordToken for a given cat
	 */
	public abstract PasswordToken selectPasswordToken(Cat cat);
	
	/**
	 * inserts a new PasswordToken
	 */
	public abstract boolean insertPasswordToken(PasswordToken passwordToken);
	
	/**
	 * Deletes a given PasswordToken
	 */
	public abstract void deletePasswordToken(PasswordToken passwordToken);
	
	/**
	 * Updates a password for a given cat, returns if successful
	 */
	public abstract boolean updatePassword(PasswordToken passwordToken, String newPassword);
}
