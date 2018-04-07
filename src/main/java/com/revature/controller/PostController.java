package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

public interface PostController {
	
	public Object getPost (HttpServletRequest request);
	
	public Object getAllPosts (HttpServletRequest request);
	
	public Object submitPost (HttpServletRequest request);
	
	public Object updatePost (HttpServletRequest request);
}
