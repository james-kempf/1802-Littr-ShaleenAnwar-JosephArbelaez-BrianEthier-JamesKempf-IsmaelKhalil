package com.revature.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.Image;
import com.revature.model.Post;
import com.revature.repository.PostRepository;

@Service("postService")
public class PostServiceAlpha implements PostService {

	@Autowired
	PostRepository postRepository;
  
  @Autowired
	private FriendshipService friendshipService;

	private static Logger logger = Logger.getLogger(PostServiceAlpha.class);
	//private FriendshipRepository friendshipRepository;	

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

	public List<Post> findPostsByCat(Cat cat, Cat search) {
		if(cat != null) {
			if(cat.getId() == search.getId()) {
				logger.info("findpostbycat: same cat.");
				return postRepository.selectUserPosts(cat);
			} else if (friendshipService.findFriendshipByCat(cat, search)){
				logger.info("findpostbycat: cats are friends.");
				return postRepository.selectUserPosts(search);
			} else {
				logger.info("findpostbycat: cats are not friends.");
				new ClientMessage(""+cat.getUsername()+ " is not friends with " + search.getUsername());
				//need to alter to return clientMessages.
				return null;
			}
		} else {
			logger.info("findpostbycat: first cat doesnt exist.");
			return null;
		}
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
