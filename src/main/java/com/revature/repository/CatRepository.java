package com.revature.repository;

import java.util.List;

import com.revature.model.Cat;

public interface CatRepository {
	public int save(Cat cat); 
	public List<Cat> findAllUsers();
	public Cat findByName(String name);
	public Cat findById(int id);
	public List<Cat> findByNameLike(String pattern);
	public List<Cat> findAllFriends(Cat cat);
}