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
	//private FriendshipRepository friendshipRepository;	

	@Override
	public boolean insertPost(Post post) {
		logger.info("Inserting Post.");
		if (post.getId() != 0){
			postRepository.save(post);	
			return true;
		} else{
			return false;
		}
	}

	@Override
	public boolean updatePost(Post post) {
		logger.info("Updating Post.");
		Post post2 = post;

		// Find previous version of post
		Post post1 = postRepository.selectSinglePost(post.getId());
		logger.info("Post present in database");

		postRepository.update(post);
		// Compare to previous to see if update occurred.

		if (post1.equals(post2)){
			logger.info("PostServiceAlpha.updatePost - Post Update Failed.");
			return false;
		}
		logger.info("PostControllerAlpha.submit Post - Insert Successful");
		return true;
	}

	@Override
	public Post findPost(Post post) {
		logger.info("PostServiceAlpha - Find Post");
		return postRepository.selectSinglePost(post.getId());
	}

	@Override
	public List<Post> findAllPosts() {
		logger.info("PostServiceAlpha - Find All Posts");
		return postRepository.selectAll();
	}

	public List<Post> findPostsByCat(Cat cat, Cat search) {
		if(cat != null) {
			if(cat.getId() == search.getId()) {
				return postRepository.selectUserPosts(cat.getId());
			} else if (true){
				//check if friends
				return postRepository.selectUserPosts(cat.getId());
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	@Override
	public boolean deletePost(Post post) {
		logger.info("PostServiceAlpha - Delete Post");
		Post post1 = postRepository.selectSinglePost(post.getId());
		postRepository.delete(post);

		if (postRepository.selectSinglePost(post1.getId()).equals(post1)){
			return false;
		}
		return true;
	}
}
