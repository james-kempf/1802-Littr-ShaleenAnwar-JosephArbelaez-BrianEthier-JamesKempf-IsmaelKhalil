package com.revature.util;

import com.revature.ajax.ClientMessage;

public class ClientMessageUtil {
	public static final ClientMessage REGISTRATION_SUCCESSFUL = new ClientMessage("REGISTRATION SUCCESSFUL", true);
	public static final ClientMessage SOMETHING_WRONG = new ClientMessage("SOMETHING WENT WRONG", false);
	public static final ClientMessage RECOVERY_SUCCESSFUL = new ClientMessage("RECOVERY EMAIL SENT", true);
	public static final ClientMessage RESET_SUCCESSFUL = new ClientMessage("RESET SUCCESSFUL", true);
}
