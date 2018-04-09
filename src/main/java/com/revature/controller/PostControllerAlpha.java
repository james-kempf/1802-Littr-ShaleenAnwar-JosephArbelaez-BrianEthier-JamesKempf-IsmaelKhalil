package com.revature.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.Post;
import com.revature.service.PostService;
import com.revature.util.ClientMessageUtil;
import com.revature.model.Cat;
import com.revature.model.Post;
import com.revature.service.PostService;

@Controller("postController")
@CrossOrigin(origins = "http://localhost:4200")
public class PostControllerAlpha implements PostController {

	@Autowired
	private PostService postService;

	private static Logger logger = Logger.getLogger(PostControllerAlpha.class);

	@PostMapping("/submitPost")
	public @ResponseBody ClientMessage submitPost(@RequestBody Cat cat, Post post) {
		logger.trace("PostControllerAlpha.submitPost");
		
		// ~*~*~* Add authentication when website is up *~*~*~
		if (postService.insertPost(post)) {
			logger.trace("PostControllerAlpha.submit Post - Insert Successful");
			return ClientMessageUtil.INSERT_SUCCESSFUL;
		}
		logger.trace("PostControllerAlpha.submit Post - Insert Failed");
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@PostMapping("/updatePost")
	public @ResponseBody ClientMessage updatePost(@RequestBody Post post) {
		logger.trace("PostControllerAlpha.updatePost");

		// ~*~*~* Add authentication when website is up *~*~*~
		if (postService.updatePost(post)){
			logger.trace("PostControllerAlpha.submit Post - Insert Successful");
			return ClientMessageUtil.INSERT_SUCCESSFUL;
		}
		logger.trace("PostControllerAlpha.submit Post - Insert Failed.");
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@PostMapping("/deletePost")
	public @ResponseBody ClientMessage deletePost(@RequestBody Post post) {
		// ~*~*~* Add authentication when website is up *~*~*~
		if(postService.deletePost(post)){
			return ClientMessageUtil.DELETE_SUCCESSFUL;
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@PostMapping("/findPost")
	public @ResponseBody Post findPost(@RequestBody Cat cat, Post post) {
		return postService.findPost(post);
	}

	@GetMapping("/findAllPost")
	public @ResponseBody List<Post> findAllPosts() {
		return postService.findAllPosts();
	}

	@PostMapping("/findAllPostByCat")
	public @ResponseBody List<Post> findAllPostsByCat(Cat cat) {
		return postService.findPostsByCat(cat, cat);
	}
	
	@PostMapping("/catPosts") //TODO: determine mapping
	public @ResponseBody List<Post> findPostsByCat(@RequestBody Cat cat, HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		return postService.findPostsByCat(loggedCat,cat);
	}
}
