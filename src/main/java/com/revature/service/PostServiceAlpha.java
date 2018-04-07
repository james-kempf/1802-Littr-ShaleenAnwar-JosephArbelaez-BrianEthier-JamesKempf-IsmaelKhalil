package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Cat;
import com.revature.model.Post;
import com.revature.repository.PostRepository;

public class PostServiceAlpha implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	//private FriendshipRepository friendshipRepository;
	private static Logger logger = Logger.getLogger(PostServiceAlpha.class);
	
	@Override
	public boolean insertPost(Post post) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updatePost(Post post) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Post findPost(Post post) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> findAllPosts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
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
		// TODO Auto-generated method stub
		return false;
	}

}
