package com.revature.controller;

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
	
	@Autowired
	PasswordTokenService passwordTokenService;

	@Override
	@PostMapping("/recover-password")
	public @ResponseBody ClientMessage recoverPassword(@RequestBody Cat cat) {
		return passwordTokenService.recoverPassword(cat) ? ClientMessageUtil.RECOVERY_SUCCESSFUL : ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	@PostMapping("/reset-password")
	public @ResponseBody ClientMessage resetPassword(@RequestBody PasswordToken passwordToken, @RequestBody String newPassword) {
		return passwordTokenService.resetPassword(passwordToken, newPassword) ? ClientMessageUtil.RESET_SUCCESSFUL : ClientMessageUtil.SOMETHING_WRONG;
	}
}
