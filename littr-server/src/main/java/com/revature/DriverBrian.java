package com.revature;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.model.Post;
import com.revature.service.CatService;
import com.revature.service.FriendshipService;
import com.revature.service.PostService;

public class DriverBrian {
	
	private static Logger logger = Logger.getLogger(DriverBrian.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
	
	logger.info("Brian-main");
	
	FriendshipService friendshipService = applicationContext.getBean("friendshipService", FriendshipService.class);
	CatService catService = applicationContext.getBean("catService", CatService.class);
	PostService postService = applicationContext.getBean("postService", PostService.class);
	
	Cat emack = catService.findCatByName("emack");
	logger.info("emack: " + emack);
	Cat atlas = catService.findCatByName("atlas");
	logger.info("atlas: " + atlas);
	Cat koushka = catService.findCatByName("koushka");
	logger.info("koushka: " + koushka);
	
	/*
	Friendship emackAtlas = new Friendship(
			emack, atlas,
			new FriendStatus(2,"APPROVED"),
			Timestamp.valueOf(LocalDateTime.now()));
	logger.info("emackAtlas: " + emackAtlas);
	friendshipService.insertFriendship(emackAtlas);
	 
	logger.info("emackAtlas: " + emackAtlas);
	*/
	//logger.info("friends?" + friendshipService.findFriendshipByCat(emack, atlas));
	//logger.info("friends?" + friendshipService.findFriendshipByCat(atlas, emack));
	logger.info("friends?" + friendshipService.findFriendshipByCat(atlas, koushka));
	
	Post koushPost = new Post(1, koushka, 
			Timestamp.valueOf(LocalDateTime.now()),
			null, "Koushka Post");
	
	Post koushPost2 = new Post(1, koushka, 
			Timestamp.valueOf(LocalDateTime.now()),
			null, "A random Koushka Appears");
	//logger.info("insert koush post 1: " + postService.insertPost(koushPost));
	//logger.info("insert koush post 2: " + postService.insertPost(koushPost2));
	
	logger.info("koushka looking at koushka post: " + postService.findPostsByCat(koushka, koushka));
	logger.info("atlas looking at koushka post: " + postService.findPostsByCat(atlas, koushka));
	logger.info("emack looking at koushka posts: " + postService.findPostsByCat(emack, koushka));
	}
}
