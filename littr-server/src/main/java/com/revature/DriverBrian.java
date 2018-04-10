package com.revature;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;

public class DriverBrian {
	
	private static Logger logger = Logger.getLogger(DriverBrian.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
	
	logger.trace("new Cat" + new Cat("TestCatUser", "tempPW"));
	
	}
}
