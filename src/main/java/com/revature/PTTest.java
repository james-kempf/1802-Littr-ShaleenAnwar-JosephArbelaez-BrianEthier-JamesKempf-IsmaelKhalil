package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;
import com.revature.service.PasswordTokenService;

public class PTTest {

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
		
		PasswordTokenService pts = applicationContext.getBean("passwordTokenService", PasswordTokenService.class);
		
		Cat atlas = new Cat(
				200,
				"atlas",
				"p4ssw0rd",
				"Atlas",
				"jamesk4321@gmail.com",
				"He flop",
				null
				);
		pts.recoverPassword(atlas);
		PasswordToken pt = pts.selectPasswordToken(atlas);
		String np = "newp4ssw0rd";
		pts.resetPassword(pt, np);
	}
}
