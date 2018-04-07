package com.revature.util;

import com.revature.ajax.ClientMessage;

public class ClientMessageUtil {
	public static final ClientMessage REGISTRATION_SUCCESSFUL = new ClientMessage("REGISTRATION SUCCESSFUL", true);
	public static final ClientMessage SOMETHING_WRONG = new ClientMessage("SOMETHING WENT WRONG", false);
	public static final ClientMessage LOGIN_SUCCESSFUL = new ClientMessage("LOGIN SUCCESSFUL", true);
	
}
