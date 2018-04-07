package com.revature.util;

import com.revature.ajax.ClientMessage;

public class ClientMessageUtil {
	public static final ClientMessage REGISTRATION_SUCCESSFUL = new ClientMessage("REGISTRATION SUCCESSFUL", true);
	public static final ClientMessage SOMETHING_WRONG = new ClientMessage("SOMETHING WENT WRONG", false);
	public static final ClientMessage FRIENDSHIP_APPROVED = new ClientMessage("FRIENDSHIP APPROVED", true);
	public static final ClientMessage FRIENDSHIP_DELETED = new ClientMessage("FRIENDSHIP DELETED", true);
}
