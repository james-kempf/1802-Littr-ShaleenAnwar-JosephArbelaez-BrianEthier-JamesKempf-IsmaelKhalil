package com.revature;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.model.Image;
import com.revature.model.Post;
import com.revature.service.CatService;
import com.revature.service.ImageService;
import com.revature.service.PostService;
import com.revature.service.PostServiceAlpha;

public class PostTest {
	private static Logger logger = Logger.getLogger(FriendshipTest.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");

		PostService ps = applicationContext.getBean("postService", PostService.class);	
		CatService catService = applicationContext.getBean("catService", CatService.class);
		ImageService imageService = applicationContext.getBean("imageService", ImageService.class);
		Cat atlas = new Cat(
				1050,
				"atlas",
				"p4ssw0rd",
				"Atlas",
				"jamesk4321@gmail.com",
				"He flop",
				null);
		Image image = new Image(50,
				"https://s3.amazonaws.com/revature.1802february.littr/littleCat",
				atlas);
		//imageService.insertImage(image);
		//imageService.deleteImage(image);
		//imageService.setProfilePic(atlas, image);
		imageService.selectAllImagesByCat(atlas);
	}
}
