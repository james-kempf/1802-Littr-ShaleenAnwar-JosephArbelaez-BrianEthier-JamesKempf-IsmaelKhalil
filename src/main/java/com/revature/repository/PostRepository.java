package com.revature.repository;

import java.util.List;
import java.util.Set;

import com.revature.model.Post;

public interface PostRepository {
	void save(Post post);
	void update(Post post);
	Post selectSinglePost(int id);
	List<Post> selectAll();
	List<Post> selectUserPosts(int catId);
	
}
