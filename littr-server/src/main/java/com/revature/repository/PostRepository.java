package com.revature.repository;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Post;

public interface PostRepository {
	void save(Post post);
	void update(Post post);
	void delete(Post post);
	Post selectSinglePost(int id);
	List<Post> selectAll();
	List<Post> selectUserPosts(Cat cat);
	
}
