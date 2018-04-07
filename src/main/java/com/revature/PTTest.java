package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PTTest {

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
	}
}
