package com.revature;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.model.Friendship;
import com.revature.service.CatService;
import com.revature.service.FriendshipService;

public class FriendshipTest {
	
	private static Logger logger = Logger.getLogger(FriendshipTest.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
				= new ClassPathXmlApplicationContext("applicationContext.xml");
		
		FriendshipService friendshipService = applicationContext.getBean("friendshipService", FriendshipService.class);
		
		CatService catService = applicationContext.getBean("catService", CatService.class);
		
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
		//catService.insertCat(atlas);
		//catService.insertCat(koushka);
		//catService.insertCat(emack);
		logger.info(friendshipService.findAllFriends(atlas));
		List<Friendship> friendships = friendshipService.findAllFriendships(atlas);
		logger.info(friendships);
		logger.info(friendshipService.approveFriendship(friendships.get(0)));
		logger.info(friendshipService.deleteFriendship(friendships.get(1)));

	}
}
