package com.revature;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.model.FriendStatus;
import com.revature.model.Friendship;
import com.revature.service.CatService;
import com.revature.service.FriendshipService;

public class DriverBrian {
	
	private static Logger logger = Logger.getLogger(DriverBrian.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
	
	logger.info("Brian-main");
	
	FriendshipService friendshipService = applicationContext.getBean("friendshipService", FriendshipService.class);
	CatService catService = applicationContext.getBean("catService", CatService.class);
	
	Cat emack = catService.findCatByName("emack");
	logger.info("emack: " + emack);
	Cat atlas = catService.findCatByName("atlas");
	logger.info("atlas: " + atlas);
	
	Friendship emackAtlas = new Friendship(
			emack, atlas,
			new FriendStatus(2,"APPROVED"),
			Timestamp.valueOf(LocalDateTime.now()));
	logger.info("emackAtlas: " + emackAtlas);
	friendshipService.insert(emackAtlas);
	 
	logger.info("emackAtlas: " + emackAtlas);
	
	logger.info("friends?" + friendshipService.findFriendshipByCat(emack, atlas));
	logger.info("friends?" + friendshipService.findFriendshipByCat(atlas, emack));
	
	
	}
}
