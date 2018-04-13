package com.revature.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.PasswordToken;
import com.revature.service.PasswordTokenService;
import com.revature.util.ClientMessageUtil;

@Controller("passwordRecoveryController")
@CrossOrigin(origins = "http://localhost:4200")
public class PasswordRecoveryControllerAlpha implements PasswordRecoveryController {
	
	private static Logger logger = Logger.getLogger(PasswordRecoveryControllerAlpha.class);
	
	@Autowired
	PasswordTokenService passwordTokenService;

	@Override
	@PostMapping("/password-recovery")
	public @ResponseBody ClientMessage recoverPassword(@RequestBody String email) {
		logger.info("Reseting " + email);
		Cat cat = new Cat();
		cat.setEmail(email);
		return passwordTokenService.recoverPassword(cat) ? ClientMessageUtil.RECOVERY_SUCCESSFUL : ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	@PostMapping("/password-reset")
	public @ResponseBody ClientMessage resetPassword(@RequestBody PasswordToken passwordToken, @RequestBody String newPassword) {
		return passwordTokenService.resetPassword(passwordToken, newPassword) ? ClientMessageUtil.RESET_SUCCESSFUL : ClientMessageUtil.SOMETHING_WRONG;
	}
}
