package com.revature;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.service.CatService;

public class FriendshipTest {
	
	private static Logger logger = Logger.getLogger(FriendshipTest.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
				= new ClassPathXmlApplicationContext("applicationContext.xml");
		
		CatService catService = applicationContext.getBean("catService", CatService.class);
		
		logger.trace("Main");
		Cat c = new Cat(
				"atlas",
				"p4ssw0rd",
				"Atlas",
				"altas@gmail.com",
				"He flop",
				null
				);
		catService.insertCat(c);
	}
}
