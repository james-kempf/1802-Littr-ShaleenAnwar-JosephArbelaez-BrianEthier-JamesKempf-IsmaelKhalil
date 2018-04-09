package com.revature.util;

import com.revature.ajax.ClientMessage;

public class ClientMessageUtil {
	public static final ClientMessage REGISTRATION_SUCCESSFUL = new ClientMessage("REGISTRATION SUCCESSFUL", true);
	public static final ClientMessage UPDATE_SUCCESSFUL = new ClientMessage("UPDATE SUCCESSFUL", true);
	public static final ClientMessage SOMETHING_WRONG = new ClientMessage("SOMETHING WENT WRONG", false);
	public static final ClientMessage RECOVERY_SUCCESSFUL = new ClientMessage("RECOVERY EMAIL SENT", true);
	public static final ClientMessage RESET_SUCCESSFUL = new ClientMessage("RESET SUCCESSFUL", true);
	public static final ClientMessage INSERT_SUCCESSFUL = new ClientMessage("INSERT SUCCESSFUL", true);
	public static final ClientMessage DELETE_SUCCESSFUL = new ClientMessage("DELETE SUCCESSFUL", true); 
	public static final ClientMessage FRIENDSHIP_APPROVED = new ClientMessage("FRIENDSHIP APPROVED", true);
	public static final ClientMessage FRIENDSHIP_DELETED = new ClientMessage("FRIENDSHIP DELETED", true);
	public static final ClientMessage LOGIN_SUCCESSFUL = new ClientMessage("LOGIN SUCCESSFUL", true);
}
