package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

public class PostControllerAlpha implements PostController {

	private static PostController postController = new PostControllerAlpha();
	
	private PostControllerAlpha(){}
	
	public static PostController getInstance(){
		return postController;
	}
	
	private static Logger logger = Logger.getLogger(PostControllerAlpha.class);
	
	@Override
	public Object getPost(HttpServletRequest request) {
		
		return null;
	}

	@Override
	public Object getAllPosts(HttpServletRequest request) {
		
		return null;
	}

	@Override
	public Object submitPost(HttpServletRequest request) {		
	
		return null;
	}

	@Override
	public Object updatePost(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

}
