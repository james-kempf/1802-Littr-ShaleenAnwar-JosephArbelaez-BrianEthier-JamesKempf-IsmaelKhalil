package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.Cat;
import com.revature.model.Post;
import com.revature.service.PostService;

public class PostControllerAlpha implements PostController {

	@Autowired
	private PostService postService;
	
	@PostMapping("/catPosts") //TODO: determine mapping
	public @ResponseBody List<Post> findPostsByCat(@RequestBody Cat cat, HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		return postService.findPostsByCat(loggedCat,cat);
	}

}
