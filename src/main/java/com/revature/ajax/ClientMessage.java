package com.revature.ajax;

public class ClientMessage {
	private String message;
	private boolean success;
	
	public ClientMessage() {}
	
	public ClientMessage(String message) {
		this.message=message;
	}

	public ClientMessage(String message, boolean success) {
		super();
		this.message = message;
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	
	
}
