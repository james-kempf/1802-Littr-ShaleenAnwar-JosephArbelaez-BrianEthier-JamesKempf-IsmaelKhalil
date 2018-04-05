package com.revature.service;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Post;

public interface PostService {
	
	/**
	 * Insert a new post and return if successful
	 */
	public abstract boolean insertPost(Post post);
	
	/**
	 * Update post and return if successful
	 */
	public abstract boolean updatePost(Post post);
	
	/**
	 * Find a post by Id or Username
	 */
	public abstract Post findPost(Post post);
	
	/**
	 * Return a List of all Posts
	 */
	public abstract List<Post> findAllPosts();
	
	/**
	 * Return a List of Posts with a from a specific user
	 */
	public abstract List<Post> findPostsByCat(Cat cat);
	
	/**
	 * Delete a specific post and return if successful
	 */
	public abstract boolean deletePost(Post post);
}
