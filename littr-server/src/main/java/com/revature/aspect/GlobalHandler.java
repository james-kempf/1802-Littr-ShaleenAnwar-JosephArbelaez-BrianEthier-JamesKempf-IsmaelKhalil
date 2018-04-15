package com.revature.aspect;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.revature.ajax.ClientMessage;
import com.revature.util.ClientMessageUtil;

@ControllerAdvice
public class GlobalHandler {

	private static Logger logger = Logger.getLogger(GlobalHandler.class);
	
	/**
	 * Global Exception Handler
	 */
	@ExceptionHandler(Throwable.class)
	public ResponseEntity<ClientMessage> handleAnyException(Throwable t) {
		logger.error("Internal error.", t);
		return new ResponseEntity<>(ClientMessageUtil.SOMETHING_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
