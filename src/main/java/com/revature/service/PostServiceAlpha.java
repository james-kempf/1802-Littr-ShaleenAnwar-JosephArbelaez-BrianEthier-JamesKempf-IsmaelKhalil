package com.revature.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Cat;
import com.revature.model.Image;
import com.revature.model.Post;
import com.revature.repository.PostRepository;

@Service("postService")
public class PostServiceAlpha implements PostService {

	@Autowired
	PostRepository postRepository;

	private static Logger logger = Logger.getLogger(PostServiceAlpha.class);

	@Override
	public boolean insertPost(Post post) {
		logger.trace("Inserting Post.");
		if (post.getId() != 0){
			postRepository.save(post);	
			return true;
		} else{
			return false;
		}
	}

	@Override
	public boolean updatePost(Post post) {
		logger.trace("Updating Post.");
		Post post2 = post;

		// Find previous version of post
		Post post1 = postRepository.selectSinglePost(post.getId());
		logger.trace("Post present in database");

		postRepository.update(post);
		// Compare to previous to see if update occurred.

		if (post1.equals(post2)){
			logger.trace("PostServiceAlpha.updatePost - Post Update Failed.");
			return false;
		}
		logger.trace("PostControllerAlpha.submit Post - Insert Successful");
		return true;
	}

	@Override
	public Post findPost(Post post) {
		logger.trace("PostServiceAlpha - Find Post");
		return postRepository.selectSinglePost(post.getId());
	}

	@Override
	public List<Post> findAllPosts() {
		logger.trace("PostServiceAlpha - Find All Posts");
		return postRepository.selectAll();
	}

	@Override
	public List<Post> findPostsByCat(Cat cat) {
		logger.trace("PostServiceAlpha - Find Posts by Cat");
		
		// Implementation for getting all posts that a Cat can read.
		return postRepository.selectUserPosts(cat.getId());
	}

	@Override
	public boolean deletePost(Post post) {
		logger.trace("PostServiceAlpha - Delete Post");
		Post post1 = postRepository.selectSinglePost(post.getId());
		postRepository.delete(post);

		if (postRepository.selectSinglePost(post1.getId()).equals(post1)){
			return false;
		}
		return true;
	}
}
