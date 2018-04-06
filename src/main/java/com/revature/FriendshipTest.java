package com.revature;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.service.FriendshipService;

public class FriendshipTest {
	
	private static Logger logger = Logger.getLogger(FriendshipTest.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
				= new ClassPathXmlApplicationContext("applicationContext.xml");
		
		FriendshipService friendshipService = applicationContext.getBean("friendshipService", FriendshipService.class);
		
		logger.trace("Main");
		Cat atlas = new Cat(
				200,
				"atlas",
				"p4ssw0rd",
				"Atlas",
				"altas@gmail.com",
				"He flop",
				null
				);
		Cat koushka = new Cat(
				"koushka",
				"p4ssw0rd",
				"Koushla",
				"koushka@gmail.com",
				"Such purr",
				null
				);
		Cat emack = new Cat(
				"emack",
				"p4ssw0rd",
				"Emack",
				"emack@gmail.com",
				"Expert hunter",
				null
				);
//		catService.insertCat(atlas);
//		catService.insertCat(koushka);
//		catService.insertCat(emack);
		logger.info(friendshipService.findAllFriends(atlas));
		logger.info(friendshipService.findAllFriendships(atlas));
	}
}
