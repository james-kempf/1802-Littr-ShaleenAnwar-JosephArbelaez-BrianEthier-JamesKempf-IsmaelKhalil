package com.revature.controller;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.PasswordToken;

public interface PasswordRecoveryController {

	/**
	 * Handles password recovery page
	 */
	public abstract ClientMessage recoverPassword(Cat cat);
	
	/**
	 * Handles password reset page
	 */
	public abstract ClientMessage resetPassword(PasswordToken passwordToken, String newPassword);
}
