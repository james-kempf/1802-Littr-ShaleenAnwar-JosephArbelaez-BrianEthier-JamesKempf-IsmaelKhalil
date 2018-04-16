package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.Post;

public interface PostController {
	
	ClientMessage submitPost(Post post);
	ClientMessage updatePost(Post post);
	ClientMessage deletePost(Post post);
	Post findPost(Cat cat, Post post);
	List<Post> findAllPosts();
	List<Post> findAllPostsByCat(Cat cat);
	public List<Post> findPostsByCat(Cat cat, HttpServletRequest request);
	List<Post> findFriendsPost(Cat cat);
}
