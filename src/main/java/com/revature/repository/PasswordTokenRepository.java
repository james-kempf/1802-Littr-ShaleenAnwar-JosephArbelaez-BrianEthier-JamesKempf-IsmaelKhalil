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
	public abstract void insertPasswordToken(PasswordToken passwordToken);
	
	/**
	 * Deletes a given PasswordToken
	 */
	public abstract void deletePasswordToken(PasswordToken passwordToken);
}
