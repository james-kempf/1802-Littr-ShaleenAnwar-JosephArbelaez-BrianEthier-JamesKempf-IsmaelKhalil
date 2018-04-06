package com.revature.repository;

import java.util.List;

import org.hibernate.SQLQuery;

import com.revature.model.Cat;

public interface CatRepository {
	void save(Cat cat); 
	void update(Cat cat);
	List<Cat> findAllUsers();
	Cat findByName(String name);
	Cat findById(int id);
	List<Cat> findAllFriends(Cat cat);
	
	List<Cat> findByNameLike(String pattern);
	
	SQLQuery getPasswordHash(Cat cat);
}